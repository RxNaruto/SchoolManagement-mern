const express = require("express");
const router = express.Router(); 
const {signupBody} = require("../types/student");
const { Student } = require("../database/db");
const { error } = require("console");

router.get("/test",(req,res)=>{
    res.json({
        msg: "student router working fine "
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
            const findUser = await Student.findOne({
                username: req.body.username
            })
            if(findUser){
                 return res.status(403).json({
                    msg: "User already exist"
                })
            }
            else{
            const user = await Student.create({
                username: req.body.username,
                password: req.body.password,
                name: req.body.name,
                rollno: req.body.rollno,
                mobileno: req.body.mobileno
            })
            if(user){
                return res.json({
                    msg: "user created successfully"
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