 /* ==========================================
   File : frontend/js/map.js
   Smart Krishi - Farm Map
========================================== */

let map;
let drawnItems;
let farmArea = 0;

// Initialize Map
document.addEventListener("DOMContentLoaded", () => {

    map = L.map("map").setView([23.2599, 77.4126], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({

        draw: {

            polyline: false,
            rectangle: true,
            circle: false,
            circlemarker: false,
            marker: false,
            polygon: true

        },

        edit: {

            featureGroup: drawnItems

        }

    });

    map.addControl(drawControl);

    // Draw Complete
    map.on(L.Draw.Event.CREATED, function (event) {

        drawnItems.clearLayers();

        const layer = event.layer;

        drawnItems.addLayer(layer);

        calculateArea(layer);

    });

});


// Calculate Area
function calculateArea(layer) {

    try {

        const geoJson = layer.toGeoJSON();

        farmArea = turf.area(geoJson);

        localStorage.setItem("fieldArea", farmArea);

        const areaElement = document.getElementById("area");

        if (areaElement) {

            areaElement.innerHTML = farmArea.toFixed(2);

        }

    } catch (error) {

        console.error("Area Calculation Error:", error);

    }

}


// Return Area
function getFarmArea() {

    return farmArea;

}


// Set Area
function setFarmArea(value) {

    farmArea = value;

    localStorage.setItem("fieldArea", value);

    const areaElement = document.getElementById("area");

    if (areaElement) {

        areaElement.innerHTML = value;

    }

}