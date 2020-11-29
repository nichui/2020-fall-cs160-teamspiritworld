const mongoose = require('mongoose');
const Review = require('./reviewResource');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
    title: String,
    images: [
        {
            url: String,
            filename: String
        }
    ],
    content: String, //price
    category: String, // description
    location: String,
    reviews:[{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
  rateAvg: Number,
  rateCount: Number,
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
