const {User} = require('../models/user');

let auth=(req,res,next)=>{
    let token = req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.send(false);

        req.token = token;
        req.user = user;//can put user's name
        next();
    })
}
module.exports = {auth}