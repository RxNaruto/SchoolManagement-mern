const express = require("express");
const router = express.Router(); 
const {signupBody} = require("../types/teacher");
const { Teacher } = require("../database/db");
const { error } = require("console");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const { signinBodyTeacher } = require("../types/teacher");
const { signupBodyTeacher } = require("../types/teacher");
const { teacherMiddleware } = require("../middleware/teacher");

router.get("/test",(req,res)=>{
    res.json({
        msg: "teacher router working fine "
    })
})

router.post("/signup",async (req,res)=>{
    const signupValdidation=signupBodyTeacher.safeParse(req.body);
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
                console.log(userId);
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
    const signinValidation=signinBodyTeacher.safeParse(req.body);
    if(!signinValidation.success){
        return res.status(403).json({
            msg: "incorrect input"
        })
    }
    else{
        try{
            const findUser= await Teacher.findOne({
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

router.put("/update", teacherMiddleware, async (req, res) => {
    try {
        const updatedTeacher = await Teacher.findOneAndUpdate(
            { _id: req.userId },
            req.body,
            { new: true }
        ); 

        if (!updatedTeacher) {
            return res.status(404).json({
                 msg: "User not found" 
                });
        }

        res.json({
             msg: "Updated successfully", student: updatedTeacher });
    } catch (error) {
        res.status(500).json({ 
            msg: "Internal server error" 
        });
    }
});



router.get("/test2",teacherMiddleware,(req,res)=>{
    res.status(200).json({
        msg: "authorized user"
    })
})


module.exports=router;