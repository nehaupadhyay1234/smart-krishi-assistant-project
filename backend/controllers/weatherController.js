 /* ==========================================
   File : backend/controllers/weatherController.js
   Smart Krishi Weather Controller
========================================== */


const axios = require("axios");






// ================================
// Get Weather Data
// ================================


const getWeather = async(req,res)=>{


    try{


        const {

            lat,

            lng


        } = req.query;





        if(!lat || !lng){


            return res.status(400).json({

                success:false,

                message:
                "Latitude and longitude required"

            });


        }








        // Weather API Call

        const response =
        await axios.get(


        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API_KEY}&units=metric`


        );







        const weather =
        response.data;







        let irrigationAdvice;





        if(weather.main.temp > 35){


            irrigationAdvice =
            "High temperature. Increase irrigation.";

        }


        else if(weather.main.humidity < 40){


            irrigationAdvice =
            "Low humidity. Provide additional water.";

        }


        else{


            irrigationAdvice =
            "Normal irrigation schedule.";

        }








        res.json({


            success:true,


            data:{


                city:
                weather.name,


                temperature:
                weather.main.temp,


                humidity:
                weather.main.humidity,


                windSpeed:
                weather.wind.speed,


                description:
                weather.weather[0].description,


                irrigationAdvice


            }



        });







    }


    catch(error){



        res.status(500).json({

            success:false,

            message:
            "Unable to fetch weather data"

        });



    }



};







module.exports = {


    getWeather


};