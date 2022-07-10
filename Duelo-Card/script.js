var carta1 = {
  nome: "Baleia Azul",
  imagem:
    "https://ogimg.infoglobo.com.br/in/21217385-7eb-cd1/FT1086A/baleia-azul.jpg",
  atributos: {
    tamanho: 10,
    força: 2,
    peso: 10
  }
};

var carta2 = {
  nome: "Baleia de Bryde",
  imagem:
    "https://media.istockphoto.com/photos/brydes-whale-edens-whale-in-gulf-of-thailand-picture-id517534995?k=20&m=517534995&s=612x612&w=0&h=UyzfR6KHfOyXI3rQVetGgU0EpC23vxmhOVUJ9S8X_-I=",
  atributos: {
    tamanho: 5,
    força: 8,
    peso: 3
  }
};

var carta3 = {
  nome: "Baleia Cachalote",
  imagem:
    "https://container.aiyellow.com/pictures/articles/01/71/11.jpg?26022515",
  atributos: {
    tamanho: 8,
    força: 7,
    peso: 5
  }
};

var carta4 = {
  nome: "Baleia Fin",
  imagem: "https://i.ytimg.com/vi/hyS4M0dOmsk/maxresdefault.jpg",
  atributos: {
    tamanho: 9,
    força: 3,
    peso: 7
  }
};

var carta5 = {
  nome: "Baleia Franca",
  imagem: "http://noticias.paginas.ufsc.br/files/2016/06/BF5.jpg",
  atributos: {
    tamanho: 6,
    força: 5,
    peso: 7
  }
};

var carta6 = {
  nome: "Baleia Jubarte",
  imagem:
    "https://super.abril.com.br/wp-content/uploads/2019/02/baleia_site.png?w=1024",
  atributos: {
    tamanho: 6,
    força: 7,
    peso: 6
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 6);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributo() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributo();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    resultadoHTML = "<p class='resultado-final'>Venceu!</p>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    resultadoHTML = "<p class='resultado-final'>Você Perdeu!</p>";
  } else {
    resultadoHTML = "<p class='resultado-final'>Empatou!</p>";
  }
  elementoResultado.innerHTML = resultadoHTML;

  exibirCartaMaquina();
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}