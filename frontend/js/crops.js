 /* ==========================================
   File : frontend/js/crops.js
   Smart Krishi Crop Manager
========================================== */

// Default Crop Data (Fallback)

const defaultCrops = [

    {
        name: "Rice",
        season: "Kharif",
        duration: "120-150 Days",
        fertilizer: "Nitrogen Rich Fertilizer + Urea"
    },

    {
        name: "Wheat",
        season: "Rabi",
        duration: "110-140 Days",
        fertilizer: "DAP + Potash"
    },

    {
        name: "Soybean",
        season: "Kharif",
        duration: "90-120 Days",
        fertilizer: "Organic Compost + Phosphorus"
    },

    {
        name: "Cotton",
        season: "Kharif",
        duration: "160-180 Days",
        fertilizer: "Nitrogen + Potassium"
    },

    {
        name: "Maize",
        season: "Kharif",
        duration: "90-110 Days",
        fertilizer: "Urea + Organic Manure"
    },

    {
        name: "Sugarcane",
        season: "Annual",
        duration: "10-14 Months",
        fertilizer: "Nitrogen Fertilizer"
    },

    {
        name: "Gram",
        season: "Rabi",
        duration: "100-120 Days",
        fertilizer: "Phosphorus Fertilizer"
    }

];

let crops = [...defaultCrops];



// Get Crop By Name

function getCropData(cropName) {

    return crops.find(crop => crop.name === cropName);

}



// Get All Crops

function getAllCrops() {

    return crops;

}



// Populate Dropdown

function populateCropDropdown() {

    const cropSelect = document.getElementById("crop");

    if (!cropSelect) return;

    cropSelect.innerHTML = '<option value="">Choose Crop</option>';

    crops.forEach(crop => {

        const option = document.createElement("option");

        option.value = crop.name;

        option.textContent = crop.name;

        cropSelect.appendChild(option);

    });

}



// Load Crops From Backend

async function loadCrops() {

    try {

        const response = await fetch("http://localhost:5001/api/crops");

        if (!response.ok) {

            throw new Error("Unable to fetch crops");

        }

        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {

            crops = result.data;

        }

    } catch (error) {

        console.warn("Using default crop data:", error.message);

        crops = [...defaultCrops];

    }

    populateCropDropdown();

}



// Initialize

document.addEventListener("DOMContentLoaded", () => {

    loadCrops();

});