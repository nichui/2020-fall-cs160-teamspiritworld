const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
    title: String,
    image: String,
    content: String, //price
    category: String, // description
    location: String,
});

module.exports = mongoose.model('Resource', ResourceSchema);
