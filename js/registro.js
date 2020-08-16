// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  limpiarErrores();

  //Expresion regular del correo
  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errornombres").innerText = "Campo obligatorio";
    formulario.nombres.focus();
    return false;
  }

  if (formulario.email.value.trim().length == 0) {
    document.getElementById("errorEmail").innerText = "Campo obligatorio";
    formulario.email.focus();
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "No es un correo valido";
    formulario.email.focus();
    return false;
  }

  if (formulario.password.value.trim().length == 0) {
    document.getElementById("errorPassword").innerText = "Campo obligatorio";
    formulario.password.focus();
    return false;
  }

  if (formulario.password.value.trim().length < 7) {
    document.getElementById("errorPassword").innerText = "Mínimo 7 caracteres";
    formulario.password.focus();
    return false;
  }

  if (formulario.password.value != formulario.rPassword.value) {
    document.getElementById("errorConfirmacion").innerText = "Confirmación no coincide";
    formulario.rPassword.focus();
    return false;
  }

  if (formulario.tipo.value == "") {
    document.getElementById("errorTipo").innerText = "Debe Seleccionar un tipo de usuarios";
    return false;
  }

  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
    formulario.acepto.focus();
    return false;
  }
  alert("Registro Exitoso");
  return true
}

//limpiamos los errores
function limpiarErrores(){
  var errores = document.getElementsByClassName("error");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}