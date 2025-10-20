import {livros}  from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../imagens/livro2.png';
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section `
    background-color: #EBECEE;
    padding-bottom:20px;
    display:flex;
    flex-direction: column;

`;



const NovosLivrosContainer = styled.div`
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursos: pointer;
`

function UltimosLancamentos(){
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            
            cor={"#000"}
            tamanhoFonte={"36px"}
            alinhamento={"center"}
            > LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
            {livros.map ( livros => (
                <img src={livros.src} alt="so pra tirar o erro"/>
            ))}
            </NovosLivrosContainer>
           <CardRecomenda
                titulo={"Talvez você se interesse por"}
                subtitulo={"ANgular 11"}
                descricao={"Construindo uma aplicação com a plataforma Google. "}
                img={imagemLivro}
           
           >
            
           </CardRecomenda>
        </UltimosLancamentosContainer>
    )
        
        
    
}

export default UltimosLancamentos;