 /* ==========================================
   File : backend/controllers/userController.js
   Smart Krishi User Controller
========================================== */


const User = require("../models/User");

const jwt = require("jsonwebtoken");






// Generate JWT Token

const generateToken = (id) => {


    return jwt.sign(

        {
            id:id
        },

        process.env.JWT_SECRET,

        {
            expiresIn:"7d"
        }

    );


};







// ================================
// Farmer Registration
// ================================


const registerUser = async(req,res)=>{


    try{


        const {

            fullName,

            mobileNumber,

            email,

            password,

            village,

            district,

            state


        } = req.body;








        // Check Existing User


        const existingUser =
        await User.findOne({

            mobileNumber

        });





        if(existingUser){


            return res.status(400).json({

                success:false,

                message:
                "Mobile number already registered"

            });


        }








        // Create User


        const user =
        await User.create({

            fullName,

            mobileNumber,

            email,

            password,

            village,

            district,

            state

        });







        res.status(201).json({


            success:true,


            message:
            "Farmer registered successfully",


            user:{


                id:user._id,

                name:user.fullName

            }


        });






    }

    catch(error){



        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};









// ================================
// Farmer Login
// ================================


const loginUser = async(req,res)=>{


    try{


        const {

            mobileNumber,

            password


        } = req.body;







        const user =
        await User.findOne({

            mobileNumber

        });







        if(!user){


            return res.status(404).json({

                success:false,

                message:
                "Farmer not found"

            });


        }







        const isMatch =
        await user.comparePassword(
            password
        );







        if(!isMatch){


            return res.status(401).json({

                success:false,

                message:
                "Invalid password"

            });


        }







        const token =
        generateToken(
            user._id
        );








        res.json({

            success:true,

            message:
            "Login successful",


            token,


            user:{


                id:user._id,

                fullName:user.fullName,

                village:user.village,

                district:user.district

            }


        });






    }


    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }



};








module.exports = {


    registerUser,

    loginUser


};