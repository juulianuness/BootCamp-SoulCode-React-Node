import express from "express";
import produtosRouter from "./routers/produtosRouter.js";

const server = express();
server.use(express.json()); //converte o que recebemos em json

const port = 3000;

server.use(produtosRouter);

server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
    console.log(`Acesse em: http://localhost:${port}.`);
});

// HTTP (GET, POST, PUT, DELETE)
// HTTP status
// - 200 Sucesso
// - 201 Salvo com sucesso
// - 400 Requisição Inválido
// - 401 Não autorizado 
// - 404 Não encontrado
// - 500 Erro no servidor