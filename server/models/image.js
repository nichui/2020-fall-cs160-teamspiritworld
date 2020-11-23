const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = mongoose.Schema({
    title: String,
    image: String,
    imageId: String
    
});

const Image = mongoose.model('Image',resourceSchema);
module.exports = { Image }