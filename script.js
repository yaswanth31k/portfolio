// EMAILJS INIT
(function () {
    emailjs.init("OeLS-ZzZV452l5sXn"); // 🔴 replace
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.innerText = "Sending...";

    // 1️⃣ SEND MESSAGE TO YOU
    emailjs.sendForm(
        "service_x9y684b",       // 🔴 replace
        "template_i89fa3d",      // 🔴 main contact template
        this
    ).then(() => {

        // 2️⃣ SEND AUTO-REPLY TO USER
        emailjs.sendForm(
            "service_x9y684b",   // 🔴 replace
            "template_8xtfuxp",// 🔴 auto reply template
            this
        );

        status.innerText = "Message sent successfully ✅";
        status.style.color = "green";
        form.reset();

    }).catch(() => {
        status.innerText = "Failed to send message ❌";
        status.style.color = "red";
    });
});
