const cidades = document.querySelector("#cidades");

const urlCidades = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/RJ/municipios";

fetch(urlCidades)
  .then((resposta) => resposta.json())
  .then((dados) => {
    preencherNaTela(dados);
  })
  .catch((erro) => {
    console.error(erro);
    cidades.innerHTML = "Houve um erro ao buscar as cidades.";
  });

function preencherNaTela(dados) {
  for (let item of dados) {
    cidades.innerHTML += `<li>${item.nome}</li>`;
  }
}
