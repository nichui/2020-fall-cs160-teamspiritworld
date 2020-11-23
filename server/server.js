
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors")
//DB Config
const config = require('./config/config').get(process.env.NODE_ENV);
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require('./routes/userRoute');
const resourceRoute = require('./routes/resourceRoute');
const categoryRoute = require('./routes/categoryRoute');
const imageRoute = require('./routes/cloudinary')

const cookieParser = require('cookie-parser');


//const passport = require("passport");
//-------------------
//const user = require('./routes/userRoute');
//const passport = require("passport");
//----------------

//Connect to Mongo
mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


//bodyparser middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users',userRoute);//user route
app.use('/api/resources',resourceRoute)//resource route
app.use('/api/categories',categoryRoute )
app.use('/api/image', imageRoute)
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

//api/users/Register
// Passport middleware
//app.use(passport.initialize());// Passport config
//require("./config/passport")(passport);// Routes


//connect to server port
const port = process.env.PORT || 3002;
app.listen(port, ()=>{

    console.log(`SERVER RUNNING ON PORT ${port}`);
}

);

