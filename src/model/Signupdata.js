
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<anusreeict>:<ictlibrary>@cluster0.bzxxo.mongodb.net/Library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const SignupSchema = new Schema({

    username : String,
    email : String,
    pass : String,
    number : String
});

var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;