const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    text: String,
    image: String,
    type: String,
    minutesToRead: Number,
    date: Date
});

module.exports = mongoose.model("Blog", blogSchema)