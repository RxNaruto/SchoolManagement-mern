const { JWT_SECRET } = require("../config");
const jwt= require('jsonwebtoken');

const studentMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(400).json({
            msg: "You are not signed in" 
        })
    }
    const token = authHeader.split(' ')[1];
    console.log(token);

    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        if(decoded.userId){
            req.userId = decoded.userId;
        next();
        }
        else{
            return res.status(403).json({
                
                msg: "You are not authorized"
            })
        }
    }
    catch(err){
        console.log(req.userId);
        return res.status(403).json({
            msg: "you are not authorized 32"
        });
    }
}

module.exports={
    studentMiddleware
}