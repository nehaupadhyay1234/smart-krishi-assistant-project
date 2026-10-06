 /* ==========================================
   File : backend/controllers/reportController.js
   Smart Krishi Report Controller
========================================== */


const Report = require("../models/Report");





// ================================
// Create Farming Report
// ================================


const createReport = async(req,res)=>{


    try{


        const {


            fieldArea,

            perimeter,

            crop,

            waterRequired,

            pesticideRequired,

            fertilizer,

            weatherCondition



        } = req.body;







        const report =
        await Report.create({


            farmerId:req.user.id,


            fieldArea,


            perimeter,


            crop,


            waterRequired,


            pesticideRequired,


            fertilizer,


            weatherCondition



        });







        res.status(201).json({


            success:true,


            message:
            "Farming report saved successfully",


            data:report



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
// Get Farmer Reports
// ================================


const getReports = async(req,res)=>{


    try{


        const reports =

        await Report.find({

            farmerId:req.user.id

        })

        .sort({

            createdAt:-1

        });







        res.json({


            success:true,


            data:reports



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


    createReport,

    getReports


};