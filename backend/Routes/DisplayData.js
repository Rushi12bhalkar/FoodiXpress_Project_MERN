const express = require('express')
const router = express.Router()

router.post('/fooddata', (req,res)=>
{
    try{
        res.send([global.food_items,global.food_categary])
        // console.log(global.food_items)
    }
    catch(error){
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;