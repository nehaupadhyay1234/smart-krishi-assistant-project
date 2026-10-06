 /* ==========================================
   File : backend/config/seedAdmin.js
   Smart Krishi Test Farmer Seeder
========================================== */


const mongoose = require("mongoose");

const dotenv = require("dotenv");

const bcrypt = require("bcryptjs");

const User = require("../models/User");




// Load Environment Variables

dotenv.config();






const createFarmer = async()=>{


    try{


        await mongoose.connect(

            process.env.MONGO_URI

        );







        // Check Existing Farmer


        const existingUser =

        await User.findOne({

            mobileNumber:"9876543210"

        });






        if(existingUser){


            console.log(
                "Farmer already exists"
            );


            process.exit();


        }







        // Password Hash


        const salt =

        await bcrypt.genSalt(10);



        const password =

        await bcrypt.hash(

            "123456",

            salt

        );








        // Create Farmer


        await User.create({


            fullName:
            "Demo Farmer",


            mobileNumber:
            "9876543210",


            email:
            "demo@smartkrishi.com",


            password,


            village:
            "Bastar Village",


            district:
            "Bastar",


            state:
            "Chhattisgarh"


        });








        console.log(
            "👨‍🌾 Demo Farmer Created Successfully"
        );

        console.log(
            "Mobile: 9876543210"
        );

        console.log(
            "Password: 123456"
        );




        process.exit();



    }


    catch(error){


        console.log(
            error.message
        );


        process.exit(1);


    }



};






createFarmer();