const {jwtSecret} = require("../utils")

const jwt = require("jsonwebtoken")

const authMiddleWare = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || authHeader.startsWIth("Bearer ")){
        return res.status(403).josn({});
    }
    const token  = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token,jwtSecret)
        req.userId = decoded.userId;
        next();
    } catch (error) {   
            res.status(403).json({})
    }
}

module.exports ={
    authMiddleWare
}