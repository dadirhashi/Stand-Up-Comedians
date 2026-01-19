document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("subjectError").textContent = "";

    let isValid = true;

    if (!name) {
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;
    }

    if (!email) {
        document.getElementById("emailError").textContent = "Please enter your email.";
        isValid = false;
    }

    if (!subject) {
        document.getElementById("subjectError").textContent = "Please enter a message.";
        isValid = false;
    }

    if (!isValid) return;

    this.style.display = "none";
    document.querySelector(".message").style.display = "none";
    document.getElementById("confirmationBox").style.display = "flex";

});



