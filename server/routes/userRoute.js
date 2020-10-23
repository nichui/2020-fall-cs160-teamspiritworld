const express = require('express');
const router = express.Router();
const bcrypt = require( 'bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config').get(process.env.NODE_ENV);;


//MIDDLEWARE
const {auth} = require('../middleware/auth');


//MODELS
const {User} = require("../models/user");
// Load input validation
const validateRegisterInput = require("../validator/register");
const validateLoginInput = require("../validator/login");


///
/*
router.post('/register',(req,res)=>{

    //console.log('works')
    const user = new User(req.body);
    user.save((err,doc)=>{
        if(err) return res.json({success:false});
        res.status(200).json({

            success:true,
            user:doc
        })

    })
})
*/
// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register",(req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password
        });
  
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
    
  } catch (e) {
    res.status(400).json({ error: e.message });
  }/*
    try{
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        user.save((err,doc)=>{
            if(err) return res.json({success:false});
            res.status(200).json({
    
                success:true,
                user:doc
            })
        })
      
          
        const newUser = new User({
          firstname: req.body.name,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password
        });
        
  
      }
    
    });
  } catch(e){
    res.status(400).json({ error: e.message });
  }
  */
  });
  
 /*
 router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
  
    try {
      const user = await User.findOne({ email });
      if (user) throw Error('User already exists');
  
      const salt = await bcrypt.genSalt(10);
      if (!salt) throw Error('Something went wrong with bcrypt');
  
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error('Something went wrong hashing the password');
  
      const newUser = new User({
        firstname,
        lastname,
        email,
        password: hash
      });
  
      const savedUser = await newUser.save();
      if (!savedUser) throw Error('Something went wrong saving the user');
  
      const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
        expiresIn: 3600
      });
  
      res.status(200).json({
        token,
        user: {
          id: savedUser.id,
          firstname: savedUser.firstname,
          lastname: savedUser.lastname,
          email: savedUser.email
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });
  */
//Find user by email
/*
router.post('/login', (req,res)=>{
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }


  
  User.findOne({'email':req.body.email},(err,user)=>{
        //check if user exists
        if(!user) return res.json({
            auth:false,
            message: 'Auth failed, email not found',
            userData: false,
        });
        
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                auth:false,
                message: 'Wrong password',
                userData: false,
            });

            //usertoken
            user.generateToken((err,user)=>{

                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).json({

                    auth: true
                });

            })

    })
        
    })
  //catch (e) {
    //res.status(400).json({ msg: e.message });
  //}
});
*/

router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ 
        auth:false,
        message: 'Auth failed, email not found',
        userData: false,
       });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          config.SECRET,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ 
            auth:false,
                message: 'Wrong password',
                userData: false,
           });
      }
    });
  });
});

router.get('/auth',auth,(req,res)=>{

    res.json({
        auth:true,
        userData:{
            id:req.user._id,
            email: req.user.email,
            name: req.user.name,
            lastname: req.user.lastname
        }
    })
})
/*
router.get('/logout',auth,(req,res)=>{

    req.user.deleteToken(req.token,()=>{
        if(err) return res.status(400).send(err);
        res.status(200).send('goodbye');
    })
})
*/
module.exports = router;





