 /* ==========================================
   File : backend/models/Report.js
   Smart Krishi Farming Report Model
========================================== */


const mongoose = require("mongoose");





const reportSchema = new mongoose.Schema(

{


    farmerId: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

    },



    fieldArea: {

        type: Number,

        required: true

    },



    perimeter: {

        type: Number,

        required: true

    },



    crop: {

        type: String,

        required: true

    },



    waterRequired: {

        type: Number,

        required: true

    },



    pesticideRequired: {

        type: Number,

        required: true

    },



    fertilizer: {

        type: String,

        default: ""

    },



    weatherCondition: {

        type: String,

        default: ""

    },



    createdAt: {

        type: Date,

        default: Date.now

    }



}

);







module.exports =
mongoose.model(
    "Report",
    reportSchema
);