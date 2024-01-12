// Importar la API Fetch (si es necesario)
// import fetch from "fetch"; // Descomenta esta línea si tu entorno lo requiere

// Obtener el formulario y los mensajes
const formulario = document.getElementById("formulario");
const successMessage = document.querySelector(".alert.success");
const errorMessage = document.querySelector(".alert.error");

// Agregar un evento de envío al formulario
formulario.addEventListener("submit", function (event) {
  // Evitar que el formulario se envíe de forma predeterminada
  event.preventDefault();

  // Obtener datos del formulario
  const formData = new FormData(this);

  // Enviar datos al servidor
  fetch("https://localhost:8080/Javascript/formulario.js", { // Ajusta la URL a tu servidor
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Manejar la respuesta del servidor
    console.log(data);

    // Mostrar mensaje de éxito
    successMessage.classList.remove("hidden");
    errorMessage.classList.add("hidden");

    // Limpiar el formulario
    formulario.reset();
  })
  .catch(error => {
    // Manejar errores, si los hay
    console.error("Error:", error);

    // Mostrar mensaje de error
    errorMessage.classList.remove("hidden");
    successMessage.classList.add("hidden");
  });
});
