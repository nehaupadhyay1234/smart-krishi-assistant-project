 /* ==========================================
   File : backend/middleware/errorMiddleware.js
   Smart Krishi Error Handling Middleware
========================================== */


const errorMiddleware = (err, req, res, next) => {


    // Default Status Code

    const statusCode =

        res.statusCode === 200

        ? 500

        : res.statusCode;




    res.status(statusCode).json({

        success: false,


        message:

            err.message || "Server Error",



        // Show error only in development

        stack:

            process.env.NODE_ENV === "production"

            ? null

            : err.stack

    });


};






module.exports = errorMiddleware;