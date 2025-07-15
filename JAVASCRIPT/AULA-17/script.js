const imagemPrincipal = document.querySelector("#imagem-principal");
const imagens = document.querySelectorAll(".imagens");


for (let imagem of imagens) {
    imagem.addEventListener("mouseenter", (evento) => {
        console.log(evento)
        const imagemAtual = imagemPrincipal.src;
        imagemPrincipal.src = imagem.src;
        imagem.src = imagemAtual;
    });
}

    





































    // imagem1.onclick = () => {
        //     imagemPrincipal.src = imagem1.src; // muda a imagem para a outra
        // }



    // const imagem1 = document.querySelector('#imagem-1');
    // const imagem2 = document.querySelector('#imagem-2');
    // const imagem3 = document.querySelector('#imagem-3');



// imagem2.onmouseenter = () => {
//     const imagemAtual = imagemPrincipal.src;// muda uma imagem com a outra
//     imagemPrincipal.src = imagem2.src;
//     imagem2.src = imagemAtual;
// }

// imagem3.onmouseenter = () => {
//     const imagemAtual = imagemPrincipal.src;// muda uma imagem com a outra
//     imagemPrincipal.src = imagem3.src;
//     imagem3.src = imagemAtual;
// }
