 /* ==========================================
   File : frontend/js/report.js
   Smart Krishi Report Module
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const reportButton = document.getElementById("generateReport");

    if (reportButton) {

        reportButton.addEventListener("click", generateReport);

    }

});


/* ==========================================
   Generate PDF Report
========================================== */

async function generateReport() {

    try {

        const farmingData = JSON.parse(
            localStorage.getItem("farmingData")
        );

        if (!farmingData) {

            alert("Please calculate the farm details first.");

            return;

        }

        // Farmer Information (Fallback if user not found)

        const user = JSON.parse(
            localStorage.getItem("user")
        ) || {

            fullName: "Farmer",

            village: "-",

            district: "-"

        };


        const { jsPDF } = window.jspdf;

        const doc = new jsPDF();


        // Title

        doc.setFontSize(18);

        doc.text("Smart Krishi Assistant", 20, 20);


        doc.setFontSize(14);

        doc.text("Farm Recommendation Report", 20, 35);


        // Farmer Details

        doc.setFontSize(12);

        doc.text("Farmer Details", 20, 50);

        doc.text(`Name : ${user.fullName}`, 20, 60);

        doc.text(`Village : ${user.village}`, 20, 70);

        doc.text(`District : ${user.district}`, 20, 80);


        // Farm Details

        doc.text("Farm Details", 20, 100);

        doc.text(`Crop : ${farmingData.crop}`, 20, 110);

        doc.text(`Area : ${Number(farmingData.area).toFixed(2)} sq.m`, 20, 120);

        doc.text(`Water : ${Number(farmingData.water).toFixed(2)} Liters`, 20, 130);

        doc.text(`Pesticide : ${Number(farmingData.pesticide).toFixed(2)} Liters`, 20, 140);

        doc.text(`Fertilizer : ${farmingData.fertilizer}`, 20, 150);

        doc.text(`Date : ${farmingData.date}`, 20, 160);


        // Save PDF

        doc.save("Smart_Krishi_Report.pdf");


        // Optional: Save report to backend

        if (typeof saveReport === "function") {

            await saveReport(farmingData);

        }

        alert("Report generated successfully.");

    } catch (error) {

        console.error("Report Error:", error);

        alert("Unable to generate report.");

    }

}