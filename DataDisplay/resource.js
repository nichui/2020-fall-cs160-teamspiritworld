const mongoose = require('mongoose');
const Review = require('./reviewResource');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
    title: String,
    image: String,
    content: String, //price
    category: String, // description
    location: String,
    reviews:[{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
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
