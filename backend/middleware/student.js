const studentMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(400).json({
            msg: "You are not signed in" 
        })
    }
}