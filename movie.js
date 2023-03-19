const mongoose = require ("mongoose")
 
const movieSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    email:{
          type:String,
          required:true
    },

    title :{
    type:String,
    required:true
    },
    des:{
        type:String
    },
    img:{
        type:String
    },
})


module.exports  = mongoose.model("movie",movieSchema)