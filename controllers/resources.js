const Resource = require('../DataDisplay/resource');
const {cloudinary} = require("../cloudinary");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({accessToken: mapBoxToken});


module.exports.index = async(req,res) =>{
    const resources = await Resource.find({});
    res.render('resources/index', {resources})
}

module.exports.renderAddForm = (req, res) =>{
    res.render('resources/AddResource');
}

module.exports.createResource = async(req, res, next) =>{

    /*if(!req.body.resource){
        throw new ValidateError('Invalid Resource Data', 400);
    }*/
    /*if(!req.body.resource.category)
    {

    }
    if(!req.body.resource.image)
    {

    }*/
    /*const resourceSchema = Joi.object({
        resource: Joi.object({
            title: Joi.string().required(),
            //title: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['sjsu.edu'] } }).required(),
            category: Joi.string().required(),
            image: Joi.string().required(),
            location: Joi.string().required(),
            content: Joi.string().required(),
        }).required()
    })
    const {error} = resourceSchema.validate(req.body);

    if(error){
        const message = error.details.map(element => element.message).join(',')
        throw new ValidateError(message, 400)
    }*/
    //console.log(result);
    const geoData = await geocoder.forwardGeocode({
        query: req.body.resource.location,
        limit: 1
    }).send()
    const resource = new Resource(req.body.resource);
    resource.geometry = geoData.body.features[0].geometry;
    resource.images = req.files.map(f =>({
        url: f.path, filename: f.filename
    }));
    resource.author = req.user._id; // match author's name with corresponding resource
    await resource.save();
    console.log(resource);
    req.flash('success', 'Successfully made a new Resource!');
    res.redirect(`/resources/${resource._id}`)
}

module.exports.showResource = async(req,res) =>{
    const resource = await Resource.findById(req.params.id).populate({
        path: 'reviews',
        populate:{
            path: 'author'
        }
    }).populate('author');
    //console.log(resource);
    if(!resource){
        req.flash('error', 'The Resource can not be found!');
        return res.redirect('/resources');
    }
    res.render('resources/ShowResource', {resource});
}

module.exports.renderEditForm = async(req,res) =>{
    const {id} = req.params;
    const resource = await Resource.findById(id)
    if(!resource){
        req.flash('error', 'The Resource can not be found!');
        return res.redirect('/resources');
    }
    /* if(!req.user._id.equals('5fc0bfa1b5254a2488b31aa8')) this one can make Teo1 is admin
    * and admin is only one can edit resource*/
    /*if current user's ID is different with author then can't edit resource*/
    /*  */

    res.render('resources/EditResource', {resource});
}

module.exports.updateResource = async(req, res) =>{
    const {id} = req.params;
    console.log(req.body);
    const resource = await Resource.findByIdAndUpdate(id, {...req.body.resource});
    const imgs = req.files.map(f =>({
        url: f.path, filename: f.filename
    }));
    resource.images.push(...imgs);
    if(req.body.deleteImages)
    {
        for(let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename);
        }
        await resource.updateOne({$pull:{images: {filename: {$in: req.body.deleteImages}}}})
        //console.log(resource)
    }
    await resource.save()
    req.flash('success', 'Resource is successfully updated!!!');
    res.redirect(`/resources/${resource._id}`)
}

module.exports.deleteResource = async(req, res) =>{
    const {id} = req.params;
    await Resource.findByIdAndDelete(id);
    req.flash('success', 'Resource is successfully deleted')
    res.redirect('/resources');
}