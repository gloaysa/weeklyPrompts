// connect to DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/authenticationApp')

// require models
require("../models/user.js")
require("../models/session.js")