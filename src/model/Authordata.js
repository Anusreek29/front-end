//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://<anusreeict>:<ictlibrary>@cluster0.bzxxo.mongodb.net/Library?retryWrites=true&w=majority');


//Schema definition , declaring database structure
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    name : String,
    country : String,
    works : String,
    dob : String,
    image : String
});

//Model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;