//require("dotenv/config")
const cloudinary = require("../util/cloudinary")
const express = require('express');
const router = express.Router();
const {Image} = require('../models/image');


//image upload configuration

const multer = require("multer")



const storage = multer.diskStorage({
    filename: function(req,file, callback){
        callback(null, Date.now() + file.originalname);
    }
})
const imageFilter = function(req, file, cb){
    //accept image files only
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
        return cb(new Error("only image files are accepted!"), false);
    }
    cb(null, true);
}
const upload = multer({storage: storage, fileFilter: imageFilter})


/*
cloudinary.config({
    cloud_name: "drfqvbb8y",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET

})
*/
/*
router.post ('/add', upload.single("image"),  (req,res) => {
    cloudinary.uploader.upload(req.file.path, function(err, result){
        if(err){
            
            req.json(err.message);
        }
    
    req.body.image = result.secure_url;
    //add image's public_id to image object
    req.body.imageId = result.public_id;
    Image.create(req.body, function(err, image){
        if(err){
            
            res.json(err.message)
            return res.redirect('/');
        }
    })
})
    
});
*/
router.post("/add", upload.single("image"), async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
  
      // Create new user
      let image = new Image({
        title: req.body.name,
        image: result.secure_url,
        imageId: result.public_id,
      });
      // Save user
      await image.save();
      res.json(image);
    } catch (err) {
      console.log(err);
    }
  });
router.get("/", (req,res)=>{
    Image.find(function(err, images){
        if(err){
            res.json(err.message)
        }
        else{
            res.json(images);
        }
    })
})



module.exports = router;