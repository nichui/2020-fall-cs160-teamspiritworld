const mongoose = require('mongoose');
const Review = require('./reviewResource');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
})

ImageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload', '/upload/w_300');
});

const ResourceSchema = new Schema({
    title: String,
    images: [ImageSchema],
    content: String, //price
    category: String, // description
    location: String,
    reviews:[{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

ResourceSchema.post('findOneAndDelete', async function(document){
    if(document){
        await Review.deleteMany({
            _id: {
                $in: document.reviews
            }
        })
    }
})

module.exports = mongoose.model('Resource', ResourceSchema);
