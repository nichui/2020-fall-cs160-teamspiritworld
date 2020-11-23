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
        type: Schema.Types.ObjectId,
       /// default: 'n/a',
        required: true,
        ref: "Category",
    },
    
    image: {
        //data: Buffer,
        //contentType: String,
        type: Schema.Types.ObjectId,
       /// default: 'n/a',
        required: true,
        ref: "Image",
    
    },
    /*
    rating:{
        type:Number,
        required: true,
        min:1,
        max:5
    },
    */
    
    ratings:[
        {
            star: Number,
            postedBy: {type: Schema.Types.ObjectId, ref: "User"},
        },
    ],
    
    
   
},{timestamps: true});
/*
resourceSchema.index({
    title: 'text',
    content: 'text',
})
*/
const Resource = mongoose.model('Resource',resourceSchema);
module.exports = { Resource }
