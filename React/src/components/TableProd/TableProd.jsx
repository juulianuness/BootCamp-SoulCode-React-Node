import { Table } from "react-bootstrap"
import "./TableProd.css"

export default function TableProd(props){
    return (
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
                        {props.produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td className="text-center">{produto.quantidade}</td>
                                <td> R$ {produto.preco}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
    )
}