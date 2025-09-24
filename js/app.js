document.addEventListener('DOMContentLoaded', () => {
    const carruselPista = document.querySelector('.carrusel-pista');
    const diapositivas = document.querySelectorAll('.diapositiva-grande');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Ahora seleccionamos todos los contenedores de texto dentro de cada diapositiva.
    const textosCarrusel = document.querySelectorAll('.diapositiva-grande > div');

    let indiceDiapositiva = 0;
    const totalDiapositivas = diapositivas.length;

    function actualizarCarrusel() {
        // Desplaza el carrusel a la diapositiva actual.
        const desplazamiento = -indiceDiapositiva * 100;
        carruselPista.style.transform = `translateX(${desplazamiento}vw)`;

        // Oculta todos los textos del carrusel.
        textosCarrusel.forEach(texto => {
            texto.classList.remove('active-text-carousel');
        });

        // Muestra solo el texto de la diapositiva actual si existe.
        if (textosCarrusel[indiceDiapositiva]) {
            textosCarrusel[indiceDiapositiva].classList.add('active-text-carousel');
        }
    }

    nextBtn.addEventListener('click', () => {
        indiceDiapositiva = (indiceDiapositiva + 1) % totalDiapositivas;
        actualizarCarrusel();
    });

    prevBtn.addEventListener('click', () => {
        indiceDiapositiva = (indiceDiapositiva - 1 + totalDiapositivas) % totalDiapositivas;
        actualizarCarrusel();
    });

    // Asegúrate de que el carrusel y el texto estén correctamente posicionados al cargar la página.
    actualizarCarrusel();

    window.irAPagina = function() {
        window.location.href = 'contacto.html';
    };
});