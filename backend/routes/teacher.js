const express = require("express");
const router = express.Router(); 
const {signupBody} = require("../types/teacher");
const { Teacher } = require("../database/db");
const { error } = require("console");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")

router.get("/test",(req,res)=>{
    res.json({
        msg: "teacher router working fine "
    })
})

router.post("/signup",async (req,res)=>{
    const signupValdidation=signupBody.safeParse(req.body);
    if(!signupValdidation.success){
        return res.status(403).json({
            msg: "Incorrect inputs"
        })
    }
    else{
        try{
            const findUser = await Teacher.findOne({
                username: req.body.username
            })
            if(findUser){
                 return res.status(403).json({
                    msg: "User already exist"
                })
            }
            else{
            const user = await Teacher.create({
                username: req.body.username,
                password: req.body.password,
                name: req.body.name,
                id: req.body.id,
                mobileno: req.body.mobileno
            })
            if(user){
                const userId = user._id;
                const token = jwt.sign({userId},JWT_SECRET);
                return res.json({
                    msg: "user created successfully",
                    token: token
                })
            }
        }
        }catch(err){
             return res.status(404).json({
                msg: "unexpected error occured"
             })

        }
    }
})


module.exports=router;