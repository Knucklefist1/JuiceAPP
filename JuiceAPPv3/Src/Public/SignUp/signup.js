document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Forhindrer standard form-indsendelse

    // Henter værdierne fra inputfelterne
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Simulerer oprettelse af en profil (kan udvides til at gemme data på serveren)
    console.log("Profile Created:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);

    // Viser en besked til brugeren
    document.getElementById("successMessage").style.display = "block";

    // Tømmer felterne efter indsendelse
    document.getElementById("signupForm").reset();
});