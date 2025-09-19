// Carrusel solo si existe en la página
const pista = document.querySelector('.carrusel-pista');
if (pista) {
    const diapositivas = Array.from(pista.children);
    const siguienteBtn = document.querySelector('.next-btn');
    const anteriorBtn = document.querySelector('.prev-btn');
    const carruselContainer = document.querySelector('.carrusel-imagen-principal');

    let indiceDiapositiva = 0;
    let tamañoDiapositiva;

    let autoplayInterval;
    const autoplayDelay = 4000;

    function actualizarCarrusel() {
        const nuevaPosicion = -tamañoDiapositiva * indiceDiapositiva;
        pista.style.transform = `translateX(${nuevaPosicion}px)`;
    }

    function recalcularTamañoDiapositiva() {
        tamañoDiapositiva = diapositivas[0].getBoundingClientRect().width;
        actualizarCarrusel();
    }

    siguienteBtn.addEventListener('click', () => {
        indiceDiapositiva++;
        if (indiceDiapositiva >= diapositivas.length) {
            indiceDiapositiva = 0;
        }
        actualizarCarrusel();
    });

    anteriorBtn.addEventListener('click', () => {
        indiceDiapositiva--;
        if (indiceDiapositiva < 0) {
            indiceDiapositiva = diapositivas.length - 1;
        }
        actualizarCarrusel();
    });

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            siguienteBtn.click();
        }, autoplayDelay);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    carruselContainer.addEventListener('mouseenter', stopAutoplay);
    carruselContainer.addEventListener('mouseleave', startAutoplay);

    window.addEventListener('resize', recalcularTamañoDiapositiva);

    recalcularTamañoDiapositiva();
    startAutoplay();
}

// ...el resto de tu código (irAPagina, normalizarRuta, cambiarColor) igual...

// Función para el botón "Contáctanos"
function irAPagina() {
    window.location.href = '/contacto/';
}

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