const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<anusreeict>:<ictlibrary>@cluster0.bzxxo.mongodb.net/Library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const AdminSchema = new Schema({

    username : String,
    pass : String
    
});

var Admindata = mongoose.model('admin',AdminSchema);

module.exports = Admindata;