const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required:"Name is required",
        minlength: [3, 'Too short'],
        maxlength: [32, 'Too long'],
       
    },
    slug:{
        type: String,
        unique: true,
        lowercase: true,
        index: true,

    },
},
    {timestamps: true}
    
    );

const Category = mongoose.model('Category',categorySchema);
module.exports = { Category }
