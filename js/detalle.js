// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var id = location.search.match(/id=(\d)*/)[1]

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5501/ajax/ejer_1/info.json"
  }).done(function (resultado) {
    //Guarda el resultado en una variable
    eventos = resultado.eventos;
    //Busca el elemento en el arreglo
    evento = eventos.find(function (element) {
      return element.id == id
    })
    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = ` 
      <div class="rounded col-12 bg-light px-4 py-2 my-3">
      <h2>${evento.nombre}</h2>
      <p class="text-secondary">${evento.fecha}</p>
      <p class="text-secondary">Lugar : ${evento.lugar}</p
      <p>${evento.descripcion}</p>
      <p class="text-primary">Costo: ${evento.precio}</p>
      <p class="text-warning">Invitados: ${evento.invitados}</p>
      </div>
      `
      ;
    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = html
  });
});
