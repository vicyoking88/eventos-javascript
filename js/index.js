// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var hoy;
var eventos;
var pasados = [];
var proximos = [];
var top2Pasados = [];
var top2Proximos = [];

$(document).ready(function () {
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (eventosOb) {//done recibe la funcion como argumento
    //Guarda el resultado en variables
    hoy = eventosOb.fechaActual;
    eventos = eventosOb.eventos;
    //Clasifica los eventos segun la fecha actual del JSON
    for (var i = 0; i < eventos.length; i++) {

      if (hoy < eventos[i].fecha) {
        //proximos
        proximos.push(eventos[i]);
      } else {
        //pasados
        pasados.push(eventos[i]);
      }
    };
    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos = proximos.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return -1;
      }
        return 1;
    });
    //Extrae solo dos eventos
    console.log(proximos);
    top2Proximos = proximos.splice(0, pasados.length - 2);
    console.log(top2Proximos);

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    pasados = pasados.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return 1;
      }
        return -1;
    });

    //Extrae solo dos eventos
    console.log(pasados);
    top2Pasados = pasados.splice(0, pasados.length - 2);
    console.log(top2Pasados);

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html1 = "";

    //Recorre el arreglo y concatena el HTML para cada evento
    for (var j = 0; j < top2Proximos.length; j++) {
      html1 += ` 
      <div class="rounded col bg-light px-4 py-2 mr-4">
      <a class="row text-primary" href="detalle.html?id=${top2Proximos[j].id}"><h2>${top2Proximos[j].nombre}</h2></a>
      <div class="row text-secondary">${top2Proximos[j].fecha}</div>
      <div class="row">${top2Proximos[j].descripcion}</div>
      </div>
      `
    }
    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = html1

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html2 = "";
    //Recorre el arreglo y concatena el HTML para cada evento
    for (var j = 0; j < top2Pasados.length; j++) {
      html2 += ` 
      <div class="col rounded bg-light px-4 py-2 mr-4">
      <a class="row text-primary" href="detalle.html?id=${top2Pasados[j].id}">
      <h2>${top2Pasados[j].nombre}</h2>
      </a>
      <div class="row text-secondary">${top2Pasados[j].fecha}</div>
      <div class="row">${top2Pasados[j].descripcion}</div>
      </div>
      `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = html2

  });
});
