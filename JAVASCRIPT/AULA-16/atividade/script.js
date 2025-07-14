const lampadas = [
    "images/lampada-acesa.png",
    "images/lampada-apagada.png"
];

let indice = 0;
const lampada = document.querySelector("#lampada");


setInterval(() => {
    indice = (indice + 1) % lampadas.length;
    lampada.src = lampadas[indice];
}, 1000);
