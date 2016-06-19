var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var blogSchema   = new Schema({
    author_name: String,
    title: String,
    text: String,
    poster: String,
    topic: String,
    date:Date
});

module.exports = mongoose.model('Blog_Model', blogSchema, 'Blog_DB');
