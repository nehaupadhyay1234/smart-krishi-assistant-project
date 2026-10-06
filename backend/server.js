 /* ==========================================
   File : backend/server.js
   Smart Krishi Backend Server
========================================== */


const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");



// Database Connection

const connectDB = require("./config/db");





// Load Environment Variables

dotenv.config();





// Create Express App

const app = express();





// Connect MongoDB

connectDB();





// Middleware


app.use(
    cors()
);


app.use(
    express.json()
);






// Routes


const userRoutes =
require("./routes/userRoutes");


const cropRoutes =
require("./routes/cropRoutes");


const weatherRoutes =
require("./routes/weatherRoutes");


const reportRoutes =
require("./routes/reportRoutes");







// API Routes


app.use(
    "/api/users",
    userRoutes
);


app.use(
    "/api/crops",
    cropRoutes
);


app.use(
    "/api/weather",
    weatherRoutes
);


app.use(
    "/api/reports",
    reportRoutes
);






// Test API


app.get(
    "/",
    (req,res)=>{


        res.send(
            "🌾 Smart Krishi Backend Running Successfully"
        );


    }
);








// Server Port


const PORT =
process.env.PORT || 5000;





app.listen(

    PORT,

    ()=>{


        console.log(
            `Server running on port ${PORT}`
        );


    }

);