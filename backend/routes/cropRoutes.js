 /* ==========================================
   File : backend/routes/cropRoutes.js
   Smart Krishi Crop Routes
========================================== */


const express = require("express");

const router = express.Router();



// Controller Import

const {

    getCrops,

    addCrop


} = require("../controllers/cropController");







// Get All Crops

router.get(

    "/",

    getCrops

);







// Add New Crop

router.post(

    "/",

    addCrop

);







module.exports = router;