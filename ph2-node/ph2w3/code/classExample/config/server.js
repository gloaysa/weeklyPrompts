var express = require("express")
var app = express()

// Set view engine folder
app.set('view engine', 'ejs')
app.set('view cache', false);

// Body parser for forms
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Access cookies as objects
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// public assets
app.use('/public', express.static('public'))

// initialize Controllers
var sessionsController = require("../controllers/sessions")
app.use("/", sessionsController)

app.listen(3001, function() {
    console.log("litening in port 3001")
})