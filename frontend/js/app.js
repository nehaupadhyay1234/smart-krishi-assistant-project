 /* ==========================================
   File : frontend/js/app.js
   Smart Krishi Main Application
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Smart Krishi Assistant Started");

    // Buttons
    const calculateBtn = document.getElementById("calculateBtn");
    const resetBtn = document.getElementById("resetBtn");
    const cropSelect = document.getElementById("crop");

    /* ==========================================
       Calculate Button
    ========================================== */

    if (calculateBtn) {

        calculateBtn.addEventListener("click", () => {

            // Validation
            if (!Validation.validateCalculation()) {
                return;
            }

            const cropName = cropSelect.value;

            const result = calculateFarm(cropName);

            if (!result) {

                alert("Calculation failed.");

                return;

            }

            displayResult(result);

            console.log("Calculation Result:", result);

            alert("Calculation completed successfully.");

        });

    }

    /* ==========================================
       Reset Button
    ========================================== */

    if (resetBtn) {

        resetBtn.addEventListener("click", resetApplication);

    }

    /* ==========================================
       Crop Change
    ========================================== */

    if (cropSelect) {

        cropSelect.addEventListener("change", () => {

            const crop = getCropData(cropSelect.value);

            if (crop) {

                console.log("Crop Selected");

                console.log(crop);

            }

        });

    }

    /* ==========================================
       Load Weather
    ========================================== */

    if (typeof loadWeather === "function") {

        loadWeather();

    }

});


/* ==========================================
   Reset Application
========================================== */

function resetApplication() {

    // Reset Map Area
    if (typeof setFarmArea === "function") {

        setFarmArea(0);

    }

    // Remove Drawn Polygon
    if (typeof drawnItems !== "undefined" && drawnItems) {

        drawnItems.clearLayers();

    }

    // Reset Crop
    const crop = document.getElementById("crop");

    if (crop) {

        crop.selectedIndex = 0;

    }

    // Reset Results
    document.getElementById("area").textContent = "0";
    document.getElementById("water").textContent = "0";
    document.getElementById("pesticide").textContent = "0";
    document.getElementById("fertilizer").textContent = "-";

    // Clear Local Storage
    localStorage.removeItem("farmingData");

    alert("Application reset successfully.");

}


/* ==========================================
   Show Crop Information
========================================== */

function showCropInformation(cropName) {

    const crop = getCropData(cropName);

    if (!crop) return;

    console.log("Crop Information");

    console.log("Name :", crop.name || cropName);
    console.log("Season :", crop.season || "-");
    console.log("Duration :", crop.duration || "-");
    console.log("Fertilizer :", crop.fertilizer);

}