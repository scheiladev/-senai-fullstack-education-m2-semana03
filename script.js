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
document.write("<br>");

/* Exercício 4 */

function tabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    document.write(`${numero} x ${i} = ${resultado}<br>`);
  }
}

tabuada(8);
document.write("<br>");

/* Exercício 5 */

function entrevistaAluno() {
  let nome = window.prompt("Qual o nome do aluno?");
  let idade = window.prompt("Qual a idade do aluno?");
  let serie = window.prompt("Qual a série do aluno?");
  let escola = window.prompt("Qual o nome da escola?");
  let materia = window.prompt("Qual a sua matéria favorita?");

  let confirmacao = window.confirm("Você confirma os dados inseridos? ");

  return confirmacao
    ? document.write(`
      <p>Nome do aluno: <strong>${nome}</strong></p>
      <p>Idade do aluno: <strong>${idade}</strong></p>
      <p>Série do aluno: <strong>${serie}</strong></p>
      <p>Nome da escola: <strong>${escola}</strong></p>
      <p>Matéria favorita: <strong>${materia}</strong></p>
    `)
    : document.write(`Os dados não foram confirmados.`);
}

entrevistaAluno();
