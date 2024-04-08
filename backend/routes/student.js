const express = require("express");
const router = express.Router(); 
const {signupBody, signinBody} = require("../types/student");
const { Student } = require("../database/db");
const { error } = require("console");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const { studentMiddleware } = require("../middleware/student");

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
router.get("/signin",async(req,res)=>{
    const signinValidation=signinBody.safeParse(req.body);
    if(!signinValidation.success){
        return res.status(403).json({
            msg: "incorrect input"
        })
    }
    else{
        try{
            const findUser= await Student.findOne({
                username: req.body.username,
                password: req.body.password
            })
            if(findUser){
                const userId=findUser._id;
                const token = jwt.sign({userId},JWT_SECRET);

                return res.status(200).json({
                    msg: "Sign in Successful",
                    token: token
                })
            }
            else{
                return res.status(403).json({
                         msg: "User doesn't exist"
                })
            }
        }catch(err){
            res.status(500).json({
                msg: "An unexpected error occured"
            })
        }
    }
})

router.put("/update",studentMiddleware, async(req,res)=>{
    const updateUser= await Student.updateOne(req.body , {
        id: req.userId

    })
    if(updateUser){
         return res.status(200).json({
            msg: "user details updated"
        })
    }
    else{
        return res.status(500).json({
            msg: "internal server error"
        })
    }

})


module.exports=router;