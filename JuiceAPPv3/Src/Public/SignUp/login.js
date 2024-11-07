document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Forhindrer standard form-indsendelse

    // Hent værdier fra inputfelterne
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simuler login-validering (her kan man forbinde til en database eller API)
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        // Naviger til en anden side eller dashboard
        window.location.href = "../juiceApp.html";
    } else {
        // Viser en fejlmeddelelse
        document.getElementById("errorMessage").style.display = "block";
    }
});