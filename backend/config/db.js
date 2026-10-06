 /* ==========================================
   File : backend/config/db.js
   MongoDB Database Connection
========================================== */


const mongoose = require("mongoose");





// Connect Database Function

const connectDB = async () => {


    try {


        const conn = await mongoose.connect(

            process.env.MONGODB_URI

        );



        console.log(
            `MongoDB Connected: ${conn.connection.host}`
        );


    }


    catch(error){


        console.log(
            "MongoDB Connection Error:",
            error.message
        );


        process.exit(1);


    }


};






module.exports = connectDB;