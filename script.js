/* Exercício 1 */

let listaNotas = [8, 10, 9.8, 5.5];

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

/* Exercício 2 */

function resultadoFinal(media) {
  return media >= 7
    ? `<p>Média: <strong>${media}</strong>.<br> Parabéns, você passou na média!</p>`
    : `<p>Média: <strong>${media}</strong>.<br> Infelizmente você está de recuperação.</p>`;
}

document.write(resultadoFinal(mediaNotas));

/* Exercício 3 */

let listaAlunos = ["Pedro", "Maria", "João", "Paula"];

function imprimirNomes(nomes) {
  return nomes.forEach((aluno) => {
    document.write(`${aluno}<br>`);
  });
}

imprimirNomes(listaAlunos);
