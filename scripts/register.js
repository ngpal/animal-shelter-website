document.getElementById("Register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordCheck = document.getElementById("passwordCheck").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const name = document.getElementById("name").value;

    console.log('password === passwordCheck:', password === passwordCheck);
    console.log('email format valid:', email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/));
    console.log('phone format valid:', phone.match(/^\d{10}$/));
    

    if ( password === passwordCheck && email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && phone.match(/^\d{10}$/) ){
        alert("Registered successful!");
        console.log("Redirecting to login.html");
        window.location.href = "login.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});