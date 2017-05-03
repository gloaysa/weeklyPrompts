const mongoose = require("mongoose")
const Schema = mongoose.Schema

var sessionSchema = new Schema({
    userID:    {type: String, required: true}
})

mongoose.model("sessionCollection", sessionSchema)