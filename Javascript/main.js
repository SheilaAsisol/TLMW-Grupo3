
/*Modo Oacuro*/
const boton = document.getElementById("btn-modo");

if (boton) {
  boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

if (document.body.classList.contains("oscuro")) {
      boton.textContent = "☀️ Modo claro";
} else {
      boton.textContent = "🌙 Modo oscuro";
}
  });
}
/*Validación de formulario*/
const formulario = document.getElementById('contactoForm');
const mensajeEstado = document.getElementById('mensajeEstado');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensajeTexto').value.trim();

  if ( email === '' || mensaje === '') {
    mensajeEstado.innerHTML = '<p style="color: red;">¡Error! Completa todos los campos vacíos.</p>';
    return; 
  }

  mensajeEstado.innerHTML = '<p style="color: green;">¡Mensaje enviado con éxito!</p>';
  formulario.reset(); 
});
