import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./Products.css";
import Footer from './../../components/Footer/Footer';
import { useEffect, useState } from "react";
import TableProd from "../../components/TableProd/TableProd";
import { set, useForm } from "react-hook-form";
import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const produtosDB = []


const nomeValid = { required: { value: true, message: "Preencha o campo produto" }, minLength: { value: 4, message: "Minimo 4 caracteres" } };
const quantValid = { required: { value: true, message: "Preencha o campo quantidade" }, min: { value: 1, message: "Quantidade minima 1 peça" } };
const precoValid = { required: { value: true, message: "preencha o campo preço" }, min: { value: 0.0001, message: "Valor minimo 0.0001" } }


export default function Products() {
    const [produtos, setProdutos] = useState([]);
    const [saving, setSaving] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { isAuthenticated } = useAuth();

    async function onSubmit(dados) {
        setSaving(true);
        try {
            await api.post("/produtos", dados);
            reset();
            buscarProdutos();
        } catch (error) {
            window.alert("Houve um erro")
        }
        setSaving(false);
    }

    async function buscarProdutos() {

        const response = await api.get("/produtos");
        const produtos = response.data;
        setProdutos(produtos);
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    if (!isAuthenticated) {
        Navigate("/login")
    }

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
                    <Button type="submit" disabled={saving}>{saving ? "Cadastrando..." : "Cadastrar"}</Button>
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