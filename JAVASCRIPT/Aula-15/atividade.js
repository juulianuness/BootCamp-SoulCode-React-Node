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

function fatorial (fat) {
    let resultado = 1;
    for (let i = fat; i >= 1; i--) {
        resultado *=i; 
    }
    return resultado;
}
console.log(fatorial(6));




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

function inverter(texto) {
    let invertida = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        invertida = letra + invertida;
    }
    return invertida;
}



// Crie um array com 5 nomes. Mostre o primeiro e o último nome no console.

const primeiroEUltimo = [ 'Claudio', 'Jaqueline', 'Juliana', 'Crislayne', 'Julia'];

console.log(primeiroEUltimo[4]);
console.log(primeiroEUltimo[0]); // ou primeiroEUltimo.length-1



// Crie um array de frutas. Adicione duas novas fruta.

const frutass = ['banana', 'maça', 'uva' ];
frutass.push('pêra', 'laranja');
console.log(frutass)

// Crie um vetor com nomes e use o método sort() para ordená-los em ordem crescente.

const nomess = ['Pietro', 'Bernardo', 'Manuela'];
nomess.sort();
console.log(nomess)

// Dado um array de números, verifique se o número 10 está presente.
const NumIncluso = [ 4, 2, 10, 12];
const incluso = NumIncluso.includes(12);
console.log(incluso ? "Sim" : "Não");

// Crie um array de números e use um laço for para calcular e exibir a soma total dos valores.

const somar = [10 , 2]
let totall = 0;

for (let numero of somar) {
    totall += numero;
}
console.log(totall)

// Dado um array de números, crie um novo array com apenas os números pares.

const pares = NumIncluso.filter(ehPar);
console.log(pares);





// Crie um objeto pessoa com as propriedades nome, idade e cidade. Exiba cada uma das propriedades no console.

const Pessoa = { nome: "Julia" , idade: 29 , cidade: 'SC'};
for (let propriedades in Pessoa ) {


console.log(propriedades);
}

// A partir do objeto pessoa, adicione dinamicamente a propriedade profissao.
Pessoa.profissao = "estudante";

console.log(Pessoa);

// Crie um array com 3 objetos representando alunos. Cada objeto deve conter nome, nota1 e nota2.
const Alunos = [
    {
        nome: "Pedro",
        nota1: 8.5,
        nota2: 7.0,
    },
    {
        nome: "Thiago",
        nota1: 6.0,
        nota2: 9.0,
    },
    {
        nome: "João",
        nota1: 10.0,
        nota2: 8.5,
    },
];

console.log(Alunos);

// Percorra o array da questão anterior com um laço e calcule a média das notas de cada aluno. Exiba o nome e a média.


// Crie uma função que recebe um objeto carro com as propriedades marca e modelo, e retorna a frase:






// // Crie uma função chamada saudacao que recebe um nome como parâmetro e imprime no console:
// "Olá, [nome]!"
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}
saudacao("Bruna");

// Crie uma função soma que recebe dois números como parâmetros e retorna o resultado da soma.
function soma(n1, n2) {
    return n1 + n2;
}
const total = soma(12, 5);
console.log(total);

// Crie uma função ehPar que recebe um número e retorna true se for par, ou false caso contrário.
function ehPar(num) {
    return (num % 2 == 0);
}
console.log(ehPar(14) ? "PAR" : "IMPAR");
console.log(ehPar(17) ? "PAR" : "IMPAR");

// Crie uma função que receba um número e retorne o seu fatorial (ex: 5! = 120).
function fatorial(fat) {
    let resultado = 1;
    for (let i = fat; i >= 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(6));

// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

// Crie uma função que receba dois números e retorne o maior deles.
function maior(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log(maior(78, 56));

// Crie uma função que recebe um vetor de números e retorna a média aritmética dos valores.
function media(nums) {
    let soma = 0;
    for (let n of nums) {
        soma += n;
    }
    const resultado = soma / nums.length;
    return resultado;
}

const nums = [4, 7, 9, 12, 17, 3, 8];
console.log(media(nums));

console.log(media([7, 8, 9]));

// Crie uma função que recebe uma string e retorna ela invertida (ex: "JavaScript" → "tpircSavaJ").
function inverter(texto) {
    let invertida = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        invertida = letra + invertida;
    }
    return invertida;
}

console.log(inverter("Socorram-me subi no ônibus em marrocos"));

// Crie um array com 5 nomes. Mostre o primeiro e o último nome no console.
const nomes = ["Laura", "Greison", "Milena", "Fernanda", "Kaio"];
const ultimo = nomes.length - 1;
console.log(nomes[0], nomes[ultimo]);

// Crie um array de frutas. Adicione duas novas fruta.
const frutas = ["Abacaxi", "Manga", "Tomate"];
frutas.push("Goiaba", "Abacate"); // adiciona duas frutas no final da matriz
console.log(frutas);

// Crie um vetor com nomes e use o método sort() para ordená-los em ordem crescente.
nomes.sort();
console.log(nomes);

// Dado um array de números, verifique se o número 10 está presente.
const listaNumeros = [5, 8, 2, 19, 22, 89, 10];
console.log(listaNumeros.includes(10));

// Crie um array de números e use um laço for para calcular e exibir a soma total dos valores.
let resultadoo = 0;
for (let n of listaNumeros) {
    resultadoo += n;
}
console.log(resultadoo);

// Dado um array de números, crie um novo array com apenas os números pares.
const paress = listaNumeros.filter(ehPar);
console.log(paress);

// Crie um objeto pessoa com as propriedades nome, idade e cidade. Exiba cada uma das propriedades no console.
const pessoa = {
    nome: "Greison",
    idade: 25,
    cidade: "Rio de Janeiro"
};
console.log(pessoa.nome, pessoa.idade, pessoa.cidade);

// A partir do objeto pessoa, adicione dinamicamente a propriedade profissao.
pessoa.profissao = "Professor";
console.log(pessoa);

// Crie um array com 3 objetos representando alunos. Cada objeto deve conter nome, nota1 e nota2.
const alunos = [
    { nome: "Emily", nota1: 9.5, nota2: 10 },
    { nome: "Monica", nota1: 5, nota2: 10 },
    { nome: "Elisa", nota1: 10, nota2: 10 }
];
console.log(alunos);
console.log(alunos[1].nome);

// Percorra o array da questão anterior com um laço e calcule a média das notas de cada aluno. Exiba o nome e a média.
alunos.forEach((aluno) => {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(aluno.nome, media);
});

// Crie uma função que recebe um objeto carro com as propriedades marca e modelo, e retorna a frase:
// "Carro: [marca] [modelo]"

function formatarNomeCarro(carro) {
    return "Carro: " + carro.marca + " " + carro.modelo;
}

const nomeCarro = formatarNomeCarro({
    marca: "Toyota",
    modelo: "Hilux"
});

console.log(nomeCarro);

// Questionamento do if com ;