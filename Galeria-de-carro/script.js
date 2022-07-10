var listaCarros = [
  "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/5058207/pexels-photo-5058207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

var listaNomes = [
  "BMW",
  "CAMARO",
  "CARRO ANTIGO",
  "CARRO NOVO",
  "OUTRA BMW",
  "SEDAN"
];

function enviarUrl() {
  var imagemEnviada = document.getElementById("url").value;
  listaCarros.push(imagemEnviada);
  exibe();
  document.getElementById("url").value = "";
}

function enviarNome() {
  var nomeEnviado = document.getElementById("nome").value;
  listaNomes.push(nomeEnviado);
  exibe();
  document.getElementById("nome").value = "";
}

function exibe() {
  var exibe = document.getElementById("content");
  exibe.innerHTML = "";
  for (var i = 0; i < listaCarros.length; i++) {
    exibe.innerHTML +=
      "<img src=" +
      listaCarros[i] +
      ">" +
      "<br>" +
      "<h4>" +
      listaNomes[i] +
      "</h4>";
  }
}

exibe();