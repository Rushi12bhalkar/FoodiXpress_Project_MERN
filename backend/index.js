require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = process.env.MONGODB_URL

app.use((req,res,next)=>
{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  next();
})

async function connect()
{
  try{
    await mongoose.connect(url);
    console.log("Connected Successfully")
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async function(err, data){

      const foodCategory = await mongoose.connection.db.collection("food_categary");
      foodCategory.find({}).toArray(function(err,catData){
        if(err)
         {
            console.log(err)
         }
         else
         {
           global.food_items = data;
           global.food_categary = catData;
           
         }
      })

      // if(err)
      // {
      //   console.log(err)
      // }
      // else
      // {
      //   global.food_items = data
  
      // }
    })
  }
  catch(error)
  {
    console.error(error);
  }
}

connect();



app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.get("/", (req,res)=>{
  res.send("Hello World")
})



app.listen(process.env.PORT, () =>
{
  console.log("Server is Running on PORT 5000")
})
