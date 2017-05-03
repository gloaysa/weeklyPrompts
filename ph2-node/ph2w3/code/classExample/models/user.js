const mongoose = require("mongoose")
const Schema = mongoose.Schema

var validateEmail = function(email) {
    // regular expression
    var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/;
    return re.test(email)
};

var userSchema = new Schema({
    email:     {
                type: String,
                trim: true, 
                lowercase: true,
                required: 'Email address is required',
                validate: [validateEmail, 'Please fill a valid email address'],
                unique: true
                },
    password:  {
                type: String,
                required: 'Password missing or too short (at least 8 characters)',
                minlength: 8
                }
})

mongoose.model("userCollection", userSchema)