function rotateImage(element) {
    element.querySelector('.servicio img').classList.add('rotate');
    element.querySelector('.overlay').style.opacity = 1; /* Muestra el overlay */
}

function resetImage(element) {
    element.querySelector('.servicio img').classList.remove('rotate');
    element.querySelector('.overlay').style.opacity = 0; /* Oculta el overlay */
}