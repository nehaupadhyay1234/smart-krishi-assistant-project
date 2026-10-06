 /* ==========================================
   File : backend/routes/userRoutes.js
   Smart Krishi User Routes
========================================== */


const express = require("express");

const router = express.Router();



// Controllers

const {

    registerUser,

    loginUser


} = require("../controllers/userController");








// Register Farmer API

router.post(

    "/register",

    registerUser

);







// Login Farmer API

router.post(

    "/login",

    loginUser

);







module.exports = router;