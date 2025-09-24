function normalizarRuta(ruta) {
    // Quita 'index.html' y el slash final
    return ruta.replace(/index\.html$/, '').replace(/\/$/, '');
}

function cambiarColor() {
    const rutaActual = normalizarRuta(window.location.pathname);
    const enlaces = document.querySelectorAll('nav a');
    enlaces.forEach(enlace => {
        enlace.classList.remove('active');
        const rutaEnlace = normalizarRuta(enlace.pathname);
        if (rutaEnlace === rutaActual) {
            enlace.classList.add('active');
        }
    });
}

cambiarColor()