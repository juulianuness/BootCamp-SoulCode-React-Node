const lampada = document.querySelector("#lampada");

const lampadaAcesa = "./images/lampada-apagada (1).png";
const lampadaApaga = "./images/lampada-acesa (1).png";

let apagada = true;

setInterval(() => {
    if (apagada) {
        lampada.src = lampadaAcesa;
        document.body.style.backgroundColor = "white";
    } else {
        lampada.src = lampadaApaga;
        document.body.style.backgroundColor = "#040436";
    }
    apagada = !apagada;
}, 1000);
