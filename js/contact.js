const tipoDocumento = document.getElementById('tipo-documento')
const etiquetaDocumento = document.getElementById('etiqueta-documento')
const numeroDoc = document.getElementById('numero-doc')

tipoDocumento.addEventListener('change', (evento) => {
    if (evento.target.value === 'nie') {
        etiquetaDocumento.textContent = 'Escribe tu NIE:'
        numeroDoc.placeholder = '00000000'
    } else if (evento.target.value === 'dui') {
        etiquetaDocumento.textContent = 'Escribe tu DUI:'
        numeroDoc.placeholder = '00000000-0'
    }
})
function enviar() {
    if (document.getElementById("name").value === "" || document.getElementById("numero").value === "" || document.getElementById("numero-doc").value === "" || document.getElementById("message").value === "") {
        alert("Por favor, completa todos los campos del formulario antes de enviarlo.");
        return false; // Evita el envío del formulario
    }

    alert("Formulario enviado con éxito. Nos pondremos en contacto contigo pronto.");

    setTimeout(() => {
    document.getElementById("name").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("numero-doc").value = "";
    document.getElementById("message").value = "";

    }, 300);

 
}