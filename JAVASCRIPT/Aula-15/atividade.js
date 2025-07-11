// Crie uma função chamada saudacao que recebe um nome como parâmetro e imprime no console: "Olá, [nome]!"

function saudacao (nome) {
    console.log("Olá " + nome + "!");
}
saudacao ("Julia")

// Crie uma função soma que recebe dois números como parâmetros e retorna o resultado da soma.

function soma (num1, num2) {
    soma = num1 + num2;
    return soma
}
let resultado = soma (3, 7);
console.log("Resultado = " , resultado);

// Crie uma função ehPar que recebe um número e retorna true se for par, ou false caso contrário.

function ehPar(numero) {
    return numero % 2 === 0;
}
console.log(ehPar(5));



// Crie uma função que receba um número e retorne o seu fatorial (ex: 5! = 120).



// Crie uma função que receba dois números e retorne o maior deles.

function maiorQ(nume1, nume2) {
    if (nume1 > nume2) {
        return nume1;
    } else {
        return nume2;
    }
}

let resul= maiorQ(5, 4);
console.log("O maior número foi", resul);


// Crie uma função que recebe um vetor de números e retorna a média aritmética dos valores.

// Crie uma função que recebe uma string e retorna ela invertida (ex: "JavaScript" → "tpircSavaJ").

// Crie um array com 5 nomes. Mostre o primeiro e o último nome no console.



// Crie um array de frutas. Adicione duas novas fruta.

// Crie um vetor com nomes e use o método sort() para ordená-los em ordem crescente.

// Dado um array de números, verifique se o número 10 está presente.

// Crie um array de números e use um laço for para calcular e exibir a soma total dos valores.

// Dado um array de números, crie um novo array com apenas os números pares.

// Crie um objeto pessoa com as propriedades nome, idade e cidade. Exiba cada uma das propriedades no console.

// A partir do objeto pessoa, adicione dinamicamente a propriedade profissao.

// Crie um array com 3 objetos representando alunos. Cada objeto deve conter nome, nota1 e nota2.

// Percorra o array da questão anterior com um laço e calcule a média das notas de cada aluno. Exiba o nome e a média.

// Crie uma função que recebe um objeto carro com as propriedades marca e modelo, e retorna a frase:
// "Carro: [marca] [modelo]"