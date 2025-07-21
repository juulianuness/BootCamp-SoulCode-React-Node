import express from "express";

const server = express();
server.use(express.json()); //converte o que recebemos em json
const port = 3000;
const produtos = [
    {
        name: "Smart TV Samsung 32\"",
        quantidade: 2000,
        preco: 1500,
    },
    {
        name: "Notebook Acer Nitro 5",
        quantidade: 1000,
        preco: 5500,
    },
    {
        name: "Gabinete Gamer 16GB i59400",
        quantidade: 1000,
        preco: 4500,
    }
];

server.get("/produtos", (req, res) =>{
    res.status(200).json(produtos);

});

server.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)){
        return res.status(400).json({ msg: "Digite apenas numeros"});
    }

    const dados = produtos[id-1];
    if (dados) {
        res.status(200).json(dados);
    } else {
        res.status(404).send('Página não encontrada!');
    }
    
});

server.post("/produtos" , (req, res) => {
    const produto = req.body; //dados que eu quero cadastrar entram aqui 
    produtos.push(produto);
    res.status(201).json({ msg: "Produto Cadastrado"})
});



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