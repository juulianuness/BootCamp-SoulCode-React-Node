import { Container, Navbar } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Rodapé Controle de Estoque</Navbar.Brand>
                </Container>
            </Navbar>
        </footer>
    );
}