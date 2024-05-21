# SENAI Fullstack [Education]

## Resolução dos exercícios da Semana 03 - Módulo 02

### M2S03 | Roteiro do mini projeto da semana

A partir dessa semana, iremos começar uma dinâmica que, ao final de 3 semanas, contando com essa, irá se formar em um mini projeto para o portfólio de cada um.

Em princípio, a maioria dos exercícios não terão uma conexão, mas todas as funções criadas serão utilizadas mais na frente.

Bom exercício ^-^

### M2S03 | Ex 1 - Projeto LabScore

Crie uma variável que irá receber como valor um array de 4 notas. Após isso, crie uma função que irá calcular a média dessas 4 notas. Deverá ser passado a variável que recebe o array de notas como parâmetro da função.

Utilize o laço ‘_**for**_’ para o cálculo.

### M2S03 | Ex 2 - Projeto LabScore

Crie uma função a qual recebe um valor numérico como parâmetro que irá ser a média; caso a média seja maior que 7, retorne em um **document.write()** a seguinte mensagem “Parabéns você passou na média !”, já, caso a média seja menor que 7, deve escrever em um **document.write()** a mensagem “Infelizmente você está de recuperação.”

### M2S03 | Ex 3 - Projeto LabScore

Agora, crie uma função javascript que irá receber uma variável como parâmetro; ela será um array de nomes de alguns alunos (pode ser nomes aleatórios). Através do método de array **forEach(),** imprima em tela (com document.write) todos os nomes do array, um abaixo do outro.

### M2S03 | Ex 4 - Projeto LabScore

Utilizando estrutura de repetição for, realize a tabuada do número 8 e exibe em tela da seguinte forma:

```
8 x 0 = 0
8 x 1 = 8
8 x 2 = 16
....
8 x 10 = 80
```

### M2S03 | Ex 5 - Projeto LabScore

Desenvolva um código JavaScript que faça o seguinte:

1- Faça as seguintes 5 perguntas ao usuário:

- Qual o nome do aluno?
- Qual a idade do aluno?
- Qual a série do aluno?
- Qual o nome da escola?
- Qual a sua matéria favorita?

2- Utilize o método **confirm()** do JavaScript para perguntar ao usuário se ele confirma os dados inseridos (isso apenas ao final das 5 perguntas).

4- Se o usuário confirmar, exiba todas as informações do aluno na tela utilizando o método **document.write()**.

5- Caso ele não aceite o programa, deve ser encerrado e nada deve ser feito. apenas mostre uma mensagem de que os dados não foram confirmado.

### M2S03 | Ex 6 - Projeto LabScore

Pensando em um sistema de notas online, crie um código que irá capturar o nome da matéria e as suas quatro notas; deve ser usado um prompt dentro de uma laço while, para capturar apenas as notas. A ideia é que, a cada valor digitado no prompt, ele seja adicionado a um array e este irá ser o valor de uma propriedade de um objeto. Observe o fluxo:

Exemplo: Digito o nome da matéria -> Digito as 4 notas -> montar o seguinte objeto:

```
{
  nomeMateria: “Matemática”,
  notas: [10,6,8,9],
}
```

Após isso, crie um laço “for” que irá calcular a média de todos os itens da propriedade _**notas**_; pode ser utilizado o método criado no exercício 01, o resultado será o retorno dessa função.

### M2S03 | Ex 7 - Projeto LabScore

Crie uma função que recebe um array de números e retorna o maior número dentre eles; para isso, utilize um qualquer laço de repetição.
