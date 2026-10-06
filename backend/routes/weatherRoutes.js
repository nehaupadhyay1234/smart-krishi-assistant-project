 /* ==========================================
   File : backend/routes/weatherRoutes.js
   Smart Krishi Weather Routes
========================================== */


const express = require("express");

const router = express.Router();



// Controller Import

const {

    getWeather


} = require("../controllers/weatherController");







// Get Weather Data

router.get(

    "/",

    getWeather

);







module.exports = router;