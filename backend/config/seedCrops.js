 /* ==========================================
   File : backend/config/seedCrops.js
   Smart Krishi Crop Database Seeder
========================================== */


const mongoose = require("mongoose");

const dotenv = require("dotenv");

const Crop = require("../models/Crop");



// Load Environment Variables

dotenv.config();





// Crop Data


const crops = [

    {
        name:"Rice",
        season:"Kharif",
        soil:"Clay Soil",
        waterRequirement:"High",
        waterPerSqMeter:5,
        pesticidePerSqMeter:0.002,
        fertilizer:"Nitrogen rich fertilizer + Urea"
    },


    {
        name:"Wheat",
        season:"Rabi",
        soil:"Loamy Soil",
        waterRequirement:"Medium",
        waterPerSqMeter:4,
        pesticidePerSqMeter:0.0015,
        fertilizer:"DAP + Potash fertilizer"
    },


    {
        name:"Soybean",
        season:"Kharif",
        soil:"Black Soil",
        waterRequirement:"Medium",
        waterPerSqMeter:3,
        pesticidePerSqMeter:0.001,
        fertilizer:"Organic compost + Phosphorus"
    },


    {
        name:"Cotton",
        season:"Kharif",
        soil:"Black Soil",
        waterRequirement:"High",
        waterPerSqMeter:6,
        pesticidePerSqMeter:0.0025,
        fertilizer:"Nitrogen + Potassium fertilizer"
    },


    {
        name:"Maize",
        season:"Kharif",
        soil:"Loamy Soil",
        waterRequirement:"Medium",
        waterPerSqMeter:4,
        pesticidePerSqMeter:0.0015,
        fertilizer:"Urea + Organic manure"
    },


    {
        name:"Sugarcane",
        season:"Annual",
        soil:"Loamy Soil",
        waterRequirement:"Very High",
        waterPerSqMeter:8,
        pesticidePerSqMeter:0.003,
        fertilizer:"Nitrogen fertilizer"
    },


    {
        name:"Gram",
        season:"Rabi",
        soil:"Sandy Loam",
        waterRequirement:"Low",
        waterPerSqMeter:2,
        pesticidePerSqMeter:0.001,
        fertilizer:"Phosphorus based fertilizer"
    }

];








// Insert Data Function


const seedDatabase = async()=>{


    try{


        await mongoose.connect(

            process.env.MONGO_URI

        );



        await Crop.deleteMany();



        await Crop.insertMany(crops);



        console.log(
            "🌱 Crop Data Inserted Successfully"
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





seedDatabase();