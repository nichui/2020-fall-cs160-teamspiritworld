const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const MethodOverride = require('method-override');
const ejsMate = require('ejs-mate');
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

app.get('/', (req, res) => {
    res.render('home')
})

/*app.get('/makeresource', async(req, res) => {
    const resource = new Resource({title: 'Food Pantry'
    , content: 'Located at SJSU is one of the nicest recreational places that students can go enjoy, relax and play with their friends'});
    await resource.save();
    res.send(resource)
})*/

app.get('/resources', async(req,res) =>{
    const resources = await Resource.find({});
    res.render('resources/index', {resources})
})

app.get('/resources/AddResource', (req, res) =>{
    res.render('resources/AddResource');
})

app.post('/resources', async(req, res, next) =>{
    try{
        const resource = new Resource(req.body.resource);
        await resource.save();
        res.redirect(`/resources/${resource._id}`)
    } catch(e){
        next(e);
    }

})

app.get('/resources/:id', async(req,res) =>{
    const resource = await Resource.findById(req.params.id)
    res.render('resources/ShowResource', {resource});
})

app.get('/resources/:id/EditResource', async(req,res) =>{
    const resource = await Resource.findById(req.params.id)
    res.render('resources/EditResource', {resource});
})

app.put('/resources/:id', async(req, res) =>{
    const {id} = req.params;
    const resource = await Resource.findByIdAndUpdate(id, {...req.body.resource});
    res.redirect(`/resources/${resource._id}`)
})

app.delete('/resources/:id', async(req, res) =>{
    const {id} = req.params;
    await Resource.findByIdAndDelete(id);
    res.redirect('/resources');
})

app.use((error, require, resolve, next) => {
    resolve.send('Something went wrong!')
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})