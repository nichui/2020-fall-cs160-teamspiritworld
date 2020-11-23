const express = require('express');
const router = express.Router();

//Resource model
const {Category} = require('../models/category');
const {Resource} = require('../models/resource');

const slugify = require("slugify");
var ObjectID = require('mongodb').ObjectID;   


//@route POST api/resources
//@desc Get All popular Resources
//@access Private
router.post ('/category', async (req,res) => {
    try{
        const {name} = req.body;
        const category = await new Category({name, slug: slugify(name)}).save();
        res.json(category);

    }catch(err){
        //console.log(err)
        res.status(400).send("Create category failed")

    }   
});
router.get("/", async(req,res) => {
  

     res.json(await Category.find({}).sort({createdAt: -1}).populate("category").exec());

})
router.get("/category/:slug", async (req, res)=>{

    let category = await (await Category.findOne({slug: req.params.slug})).exec();
    const resources = await Resource.find({category}).populate("category").exec();
    res.json({
        category,
        resources
    })

    
})
router.put("/category/:slug", async(req, res)=> {
    const {name} = req.body;
    try {
        const updated = await Category.findOneAndUpdate(
        {slug: req.params.slug}, 
        {name,slug: slugify(name)},
        {new: true});
        res.json(updated)

    }catch (err){
        res.status(400).send("Create update failed ")

    }

})
router.delete("/category:slug", async(req,res)=>{
    try {
        const deleted = await Category.findOneAndDelete({slug: req.params.slug});
        res.json(deleted);

    }catch (err){
        res.status(400).send("Create delete failed ")
    }
})

module.exports = router;

