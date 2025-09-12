// Variables para controlar el carrusel
const pista = document.querySelector('.carrusel-pista');
const diapositivas = Array.from(pista.children);
const siguienteBtn = document.querySelector('.next-btn');
const anteriorBtn = document.querySelector('.prev-btn');
const carruselContainer = document.querySelector('.carrusel-imagen-principal');

const tamañoDiapositiva = diapositivas[0].getBoundingClientRect().width;
let indiceDiapositiva = 0;

// Variables para el movimiento automático
let autoplayInterval;
const autoplayDelay = 3000;

siguienteBtn.addEventListener('click', () => {
    indiceDiapositiva++;

    if (indiceDiapositiva >= diapositivas.length) {
        indiceDiapositiva = 0;
    }

    const nuevaPosicion = -tamañoDiapositiva * indiceDiapositiva;
    pista.style.transform = `translateX(${nuevaPosicion}px)`;
});

anteriorBtn.addEventListener('click', () => {
    indiceDiapositiva--;

    if (indiceDiapositiva < 0) {
        indiceDiapositiva = diapositivas.length - 1;
    }

    const nuevaPosicion = -tamañoDiapositiva * indiceDiapositiva;
    pista.style.transform = `translateX(${nuevaPosicion}px)`;
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

startAutoplay();