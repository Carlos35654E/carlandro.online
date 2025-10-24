// --- script.js (Código para GUARDAR DATOS) ---

document.addEventListener('DOMContentLoaded', function() {

    const formulario = document.getElementById('form-empleado');
    const botonEnviar = document.getElementById('enviar-btn');
    const feedback = document.getElementById('feedback');

    botonEnviar.addEventListener('click', function(e) {
        
        // 1. Evita el comportamiento por defecto del formulario (que recarga la página)
        // Ya no es necesario porque cambiamos el type del botón, pero es buena práctica si fuera submit.

        feedback.textContent = "Enviando datos...";

        // 2. Recolecta los datos de los inputs
        const datos = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            mensaje: document.getElementById('mensaje').value 
        };
        
        // Revisión rápida
        if (!datos.nombre || !datos.email || !datos.mensaje) {
             feedback.textContent = "Por favor, llena todos los campos.";
             return;
        }


        // 3. ¡LA PETICIÓN POST!
        fetch('http://localhost:5000/api/employees', {
            method: 'POST', // <-- ¡EL MÉTODO ES POST!
            headers: {
                'Content-Type': 'application/json' // Decimos que enviamos un JSON
            },
            body: JSON.stringify(datos) // Convertimos los datos de JS a JSON para Python
        })
        .then(response => response.json()) // Esperamos la respuesta de Python
        .then(respuestaPython => {
            if (respuestaPython.error) {
                feedback.textContent = `Error del servidor: ${respuestaPython.error}`;
                feedback.style.color = 'red';
            } else {
                feedback.textContent = `¡GUARDADO! ID asignado: ${respuestaPython.id}. Revisa HeidiSQL.`;
                feedback.style.color = 'green';
                formulario.reset(); // Limpia el formulario
            }
        })
        .catch(error => {
            // Este catch atrapa errores de red (como CORS o que Python no esté corriendo)
            console.error('Error de red/conexión:', error);
            feedback.textContent = "Error de conexión. Asegúrate que Python esté corriendo (Puerto 5000).";
            feedback.style.color = 'red';
        });
    });
});