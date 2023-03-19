const express = require("express")
const { get } = require("mongoose")
const router = express.Router()
const movie = require('../models/movie')

router.post('/',async(req,res)=>{
    
    const mes = new movie({
      name:req.body.name,
      password:req.body.password,
      email:req.body.email,   
      title:req.body.title,
      img:req.body.img,
      des:req.body.des
    })


    try{
        const moviesave = await mes.save();
        res.json(moviesave);
    }
        catch(err){
            res.json({message : err})
        }
    
})

get

router.get("/",async(req,res)=>{
    try{
    const movieget = await movie.find()
    res.json(movieget)
    }
    catch(err){
        res.json (err)
    }
})

router.get("/:id",async(req,res)=>{
    try{
    const moviegetid = await movie.findById(req.params.id)
    res.json(moviegetid)
    }
    catch(err){
        res.json (err)
    }
})

router.patch("/:id",async(req,res)=>{
    try{
    const movieupdate = await movie.updateOne(
        {_id : req.params.id},{

         $set : {
            name:req.body.name,
            password:req.body.password,
            email:req.body.email, 
         },
        }
    )
    res.json(movieupdate)
    }
    catch(err){
        res.json (err)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
    const moviedelte = await movie.remove({_id :req.params.id})
    res.json(moviedelte)
    }
    catch(err){
        res.json (err)
    }
})


router.post("/random",async(req,res)=>{

const type= req.query.type;  

    try{
    const movierandom = await movie.aggregate([
        {$match:{}},
        {$sample:{side:1}}
    ])
    res.json(movierandom)
    }
    catch(err){
        res.json (err)
    }
})

    


module.exports = router;