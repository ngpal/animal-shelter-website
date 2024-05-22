document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate username and password (you can add your own logic here)
    if (username === "admin" && password === "secret") {
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
