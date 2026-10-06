 /* ==========================================
   File : frontend/js/weather.js
   Smart Krishi Weather Module
========================================== */

let currentWeather = null;

/* ==========================================
   Get Weather by City
========================================== */

async function loadWeather(city = "Bhopal") {

    try {

        const response = await getWeather(city);

        if (!response.success) {

            console.warn("Weather API unavailable");

            return;

        }

        currentWeather = response.data;

        displayWeather(currentWeather);

    } catch (error) {

        console.error("Weather Error:", error);

    }

}

/* ==========================================
   Display Weather
========================================== */

function displayWeather(weather) {

    if (!weather) return;

    console.log("Weather Loaded");

    console.log("Temperature :", weather.temperature);

    console.log("Humidity :", weather.humidity);

    console.log("Condition :", weather.condition);

}

/* ==========================================
   Weather Advice
========================================== */

function getWeatherAdvice() {

    if (!currentWeather) {

        return "Weather information unavailable.";

    }

    if (currentWeather.temperature > 35) {

        return "High temperature. Irrigate crops in the early morning or evening.";

    }

    if (currentWeather.condition === "Rain") {

        return "Rain expected. Avoid pesticide spraying.";

    }

    return "Weather conditions are suitable for farming activities.";

}

/* ==========================================
   Initialize
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadWeather();

});