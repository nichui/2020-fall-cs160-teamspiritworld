const config = {

    production: {

        SECRET:process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
       //cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //api_key: process.env.CLOUDINARY_API_KEY,
    //api_secret: process.env.CLOUDINARY_API_SECRET

    },
    default:{
 

      SECRET:'SUPERSECRETPASSWORD123',
      DATABASE: 'mongodb://localhost:27017/spiritworld',
      //cloud_name: 'drfqvbb8y',
     //api_key: '145231154474129',
      //api_secret: 'btnli3W8SIMxe7I4rgcsSYjg-10'
  
    }
}

exports.get = function get(env){
    return config[env] || config.default

}