
/* ==========================================
   File : backend/models/Crop.js
   Smart Krishi Crop Model
========================================== */


const mongoose = require("mongoose");




const cropSchema = new mongoose.Schema(

{

    name: {

        type: String,

        required: true

    },


    season: {

        type: String,

        required: true

    },


    soil: {

        type: String,

        required: true

    },


    waterRequirement: {

        type: String,

        required: true

    },


    waterPerSqMeter: {

        type: Number,

        required: true

    },


    pesticidePerSqMeter: {

        type: Number,

        required: true

    },


    fertilizer: {

        type: String,

        required: true

    },


    createdAt: {

        type: Date,

        default: Date.now

    }


}

);





module.exports =
mongoose.model(
    "Crop",
    cropSchema
);