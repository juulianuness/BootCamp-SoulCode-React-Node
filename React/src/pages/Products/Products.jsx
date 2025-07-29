import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./Products.css";
import Footer from './../../components/Footer/Footer';

export default function Products(){
    return (
        <>
        <Header />
        <Container className='py-5'>
            <h1>Lista de Produtos</h1>
        </Container>
        <Footer />
        </>
    );
}