const boton = document.getElementById('mostrarcontenido')
const seccion = document.getElementById('ocultarcontenido')

boton.addEventListener('click', function(event) {
    event.preventDefault()
    seccion.classList.add('mostrar')
    seccion.scrollIntoView({ behavior:"smooth", block:"start" , inline:"nearest"})

    boton.style.display = 'none'

})
