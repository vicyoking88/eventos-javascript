// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var hoy;
var eventos;
var proximos = [];
$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (eventosOb) {
    //Guarda el resultado en variables
    hoy = eventosOb.fechaActual;
    eventos = eventosOb.eventos;
    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    for (var i = 0; i < eventos.length; i++) {

      if (hoy < eventos[i].fecha) {
        //proximos
        proximos.push(eventos[i]);
      }
    }
    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos = proximos.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return 1;
      }
      return -1;
    });
    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = "";
    //Recorre el arreglo y concatena el HTML para cada evento
    for (var j = 0; j < proximos.length; j++) {
      html += ` 
      <div class="rounded col-12 bg-light px-4 py-2 my-3">
      <h2 class="text-primary">${proximos[j].nombre}</h2>
      <p class="text-secondary">${proximos[j].fecha} - ${proximos[j].lugar}</p>
      <p>${proximos[j].descripcion}</p>
      <p class="text-info">Costo : ${proximos[j].precio}</p>
      </div>
      `
    }
    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("proximos").innerHTML = html

  });
});
