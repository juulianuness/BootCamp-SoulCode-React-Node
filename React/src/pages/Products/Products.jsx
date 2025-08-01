import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./Products.css";
import Footer from './../../components/Footer/Footer';
import { useEffect, useState } from "react";
import TableProd from "../../components/TableProd/TableProd";
import { set, useForm } from "react-hook-form";
import axios from "axios";

const produtosDB = [
    // { id: 1, nome: "Violão Takamine", quantidade: 540, preco: 1500.00 },
    // { id: 2, nome: "Guitarra Fender", quantidade: 480, preco: 1200.00 },
    // { id: 3, nome: "Teclado Yamaha", quantidade: 360, preco: 890.00 },
    // { id: 4, nome: "Bateria Mapex", quantidade: 320, preco: 2800.00 },
    // { id: 5, nome: "Baixo Acústico", quantidade: 410, preco: 1350.00 },
    // { id: 6, nome: "Saxofone", quantidade: 390, preco: 2100.00 },
    // { id: 7, nome: "Violino", quantidade: 370, preco: 950.00 },
    // { id: 8, nome: "Cajón", quantidade: 460, preco: 680.00 },
    // { id: 9, nome: "Banjo 5 cordas", quantidade: 330, preco: 1200.00 },
    // { id: 10, nome: "Trompete", quantidade: 520, preco: 990.00 }
]


const nomeValid = { required: { value: true, message: "Preencha o campo produto" }, minLength: { value: 4, message: "Minimo 4 caracteres" } };
const quantValid = { required: { value: true, message: "Preencha o campo quantidade" }, min: { value: 1, message: "Quantidade minima 1 peça" } };
const precoValid = { required: { value: true, message: "preencha o campo preço" }, min: { value: 0.0001, message: "Valor minimo 0.0001" } }


export default function Products() {
    const [produtos, setProdutos] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    function onSubmit(dados) {
        dados.id = produtos.length
        setProdutos([...produtos, dados]);
    }

    async function buscarProdutos() {
        const url = "https://node-db-6ecm.onrender.com/produtos";
        const response = await axios.get(url);
        const produtos = response.data;
        setProdutos(produtos);
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    return (
        <>
            <Header />

            <Container className="my-5">
                <h1>Produtos</h1>

                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="nome" >
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control type="text" isInvalid={!!errors.nome} {...register("nome", nomeValid)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.nome?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="quantidade">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control type="number" isInvalid={!!errors.quantidade} {...register("quantidade", quantValid)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantidade?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control type="number" isInvalid={!!errors.preco} {...register("preco", precoValid)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.preco?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Cadastrar</Button>
                </Form>
            </Container>

            <Container className='my-5'>
                <h2>Lista de Produtos</h2>

                {produtos.length > 0 ? (
                    <TableProd produtos={produtos} />
                ) : (
                    <p>Não há produtos no estoque.</p>
                )}
            </Container>
            <Footer />
        </>
    );
}