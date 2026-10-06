 /* ==========================================
   File : frontend/js/calculator.js
   Smart Krishi Calculator
========================================== */

// Crop Database

const cropData = {

    Rice: {

        water: 5,
        pesticide: 0.002,
        fertilizer: "Nitrogen Rich Fertilizer + Urea"

    },

    Wheat: {

        water: 4,
        pesticide: 0.0015,
        fertilizer: "DAP + Potash"

    },

    Soybean: {

        water: 3,
        pesticide: 0.001,
        fertilizer: "Organic Compost + Phosphorus"

    },

    Cotton: {

        water: 6,
        pesticide: 0.0025,
        fertilizer: "Nitrogen + Potassium"

    },

    Maize: {

        water: 4,
        pesticide: 0.0015,
        fertilizer: "Urea + Organic Manure"

    },

    Sugarcane: {

        water: 8,
        pesticide: 0.003,
        fertilizer: "Nitrogen Fertilizer"

    },

    Gram: {

        water: 2,
        pesticide: 0.001,
        fertilizer: "Phosphorus Fertilizer"

    }

};



// Return Crop Information

function getCropData(cropName) {

    return cropData[cropName];

}



// Main Calculation Function

function calculateFarm(cropName) {

    const crop = getCropData(cropName);

    if (!crop) {

        alert("Invalid Crop Selected");

        return null;

    }

    const area = getFarmArea();

    const water = area * crop.water;

    const pesticide = area * crop.pesticide;

    return {

        area: area,

        crop: cropName,

        water: water,

        pesticide: pesticide,

        fertilizer: crop.fertilizer

    };

}



// Display Result

function displayResult(result) {

    document.getElementById("area").textContent =
        result.area.toFixed(2);

    document.getElementById("water").textContent =
        result.water.toFixed(2);

    document.getElementById("pesticide").textContent =
        result.pesticide.toFixed(2);

    document.getElementById("fertilizer").textContent =
        result.fertilizer;



    localStorage.setItem(

        "farmingData",

        JSON.stringify({

            area: result.area,

            crop: result.crop,

            water: result.water,

            pesticide: result.pesticide,

            fertilizer: result.fertilizer,

            date: new Date().toLocaleDateString()

        })

    );

}