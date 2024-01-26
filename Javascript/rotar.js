// Función para rotar la imagen y mostrar el overlay al pasar el ratón sobre el servicio
function rotateImage(element) {
    element.querySelector('.servicio img').classList.add('rotate');
    element.querySelector('.overlay').style.opacity = 1; /* Muestra el overlay */
}

// Función para restablecer la imagen y ocultar el overlay al quitar el ratón del servicio
function resetImage(element) {
    element.querySelector('.servicio img').classList.remove('rotate');
    element.querySelector('.overlay').style.opacity = 0; /* Oculta el overlay */
}



document.addEventListener("DOMContentLoaded", function () {
    // Obtener el título y el botón
    const title = document.getElementById("animatedTitle");
    const button = document.querySelector(".bn39");

    // Mostrar el título con animación
    title.style.opacity = 1;

    // Agregar clase de animación al botón
    button.classList.add("buttonAnimation");
});

