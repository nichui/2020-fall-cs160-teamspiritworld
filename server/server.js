const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//DB Config
const config = require('./config/config').get(process.env.NODE_ENV);

const userRoute = require('./routes/userRoute');
const resourceRoute = require('./routes/resourceRoute');

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
app.use('/api/resources',resourceRoute);//resource route


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

