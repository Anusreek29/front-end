//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://<anusreeict>:<ictlibrary>@cluster0.bzxxo.mongodb.net/Library?retryWrites=true&w=majority');


//Schema definition , declaring database structure
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//Model creation
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;