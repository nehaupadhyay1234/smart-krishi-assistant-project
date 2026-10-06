 /* ==========================================
   File : backend/middleware/authMiddleware.js
   Smart Krishi JWT Authentication Middleware
========================================== */


const jwt = require("jsonwebtoken");

const User = require("../models/User");







const protect = async(req,res,next)=>{


    try{


        let token;





        // Check Authorization Header


        if(

            req.headers.authorization &&

            req.headers.authorization.startsWith("Bearer")

        ){


            token =

            req.headers.authorization.split(" ")[1];


        }







        if(!token){


            return res.status(401).json({

                success:false,

                message:
                "Access denied. Token missing"

            });


        }







        // Verify Token


        const decoded =

        jwt.verify(

            token,

            process.env.JWT_SECRET

        );







        // Find User


        req.user = await User.findById(

            decoded.id

        )

        .select("-password");







        if(!req.user){


            return res.status(404).json({

                success:false,

                message:
                "User not found"

            });


        }







        next();



    }


    catch(error){


        res.status(401).json({

            success:false,

            message:
            "Invalid token"

        });


    }


};







module.exports = protect;