const express = require('express');
const router = express.Router();

//MIDDLEWARE
const {auth} = require('../middleware/auth');


//MODELS
const {User} = require("../models/user");


///
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

router.post('/login',(req,res)=>{

    User.findOne({'email':req.body.email},(err,user)=>{

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

router.get('/logout',auth,(req,res)=>{

    req.user.deleteToken(req.token,()=>{
        if(err) return res.status(400).send(err);
        res.status(200).send('goodbye');
    })
})

module.exports = router;





