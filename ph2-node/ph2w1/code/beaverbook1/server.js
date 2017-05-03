var express = require("express")
var app = express()

// Set view engine folder
app.set('view engine', 'ejs')
app.set('view cache', false);

// Body parser for forms
var bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// public assets
app.use('/public', express.static('public'))

// routes =>
/* ------------------- INDEX -------------------*/
// GET  "/"                     => show all beaver

/* ------------------- CREATE -------------------*/
// GET  "/beaver"                => Create new Beaver
// POST "/beaver"                => Create new Beaver
//                                 Redirect to "/beaver/:id"

/* ------------------- READ -------------------*/
// GET  "/beaver/:id"             => View Beaver Info with id ...

/* ------------------- UPDATE -------------------*/
// GET  "/beaver/:id/update"     => update Beaver with id...
// POST "/beaver/:id/update"     => update Beaver with id...
//                                 Redirect to "/beaver/:id"

/* ------------------- DELETE -------------------*/
// GET  "/beaver/:id/delete"     => delete Beaver with id...
// POST "/beaver/:id/delete"     => delete Beaver with id...
//                                 Redirect to "/"


Beavers = [{name:"Julia"}, {name: "Sam"}, {name: "patty"}]
// Schema => ["name"]

/*
    WorkFlow:
        Add some Beavers to the beavers array!
        Create Index Page
            Controller
            View
                X Scheleton
                X Create EJS loop that outputs all the html with the Beavers names
                X Button to Create Beaver
        Create "Create Page" => Read Page view
            Controller (Scheleton)
            Add button to "Create page view" (GET) in "Index Page view"
            Create "Create Page view"
            Build the Contoller
        Create "Read Page" => Read Page view
            Controller
            Create "Read Page view"
                add button to redirect to "Index view"
                add button to redirect to "Update view"
        Create "Update Page"
        Create "Delete Page"
            Add button to "Delete page view" (GET) in "Index Page view"
            Create "Delete Page view"
*/


app.get("/", function(req, res){
    res.render("index", {beavers: Beavers})
})

app.get("/beavers", function(req, res){
    res.render("create")
})

app.post("/beavers", function(req, res){
    Beavers.push({name: req.body.submittedName})
    var id = Beavers.length - 1
    res.redirect("/beavers/" + id)
})

app.get("/beavers/:id", function(req, res){
    var beaverId = req.params.id
    res.render("read", {id: beaverId, beaver: Beavers[beaverId] })
})

app.get("/beavers/:id/update", function(req, res){
    var beaverId = req.params.id
    res.render("update", {id: beaverId, beaver: Beavers[beaverId] }) // id, beaver
})

app.post("/beavers/:id/update", function(req, res){
    var beaverId = req.params.id
    Beavers[beaverId].name = req.body.submittedName
    res.redirect("/beavers/" + beaverId)
})

app.get("/beavers/:id/delete", function(req, res){
    var beaverId = req.params.id
    res.render("delete", {id: beaverId}) // id
})

app.post("/beavers/:id/delete", function(req, res){
    var beaverId = req.params.id
    if (beaverId !== "0") delete Beavers[beaverId]
    res.redirect("/")
})

app.listen(3001, function() {
    console.log("litening in port 3001")
})