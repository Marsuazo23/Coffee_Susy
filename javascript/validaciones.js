// validaciones.js

// Validar que el campo no esté vacío
function validarCampoVacio(campo, mensaje) {
    if (campo.value.trim() === "") {
      alert(mensaje);
      campo.focus();
      return false;
    }
    return true;
  }
  
  // Validar el formato del correo electrónico
  function validarEmail(campo) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(campo.value.trim())) {
      alert("Por favor, ingrese un correo electrónico válido.");
      campo.focus();
      return false;
    }
    return true;
  }
  
  // Validar número de teléfono
  function validarTelefono(campo) {
    const regex = /^[0-9]{8}$/;
    if (!regex.test(campo.value.trim())) {
      alert("El número de teléfono debe tener 8 dígitos.");
      campo.focus();
      return false;
    }
    return true;
  }
  
  // Validar que la cantidad de personas sea un número mayor a 0
  function validarCantidadPersonas(campo) {
    if (campo.value.trim() === "" || campo.value <= 0) {
      alert("Por favor, ingrese una cantidad de personas válida.");
      campo.focus();
      return false;
    }
    return true;
  }
  
  // Validar fecha (no puede ser anterior a la fecha actual)
  function validarFecha(campo) {
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(campo.value);
    if (fechaSeleccionada < fechaActual) {
      alert("La fecha seleccionada no puede ser anterior a la fecha actual.");
      campo.focus();
      return false;
    }
    return true;
  }
  
  // Función para validar todo el formulario
  function validarFormulario(event) {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const cantidadPersonas = document.getElementById("cantidadPersonas");
    const fecha = document.getElementById("fecha");
    const hora = document.getElementById("hora");
    const mensaje = document.getElementById("mensaje");
  
    // Validaciones individuales
    if (!validarCampoVacio(nombre, "Por favor, ingrese su nombre.")) return false;
    if (!validarCampoVacio(apellido, "Por favor, ingrese su apellido.")) return false;
    if (!validarEmail(email)) return false;
    if (!validarTelefono(telefono)) return false;
    if (!validarCantidadPersonas(cantidadPersonas)) return false;
    if (!validarFecha(fecha)) return false;
    if (!validarCampoVacio(hora, "Por favor, ingrese la hora.")) return false;
    if (!validarCampoVacio(mensaje, "Por favor, ingrese un mensaje.")) return false;
  
    return true;  // Si todas las validaciones son exitosas
  }
  