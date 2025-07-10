// function cumprimentar(){
//     console.log ("oi");
// }
// cumprimentar();
// cumprimentar();
// cumprimentar();


// function cumprimentar(nome){
//     console.log ("oi" , nome);
// }
// cumprimentar("Julia");
// cumprimentar("Juu");
// cumprimentar("Juuu");


// function cumprimentar(nome, sobrenome){
//     console.log ("oi" , nome + " " + sobrenome);
// }
// cumprimentar("Julia" , "C.O");
// cumprimentar("Julia" , "Vieira");
// cumprimentar("Julia" , "Nunes");


// Função com parâmetros e com retorno.
function calcularAreaRetangulo(base, altura) {
    let area = base * altura;
    return area;
}

let area = calcularAreaRetangulo(4, 5);
console.log(area);

// Função sem parâmetros e com retorno.
function buscarTodosProdutos() {
    // consultador no banco de dados
    let produtos = ['produto 1', 'produto 2'];
    return produtos;
}

let produtos = buscarTodosProdutos();
console.log(produtos);


function saudar(callback, nome) {
  console.log("Preparando saudação...");
  callback(nome);
}

function mostrarSaudacao(nome) {
  console.log("Olá, " + nome + "!");
}

saudar(mostrarSaudacao, "Tom");


setInterval(() => {
    console.log("Oi meu nome é Tom");
}, 4000);