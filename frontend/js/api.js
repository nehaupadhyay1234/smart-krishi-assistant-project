 /* ==========================================
   File : frontend/js/api.js
   Smart Krishi API Service
========================================== */

const API_BASE_URL = "http://localhost:5001/api";

/* ==========================================
   Generic API Request
========================================== */

async function apiRequest(endpoint, method = "GET", data = null) {

    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {

        const response = await fetch(API_BASE_URL + endpoint, options);

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "API Error");
        }

        return result;

    } catch (error) {

        console.error("API Error:", error.message);

        return {
            success: false,
            message: error.message
        };

    }

}

/* ==========================================
   Weather API
========================================== */

async function getWeather(city) {

    return await apiRequest("/weather/" + city);

}

/* ==========================================
   Crop API
========================================== */

async function getCropList() {

    return await apiRequest("/crops");

}

/* ==========================================
   Report API
========================================== */

async function saveReport(reportData) {

    return await apiRequest("/reports", "POST", reportData);

}

/* ==========================================
   Farmer API
========================================== */

async function getFarmerProfile() {

    return await apiRequest("/farmers/profile");

}