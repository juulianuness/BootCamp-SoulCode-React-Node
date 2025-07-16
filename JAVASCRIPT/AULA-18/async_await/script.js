const cidades = document.querySelector("#cidades");

const urlCidades = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios";

function preencherNaTela(dados) {
  for (let item of dados) {
    cidades.innerHTML += `<li>${item.nome}</li>`;
  }
}
async function buscarDadosIBGE() {
  try {
  const resposta = await fetch(urlCidades);
  const dados = await resposta.json();
  preencherNaTela(dados);
  }catch (erro) {
    console.error(erro);
    cidades.innerHTML = "Houve um erro";
  }
}
buscarDadosIBGE();



