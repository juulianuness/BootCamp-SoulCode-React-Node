import express from "express";
import app from "../firebase/app.js";
import { getFirestore } from "firebase-admin/firestore";

const produtosRouter = express.Router(); 


// Busca por todos os produtos 
const db = getFirestore(app);

produtosRouter.get("/produtos", async (req, res) => {
    const collection = db.collection("produtos").get(); // nome da coleção que quero consultar
    const documents = await collection.get();
    const produtos = [];
    const produto = doc.data();
    documents.forEach((doc) => { //// pra cada documento da lista, ele vai inserir o documento convertido em data
        produtos.push(produto);
    });
    res.status(200).json(produtos); //retorna a lista 
});


// Consultando um item específico pelo id
produtosRouter.get("/produtos/:id", async (req, res) => {
    const id = req.params.id;
    const doc = await db.collection("produtos").doc(id).get(); // especifico qual documento eu quero pegar. e não mais uma lista 
    const dados = doc.data(); 

    if (dados) {
        res.status(200).json(dados); // retorna o que eu pedi 
    } else {
        res.status(404).send('Produto não encontrado!'); // se não encontrar, aparece essa mensagem
    }
});

// Adicionar um novo documento
produtosRouter.post("/produtos", async (req, res) => {
    const produto = req.body;
    await db.collection("produtos").add(produto);
    res.status(201).json({ msg: "Produto Cadastrado" });
});

export default produtosRouter;
