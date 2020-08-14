// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites


$(document).ready(function () {
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (respuesta) {//done recibe la funcion como argumento
    //Guarda el resultado en variables

    //Clasifica los eventos segun la fecha actual del JSON

    //Ordena los eventos segun la fecha (los mas cercanos primero)

    //Extrae solo dos eventos

    //Ordena los eventos segun la fecha (los mas cercanos primero)

    //Extrae solo dos eventos

    //Crea un string que contenga el HTML que describe el detalle del evento

    //Recorre el arreglo y concatena el HTML para cada evento

    //Modifica el DOM agregando el html generado

    //Crea un string que contenga el HTML que describe el detalle del evento

    //Recorre el arreglo y concatena el HTML para cada evento

    //Modifica el DOM agregando el html generado

  })

});
