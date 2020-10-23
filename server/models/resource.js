const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    
    content:{
        type:String,
        default: 'n/a',
        required: true 
    },
    category:{
        type:String,
        default: 'n/a',
        required: true 
    },
    
    rating:{
        type:Number,
        required: true,
        min:1,
        max:5
    },
    /*
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
    */
});

const Resource = mongoose.model('Resource',resourceSchema);
module.exports = { Resource }
