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
const session = require('express-session');
const flash = require('connect-flash');

const resources = require('./ResourceRoutes/resources');
const reviews = require('./ResourceRoutes/reviews');


mongoose.connect('mongodb://localhost:27017/spirit-world',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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
app.use(express.static(path.join(__dirname, 'public')));

// cookies
const sessionConfig={
    secret: 'This is a Secret',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //expire time for sign in
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
app.use(flash());

app.use((request, response, next) =>{
    response.locals.success = request.flash('success');
    response.locals.error =  request.flash('error');
    next();
})

app.use('/resources', resources)
app.use('/resources/:id/reviews', reviews)

app.get('/', (req, res) => {
    res.render('home')
})

/*app.get('/makeresource', async(req, res) => {
    const resource = new Resource({title: 'Food Pantry'
    , content: 'Located at SJSU is one of the nicest recreational places that students can go enjoy, relax and play with their friends'});
    await resource.save();
    res.send(resource)
})*/

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