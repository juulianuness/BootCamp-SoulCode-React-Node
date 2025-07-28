import "./Header.css";

export default function Header() {
    const nome = "Julinha";
    const idade = 29
    return (
        <header>
            <h1>Bem Vindo, { nome} {idade} </h1>
        </header>
    );
}

