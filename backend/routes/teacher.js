const express = require("express");
const router = express.Router();

router.get("/test",(req,res)=>{
    res.json({
        msg: "teacher route working fine"
    })
})

module.exports=router;