 /* ==========================================
   File : backend/models/User.js
   Smart Krishi Farmer User Model
========================================== */


const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");





const userSchema = new mongoose.Schema(


{

    fullName: {

        type: String,

        required: true

    },


    mobileNumber: {

        type: String,

        required: true,

        unique: true

    },


    email: {

        type: String,

        default: ""

    },


    password: {

        type: String,

        required: true

    },


    village: {

        type: String,

        required: true

    },


    district: {

        type: String,

        required: true

    },


    state: {

        type: String,

        required: true

    },


    createdAt: {

        type: Date,

        default: Date.now

    }


}

);







// Password Hash Before Saving


userSchema.pre(
"save",
async function(next){



    if(!this.isModified("password")){

        next();

    }



    const salt =
    await bcrypt.genSalt(10);



    this.password =
    await bcrypt.hash(
        this.password,
        salt
    );



    next();


});







// Compare Password Function


userSchema.methods.comparePassword =

async function(password){


    return await bcrypt.compare(

        password,

        this.password

    );


};








module.exports =
mongoose.model(
    "User",
    userSchema
);