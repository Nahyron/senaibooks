import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    backgorund-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`;

const Titulo = styled.h2`
 color: #FFF;
 font-size: 36px;
 text-align: center;
 width: 100%;

`;

const Subtitulo = styled.h3`
font-size: 16px;
font-weight: 500px;
margin-bottom: 40px;

`;

const Resultado = styled.div `
display:flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
cursor: pointer;
p{
    width: 200px;
}

img{
    width: 100px;
}

&:hover{
border: 4px solid white;
}
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    console.log(livrosPesquisados)
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura:"
                onInput={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livros => livros.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />

            { livrosPesquisados.map( livro => (
                <Resultado>
                    <img src={livro.src} alt="oi"/>
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    );
}

export default Pesquisa;