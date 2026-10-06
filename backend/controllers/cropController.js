 /* ==========================================
   File : backend/controllers/cropController.js
   Smart Krishi Crop Controller
========================================== */


const Crop = require("../models/Crop");






// ================================
// Get All Crops
// ================================


const getCrops = async(req,res)=>{


    try{


        const crops =
        await Crop.find();




        res.json({

            success:true,

            data:crops

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
// Add New Crop
// ================================


const addCrop = async(req,res)=>{


    try{


        const crop =
        await Crop.create(

            req.body

        );




        res.status(201).json({


            success:true,


            message:
            "Crop added successfully",


            data:crop


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


    getCrops,

    addCrop


};