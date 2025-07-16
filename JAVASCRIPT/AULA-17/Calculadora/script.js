const form = document.querySelector("#form");
const n1 = document.querySelector("#numero1");
const n2 = document.querySelector("#numero2");
const operacao = document.querySelector("#operacao");
const painel = document.querySelector("#resultados");

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evita recarregar a página

    const valor1 = parseFloat(n1.value);
    const valor2 = parseFloat(n2.value);
    let resultado;

    // Verifica se os dois são números válidos
    if (isNaN(valor1) || isNaN(valor2)) {
        painel.innerHTML = `
        <div class="alert alert-danger mt-3">
            Por favor, digite dois números válidos.
        </div>`;
        return;
    }

    // Realiza a operação
    switch (operacao.value) {
        case "soma":
            resultado = valor1 + valor2;
            break;
        case "subtrair":
            resultado = valor1 - valor2;
            break;
        case "multiplicar":
            resultado = valor1 * valor2;
            break;
        case "dividir":
            if (valor2 === 0) {
                painel.innerHTML = `
                <div class="alert alert-warning mt-3">
                    Não é possível dividir por zero.
                </div>`;
                return;
            }
            resultado = valor1 / valor2;
            break;
    }

    // Exibe o resultado
    painel.innerHTML = `
    <div class="alert alert-success mt-3">
        Resultado: ${resultado}
    </div>`;
});
