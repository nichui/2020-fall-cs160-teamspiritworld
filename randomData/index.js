const buildings = require('./buildings');
const mongoose = require('mongoose');
const Resource = require('../DataDisplay/resource');
const {firstTitle, secondTitle} = require('./dataHelper');


mongoose.connect('mongodb://localhost:27017/spirit-world',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const sample =(arr) => arr[Math.floor(Math.random() * arr.length)];

const database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", () =>{
    console.log("Database connected");
})



const randomDataDB = async() =>{
    await Resource.deleteMany({});
    /*const r = new Resource({title: 'SJSU Bowling'});
    await r.save();*/
    for(let i = 0; i < 10; i++){
        const ran = Math.floor(Math.random() * 1000);
        const resource = new Resource({
            //USER ID KARIK
            author: '5fc0b3c54cd5d712ccfc4fe0',
            location: `${buildings[ran].Room}, ${buildings[ran].Building}`,
            title: `${sample(firstTitle)} ${sample(secondTitle)}`,
            category: 'School Resources',
            //image: 'https://source.unsplash.com/1600x900/?school,university',
            content: 'The Society of Asian Scientists & Engineers (SASE) at San Jose State University aims to fulfill the three pillar mission of SASE National',
            geometry:{
                "type": "Point",
                "corrdinates": [buildings[ran].longitude,
                buildings[ran].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/drfqvbb8y/image/upload/v1606567516/SpiritWorld/qh5m3klzfsckgphrfbru.jpg',
                    filename: 'SpiritWorld/qh5m3klzfsckgphrfbru'
                },
                {
                    url: 'https://res.cloudinary.com/drfqvbb8y/image/upload/v1606567422/SpiritWorld/ulq3dgd9l912v5dc3au4.jpg',
                    filename: 'SpiritWorld/ulq3dgd9l912v5dc3au4'
                }
            ],
        })
        await resource.save();
    }
}

randomDataDB().then(()=> {
    mongoose.connection.close();
})

/*
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../../../Downloads/YelpCamp-c12b6ca9576b48b579bc304f701ebb71d6f9879a/DataDisplay/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})*/
