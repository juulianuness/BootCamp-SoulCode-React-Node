const botao = document.querySelector("#botaoSomar");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {
  const valor1 = parseFloat(numero1.value);
  const valor2 = parseFloat(numero2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.value = "Digite dois números válidos.";
  } else {
    const soma = valor1 + valor2;
    resultado.value = soma;
  }
});
