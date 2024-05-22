let listaNotas = [8, 7, 9, 5];

function calculaMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  let media = soma / notas.length;
  return media;
}

let mediaNotas = calculaMedia(listaNotas);

console.log(`A média das notas é: ${mediaNotas}`);
