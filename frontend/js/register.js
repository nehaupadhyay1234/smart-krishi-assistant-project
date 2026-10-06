 


const registerForm = document.getElementById("registerForm");

const message = document.getElementById("message");


registerForm.addEventListener("submit", async (e) => {


    e.preventDefault();


    const userData = {


        fullName: document
            .getElementById("fullName")
            .value
            .trim(),


        mobileNumber: document
            .getElementById("mobileNumber")
            .value
            .trim(),


        email: document
            .getElementById("email")
            .value
            .trim(),


        password: document
            .getElementById("password")
            .value,


        village: document
            .getElementById("village")
            .value
            .trim(),


        district: document
            .getElementById("district")
            .value
            .trim(),


        state: document
            .getElementById("state")
            .value
            .trim()

    };



    try {


        const response = await fetch(

            "http://localhost:5000/api/users/register",

            {

                method: "POST",


                headers: {

                    "Content-Type": "application/json"

                },


                body: JSON.stringify(userData)

            }

        );



        const data = await response.json();



        if(data.success){


            message.style.color = "green";


            message.textContent =
                "Registration Successful! Redirecting to Login...";



            setTimeout(() => {


                window.location.href = "login.html";


            },1500);



        }

        else{


            message.style.color = "red";


            message.textContent = data.message;


        }



    }

    catch(error){


        message.style.color = "red";


        message.textContent =
            "Server Error. Please try again later.";


    }


});

