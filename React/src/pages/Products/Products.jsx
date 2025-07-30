import { Container, Table } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./Products.css";
import Footer from './../../components/Footer/Footer';
import { useState } from "react";

export default function Products() {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Violão Takamine", quantidade: 5, preco: 4500.00 },
        { id: 2, nome: "Guitarra Fender", quantidade: 20, preco: 150.00 },
        { id: 3, nome: "Teclado Yamaha", quantidade: 10, preco: 350.00 },
        { id: 4, nome: "Bateria Mapex", quantidade: 7, preco: 1200.00 },
        { id: 5, nome: "Baixo Acustico", quantidade: 4, preco: 980.00 },
        { id: 6, nome: "Saxofone", quantidade: 15, preco: 390.00 },
        { id: 7, nome: "Violino", quantidade: 8, preco: 250.00 },
        { id: 8, nome: "Cajón", quantidade: 3, preco: 1300.00 },
        { id: 9, nome: "Banjo 5 cordas", quantidade: 12, preco: 1800.00 },
        { id: 10, nome: "Trompete", quantidade: 9, preco: 220.00 }
    ]);
    return (
        <>
            <Header />
            <Container className='py-5'>
                <h2>Lista de Produtos</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td className="text-center">{produto.quantidade}</td>
                                <td>{produto.preco}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {produtos.length === 0 && "Nenhum produto disponível no momento."}
            </Container>
            <Footer />
        </>
    );
}