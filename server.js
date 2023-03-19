const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv/config")

app.use(express.json());

app.get('/post',(req,res)=>{
  res.send("hellow")
})


const movieRoute = require("./routes/movies");
app.use('/movies', movieRoute);

const  connect = async () =>{ 

try {
    const data = await mongoose.connect(process.env.DB_CONNECTION,{})
    console.log("data")
  } catch (err) {
    console.log(err)
  }

}
connect()

app.listen(3000,()=>{
console.log("helloe")
})