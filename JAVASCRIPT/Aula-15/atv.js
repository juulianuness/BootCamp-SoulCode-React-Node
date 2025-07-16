// Crie uma função chamada saudacao que recebe um nome como parâmetro e imprime no console:"Olá, [nome]!" 

function saudacao(nome) {
    console.log("olá " + nome);
    
}
saudacao("julia");




//Crie uma função soma que recebe dois números como parâmetros e retorna o resultado da soma.

function soma(a1, b2) {
    return a1 + b2
}
console.log(soma(5,5));



//Crie uma função ehPar que recebe um número e retorna true se for par, ou false caso contrário.

// function ehPar(n) {
//     if(n )
// }





//Crie uma função que receba um número e retorne o seu fatorial (ex: 5! = 120).





//Crie uma função que receba dois números e retorne o maior deles.

function Maior(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else {
        return n2
    };

}
console.log(Maior(10,5))




//Crie uma função que recebe um vetor de números e retorna a média aritmética dos valores.





//Crie uma função que recebe uma string e retorna ela invertida (ex: "JavaScript" → "tpircSavaJ").





//Crie um array com 5 nomes. Mostre o primeiro e o último nome no console.

const nomes = ['claudio', 'jaque', 'juliana', 'cris', 'julia']

    console.log(nomes);





//Crie um array de frutas. Adicione duas novas fruta.

let frutas = ["Banana", "maça", "uva"]
    frutas.push("abacate")

    console.log(frutas)





//Crie um vetor com nomes e use o método sort() para ordená-los em ordem crescente.

let sobrns = ["Pietro", "Bernardo", "Manuela"]
    sobrns.sort();

console.log(sobrns);




//Dado um array de números, verifique se o número 10 está presente.

const incluso = [12,10,30,0];

console.log(incluso.includes(10));





//Crie um array de números e use um laço for para calcular e exibir a soma total dos valores.

let numeros = [6, 4];
let somai = 0;

for (let numero of numeros) {
    somai += numero;
}

console.log(somai);





//Dado um array de números, crie um novo array com apenas os números pares.

let total = [4,5,6,8,2];
let pares = total.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(pares.sort()); //sort colocou em ordem crescente






//Crie um objeto pessoa com as propriedades nome, idade e cidade. Exiba cada uma das propriedades no console.





//A partir do objeto pessoa, adicione dinamicamente a propriedade profissao.





//Crie um array com 3 objetos representando alunos. Cada objeto deve conter nome, nota1 e nota2.





//Percorra o array da questão anterior com um laço e calcule a média das notas de cada aluno. Exiba o nome e a média.





//Crie uma função que recebe um objeto carro com as propriedades marca e modelo, e retorna a frase:
//"Carro: [marca] [modelo]" -->


 
