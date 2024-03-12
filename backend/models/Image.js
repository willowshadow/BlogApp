const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    imageName: String,
    desc: String,
    img:
    {
        url: String,
        contentType: String
    }
})

module.exports = mongoose.model('Image', imageSchema)