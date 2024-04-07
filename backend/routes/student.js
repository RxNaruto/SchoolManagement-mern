const express = require("express");
const router = express.Router();

router.get("/test",(req,res)=>{
    res.json({
        msg: "student router working fine "
    })
})



module.exports=router;