const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const MethodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const catchAsync = require('./WebpageDisplay/Utility/CatchAsync');
const ValidateError = require('./WebpageDisplay/Utility/ValidateError');
const Review = require('./DataDisplay/reviewResource')
//const Joi = require('joi');
const {resourceSchema, reviewSchema} = require('./ValidateSchemas.js');
const Resource = require('./DataDisplay/resource');


mongoose.connect('mongodb://localhost:27017/spirit-world',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


const database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", () =>{
    console.log("Database connected");
})

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'WebpageDisplay'))

app.use(express.urlencoded({extended: true}))
app.use(MethodOverride('_method'))

const validateResource = (request, response, next) =>{

    const {error} = resourceSchema.validate(request.body);

    if(error){
        const message = error.details.map(element => element.message).join(',')
        throw new ValidateError(message, 400)
    }
    else
    {
        next();
    }
}

const validateReview = (request, response, next) =>{
    const{error} = reviewSchema.validate(request.body);
    if(error){
        const message = error.details.map(element => element.message).join(',')
        throw new ValidateError(message, 400)
    }
    else
    {
        next();
    }
}

app.get('/', (req, res) => {
    res.render('home')
})

/*app.get('/makeresource', async(req, res) => {
    const resource = new Resource({title: 'Food Pantry'
    , content: 'Located at SJSU is one of the nicest recreational places that students can go enjoy, relax and play with their friends'});
    await resource.save();
    res.send(resource)
})*/

app.get('/resources', catchAsync(async(req,res) =>{
    const resources = await Resource.find({});
    res.render('resources/index', {resources})
}))

app.get('/resources/AddResource', (req, res) =>{
    res.render('resources/AddResource');
})


app.post('/resources', validateResource, catchAsync(async(req, res, next) =>{
    /*if(!req.body.resource){
        throw new ValidateError('Invalid Resource Data', 400);
    }*/
    /*if(!req.body.resource.category)
    {

    }
    if(!req.body.resource.image)
    {

    }*/
    /*const resourceSchema = Joi.object({
        resource: Joi.object({
            title: Joi.string().required(),
            //title: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['sjsu.edu'] } }).required(),
            category: Joi.string().required(),
            image: Joi.string().required(),
            location: Joi.string().required(),
            content: Joi.string().required(),
        }).required()
    })
    const {error} = resourceSchema.validate(req.body);

    if(error){
        const message = error.details.map(element => element.message).join(',')
        throw new ValidateError(message, 400)
    }*/
    //console.log(result);
    const resource = new Resource(req.body.resource);
    await resource.save();
    res.redirect(`/resources/${resource._id}`)
}))

app.get('/resources/:id', catchAsync(async(req,res) =>{
    const resource = await Resource.findById(req.params.id).populate('reviews');
    //console.log(resource);
    res.render('resources/ShowResource', {resource});
}))

app.get('/resources/:id/EditResource', catchAsync(async(req,res) =>{
    const resource = await Resource.findById(req.params.id)
    res.render('resources/EditResource', {resource});
}))

app.put('/resources/:id', validateResource,catchAsync(async(req, res) =>{
    const {id} = req.params;
    const resource = await Resource.findByIdAndUpdate(id, {...req.body.resource});
    res.redirect(`/resources/${resource._id}`)
}))

app.delete('/resources/:id', catchAsync(async(req, res) =>{
    const {id} = req.params;
    await Resource.findByIdAndDelete(id);
    res.redirect('/resources');
}))

app.post('/resources/:id/reviews', validateReview, catchAsync(async(request, response) =>{
    const resource = await Resource.findById(request.params.id);
    const review = new Review(request.body.review);
    resource.reviews.push(review);
    await review.save();
    await resource.save();
    response.redirect(`/resources/${resource._id}`);
}))

app.delete('/resources/:id/reviews/:reviewId', catchAsync(async(request, response) =>{
    const{id, reviewId} = request.params;
    await Resource.findByIdAndUpdate(id, {$pull: { reviews: reviewId}});
    await Review.findByIdAndDelete(request.params.reviewId);
    response.redirect(`/resources/${id}`);
}))

app.all('*', (request, resolve, next) =>{
    next(new ValidateError('Page Not Found', 404))
})

app.use((error, request, resolve, next) => {
    const {statusCode = 500, message='Something went wrong'} = error;
    if(!error.message){
        error.message = 'Something went wrong!'
    }
    resolve.status(statusCode).render('ErrorLayout', {error})
    //resolve.status(statusCode).send(message);
    //resolve.send('Something went wrong!')
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})