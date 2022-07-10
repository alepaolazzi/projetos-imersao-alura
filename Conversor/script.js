function dolarReal() {
  let valorEntrada = parseFloat(document.getElementById("valorEntrada").value);
  const DOLAR_REAL = valorEntrada * 5.02;
  let realDolar = document.getElementById("resultado");
  let valorFinal1 = "R$" + DOLAR_REAL.toFixed(2);
  realDolar.innerHTML = valorFinal1;
}

function euroReal() {
  let valorEntrada = parseFloat(document.getElementById("valorEntrada").value);
  const EURO_REAL = valorEntrada * 5.56;
  let realEuro = document.getElementById("resultado");
  let valorFinal2 = "R$" + EURO_REAL.toFixed(2);
  realEuro.innerHTML = valorFinal2;
}

function bitcoinReal() {
  let valorEntrada = parseFloat(document.getElementById("valorEntrada").value);
  const BITCOIN_REAL = valorEntrada * 210221.33;
  let realBitcoin = document.getElementById("resultado");
  let valorFinal3 = "R$" + BITCOIN_REAL.toFixed(2);
  realBitcoin.innerHTML = valorFinal3;
}

function libraReal() {
  let valorEntrada = parseFloat(document.getElementById("valorEntrada").value);
  const LIBRA_REAL = valorEntrada * 6.62;
  let realLibra = document.getElementById("resultado");
  let valorFinal4 = "R$" + LIBRA_REAL.toFixed(2);
  realLibra.innerHTML = valorFinal4;
}

function pesoReal() {
  let valorEntrada = parseFloat(document.getElementById("valorEntrada").value);
  const PESO_REAL = valorEntrada * 0.046;
  let realPeso = document.getElementById("resultado");
  let valorFinal5 = "R$" + PESO_REAL.toFixed(2);
  realPeso.innerHTML = valorFinal5;
}