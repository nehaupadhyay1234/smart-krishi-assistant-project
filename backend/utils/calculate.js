 ```javascript
/* ==========================================
   File : backend/utils/calculate.js
   Smart Krishi Assistant
   Calculation Utility
========================================== */

/* ==========================================
   Square Meter → Acre
========================================== */

const squareMeterToAcre = (area) => {

    return Number((area / 4046.86).toFixed(2));

};

/* ==========================================
   Square Meter → Hectare
========================================== */

const squareMeterToHectare = (area) => {

    return Number((area / 10000).toFixed(2));

};

/* ==========================================
   Water Requirement
========================================== */

const calculateWater = (area, waterPerSqMeter) => {

    return Number((area * waterPerSqMeter).toFixed(2));

};

/* ==========================================
   Pesticide Requirement
========================================== */

const calculatePesticide = (area, pesticidePerSqMeter) => {

    return Number((area * pesticidePerSqMeter).toFixed(2));

};

/* ==========================================
   Fertilizer Recommendation
========================================== */

const getFertilizerRecommendation = (crop) => {

    return crop.fertilizer;

};

/* ==========================================
   Estimated Yield
========================================== */

const estimateYield = (area, yieldPerHectare) => {

    const hectare = area / 10000;

    return Number((hectare * yieldPerHectare).toFixed(2));

};

/* ==========================================
   Irrigation Recommendation
========================================== */

const irrigationRecommendation = (temperature) => {

    if (temperature >= 35) {

        return "High temperature. Increase irrigation frequency.";

    }

    if (temperature <= 15) {

        return "Low temperature. Reduce irrigation.";

    }

    return "Normal irrigation schedule is recommended.";

};

/* ==========================================
   Complete Farm Calculation
========================================== */

const calculateFarmData = (area, crop) => {

    return {

        area,

        acre: squareMeterToAcre(area),

        hectare: squareMeterToHectare(area),

        waterRequired: calculateWater(
            area,
            crop.waterPerSqMeter
        ),

        pesticideRequired: calculatePesticide(
            area,
            crop.pesticidePerSqMeter
        ),

        fertilizer: getFertilizerRecommendation(crop),

        season: crop.season,

        duration: crop.duration

    };

};

module.exports = {

    squareMeterToAcre,

    squareMeterToHectare,

    calculateWater,

    calculatePesticide,

    getFertilizerRecommendation,

    estimateYield,

    irrigationRecommendation,

    calculateFarmData

};
```
