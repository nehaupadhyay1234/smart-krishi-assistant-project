 /* ==========================================
   File : backend/routes/reportRoutes.js
   Smart Krishi Report Routes
========================================== */


const express = require("express");

const router = express.Router();



// Controller Import

const {

    createReport,

    getReports


} = require("../controllers/reportController");





// Middleware

const protect =
require("../middleware/authMiddleware");







// Create Farming Report

router.post(

    "/",

    protect,

    createReport

);








// Get Farmer Reports

router.get(

    "/",

    protect,

    getReports

);







module.exports = router;