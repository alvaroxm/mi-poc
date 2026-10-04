const form = document.getElementById("form");
const status = document.getElementById("status");

// Solo front: en una versión real aquí iría un fetch a una API o a un servicio de formularios.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "¡Gracias! Mensaje recibido (demo).";
  form.reset();
});
