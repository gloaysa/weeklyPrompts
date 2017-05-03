var express = require('express');
var app = express();
var path = require('path');


app.use('/', express.static(path.join(__dirname + '/beaverApp')));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/beaverBrowser.html'));
});

app.listen(8080, ()=>{
	console.log('listening on 8080');
});