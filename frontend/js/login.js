

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const mobileNumber = document
        .getElementById("mobileNumber")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value;

    try {

        const response = await fetch(
            "http://localhost:5000/api/users/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    mobileNumber,
                    password
                })
            }
        );

        const data = await response.json();

        if (data.success) {

            // Save Token
            localStorage.setItem("token", data.token);

            // Save User Data
            localStorage.setItem(
                "user",
                JSON.stringify(data.data)
            );

            message.style.color = "green";
            message.textContent = "Login Successful...";

            setTimeout(() => {

                window.location.href = "dashboard.html";

            }, 1000);

        } else {

            message.style.color = "red";
            message.textContent = data.message;

        }

    } catch (error) {

        message.style.color = "red";

        message.textContent =
            "Server Error. Please try again.";

    }

});

