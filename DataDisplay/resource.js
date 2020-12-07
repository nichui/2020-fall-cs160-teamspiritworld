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

const opts= {toJSON: {virtuals:true}};

const ResourceSchema = new Schema({

    title: String,
    images: [ImageSchema],
    geometry:{
        type:{
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates:{
            type: [Number],
            required: true
        }

    },
    content: String, 
    category: String, 
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
}, opts);



ResourceSchema.virtual('properties.popUpMarkup').get(function(){
    return `<strong><a href="/resources/${this._id}">${this.title}</a></strong>
        <p>${this.content.substring(0,30)}...</p>`
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
