function borrar() {
    let name = document.getElementById('name');
    let mail = document.getElementById('mail');
    let messag = document.getElementById('message');

    console.log('Nombre: ', name.value);
    console.log('Correo: ', mail.value);
    console.log('Mensaje: ', message.value);


    setTimeout(() => {
        name.value = '';
        mail.value = '';
        message.value = '';
    }, 1000);

}

function cambiarColor() {

    const rutaActual = window.location.pathname;

    const enlaces = document.querySelectorAll('nav a');

    enlaces.forEach(enlace => {

    if (enlace.href.includes(rutaActual)) {
        enlace.classList.add('active');
    }
    });
}

cambiarColor()