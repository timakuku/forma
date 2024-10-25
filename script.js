document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        confirmationMessage.style.display = "block";
        confirmationMessage.textContent = `Спасибо, ${name}! Ваше сообщение отправлено.`;

        form.reset();
    });
});
