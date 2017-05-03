const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")

/*
GET  /signUp Show Sign Up form
POST /signUp Register User || Show sign Up Form with error messages
GET  /clean  Remove all user's records from your collection
GET  /       Display User Info (only works after signUp)
*/

router.get("/", (req, res) => {
    // req.cookies.sessionID
    // get the session from the DB
        //get the owner (user) of the session
    res.render("home", {...})
})

router.get("/signUp", (req, res) => {
    res.render("sessions/signUp")
})

router.post("/signUp", (req, res) => {
    // get the info from the body
    // save record to the db
        
        // if error ... Show errors in signUp
            // error.errors.email.message
            // error.errors.password.message
        // else create session
            // add sessionID to cookie
            res.cookie('sessionID', session._id, { maxAge: 900000, httpOnly: false });
            // redirect to "/"

})

module.exports = router