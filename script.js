// script.js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btnSaludo");

  if (button) {
    button.addEventListener("click", () => {
      alert("¡Hola! Este es un mensaje desde JavaScript 🚀");
    });
  }
});
