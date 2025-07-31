import { Container, Table } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./Products.css";
import Footer from './../../components/Footer/Footer';
import { useState } from "react";
import TableProd from "../../components/TableProd/TableProd";

const produtosDB = [
        { id: 1, nome: "Violão Takamine", quantidade: 540, preco: 1500.00 },
        { id: 2, nome: "Guitarra Fender", quantidade: 480, preco: 1200.00 },
        { id: 3, nome: "Teclado Yamaha", quantidade: 360, preco: 890.00 },
        { id: 4, nome: "Bateria Mapex", quantidade: 320, preco: 2800.00 },
        { id: 5, nome: "Baixo Acústico", quantidade: 410, preco: 1350.00 },
        { id: 6, nome: "Saxofone", quantidade: 390, preco: 2100.00 },
        { id: 7, nome: "Violino", quantidade: 370, preco: 950.00 },
        { id: 8, nome: "Cajón", quantidade: 460, preco: 680.00 },
        { id: 9, nome: "Banjo 5 cordas", quantidade: 330, preco: 1200.00 },
        { id: 10, nome: "Trompete", quantidade: 520, preco: 990.00 }
    ]

export default function Products() {
    const [produtos, setProdutos] = useState(produtosDB);
    return (
        <>
            <Header />
            <Container className='py-5'>
                <h2>Lista de Produtos</h2>
                {produtos.length > 0 ? (
                <TableProd produtos={produtos} />
                ): (
                    <p>"Nenhum produto disponível no momento."</p>
                )}
            </Container>
            <Footer />
        </>
    );
}