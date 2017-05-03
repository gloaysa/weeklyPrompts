const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// module to configure and implement sessions           ---------------
const session = require('express-session');
// module used to connect sessions to mongodb           ---------------
const MongoStore = require('connect-mongo')(session);

// unchanged from Zellwk
const db;
MongoClient.connect('mongodb://zellwk:zellwk@ds047955.mongolab.com:47955/star-wars-quotes', (err, database) => {
  if (err) return console.log(err);
  db = database;
});

// unchanged from Zellwk
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

 
// configuring sessions for this application            ---------------  
// for a complete treatment of the options, 
//    refer to the 'README.md' in the 'node_module' file
app.use(session({
    // a little security
    secret: ', top',
    // telling 'session' to use our existing mongodb connection as a store
    store: db,
    // maxAge is measured in miliseconds.  
    //   this sets them to expire in 10 seconds
    cookie: {maxAge: 10000}
}));

// the session logic, treating each user differently.   ----------------
// variables:   time since last visit (via maxAge)
//              number of visits on current cookie
app.get('/', function(req, res, next) {
  var sess = req.session;
   // if it isn't the first visit on their current cookie
   if (sess.views) { 
    // figure out this inside bit yourself, it's not that bad
    if (sess.views <= 5) {
      sess.views++;
      db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.render('index.ejs', {quotes: result});
      });
    } 
    else {
      res.setHeader('Content-Type', 'text/html');
      res.write('too bad');
      res.end();
    }
  } 
  // if it is their first visit on their current cookie
  else {
    sess.views = 1;
    res.end('welcome to the session demo. refresh!');
  }
});

// you have seen the rest before

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.render('index.ejs', {quotes: result});
  });
});


app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  });
});

app.put('/quotes', (req, res) => {
  db.collection('quotes') 
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
});

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({name: req.body.name}, (err, result) => {
    if (err) return res.send(500, err);
    res.send('A darth vadar quote got deleted');
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on 3000');
});


