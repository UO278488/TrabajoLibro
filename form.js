function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var libro = document.getElementById("libro").value;

    if (nombre == "" || email == "" || libro == "") {
      alert("Por favor completa todos los campos");
    } else {
      alert("Formulario enviado correctamente");
    }
  }