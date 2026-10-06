 /* ==========================================
   File : frontend/js/validation.js
   Smart Krishi Validation Module
========================================== */

/* ==========================================
   Validate Crop Selection
========================================== */

function validateCrop() {

    const crop = document.getElementById("crop");

    if (!crop) {

        console.error("Crop dropdown not found.");

        return false;

    }

    if (crop.value.trim() === "") {

        alert("Please select a crop.");

        crop.focus();

        return false;

    }

    return true;

}


/* ==========================================
   Validate Farm Area
========================================== */

function validateArea() {

    const area = getFarmArea();

    if (!area || area <= 0) {

        alert("Please draw your farm on the map.");

        return false;

    }

    return true;

}


/* ==========================================
   Validate Before Calculation
========================================== */

function validateCalculation() {

    return validateCrop() && validateArea();

}


/* ==========================================
   Validate Farmer Information
========================================== */

function validateFarmer() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {

        console.warn("Farmer profile not found.");

        return false;

    }

    return true;

}


/* ==========================================
   Validate Report Generation
========================================== */

function validateReport() {

    const report = JSON.parse(localStorage.getItem("farmingData"));

    if (!report) {

        alert("Please calculate the farming recommendation first.");

        return false;

    }

    return true;

}


/* ==========================================
   Global Validation Object
========================================== */

const Validation = {

    validateCrop,

    validateArea,

    validateCalculation,

    validateFarmer,

    validateReport

};

console.log("Validation Module Loaded Successfully.");