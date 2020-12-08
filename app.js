
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
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
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./DataDisplay/user');
const userRoutes = require('./ResourceRoutes/users');

const resourcesRoutes = require('./ResourceRoutes/resources');
const reviewsRoutes = require('./ResourceRoutes/reviews');
const dotenv = require("dotenv");
dotenv.config();


const dbUrl = process.env.DB_URL || process.env.DATABASE;

mongoose.connect(dbUrl,{
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

const secret = process.env.SECRET || 'This is a Secret';

// cookies
const sessionConfig={
    secret,
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
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((request, response, next) =>{
    console.log(request.session)
    response.locals.currentUser = request.user;
    //console.log(response.locals.currentUser);
    response.locals.success = request.flash('success');
    response.locals.error =  request.flash('error');
    next();
})

app.get('/testUser', async(request, response) =>{
    const user = new User({email: 'Karik@sjsu.edu', username: 'Karik'})
    const newUser =  await User.register(user, 'chicken');
    response.send(newUser);
})

app.use('/', userRoutes)
app.use('/resources', resourcesRoutes)
app.use('/resources/:id/reviews', reviewsRoutes)


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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})