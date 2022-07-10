function media() {
  let notaPrimeiroBi = Number(
    document.getElementById("notaPrimeiroBi").value
  );
  let notaSegundoBi = Number(document.getElementById("notaSegundoBi").value);
  let notaTerceiroBi = Number(
    document.getElementById("notaTerceiroBi").value
  );
  let notaQuartoBi = Number(document.getElementById("notaQuartoBi").value);
  const NOTA_FINAL =
    (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
  resultMedia.value = NOTA_FINAL.toFixed(1);

  if (NOTA_FINAL == 10)
    document.getElementById("notaSaida").innerHTML =
      "Parabéns, você foi aprovado com nota máxima!";
  else if (NOTA_FINAL >= 7)
    document.getElementById("notaSaida").innerHTML =
      "Parabéns, você foi aprovado!";
  else
    document.getElementById("notaSaida").innerHTML =
      "Infelizmente você foi Reprovado!";
}