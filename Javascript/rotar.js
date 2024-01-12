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
