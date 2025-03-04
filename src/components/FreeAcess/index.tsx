import React from "react";
import styled from "styled-components";
import ButtonDefault from "../Button";
import {Manrope} from '@next/font/google'

const manrope = Manrope({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
})


const FreeAcessDue = styled.div`
    align-items: center;
    background-color: #F6DFB7;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    font-family: "Manrope", sans-serif;
    justify-content: center;
    margin: 30px auto;
    max-width: 1148px;
    padding: 30px;
    position: relative;
    overflow: hidden;
    &:before, &:after{
        content: "";
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        position: absolute;
        @media (max-width: 768px){
            display: none;
        }
    }
    &:before{
        background-image: url(../../images/img-aulaagratis.png);
        background-position: left 0 bottom 0;
        
    }
    &:after{
        background-image: url(../../images/bg-waves.svg);
        background-position: right 0 top 0;
    }
    .third-section-free-acess-title-due-studio{
        color: #16012C;
        font-size: 1.5em;
        font-weight: 800;
    }
    .third-section-free-acess-text-due-studio{
        margin: 16px 0;
        font-size: 1em;
        line-height: 175%;
        color: #64607D;
    }
    .button-default-due-studio{
        text-transform: uppercase;
        z-index: 1;
    }
`

function FreeAcess(){
    return (
        <FreeAcessDue>
            <span className="third-section-free-acess-title-due-studio" style={manrope.style}>Primeira aula Grátis!</span>
            <p className="third-section-free-acess-text-due-studio" style={manrope.style}>Agende uma aula experimental grátis e conheça nosso espaço! <br/> Seja qual for seu objetivo, nós te ajudamos a conquistá-lo!</p>
            <ButtonDefault classComponent="button-default-due-studio" btnId="btn-agende-aula-experimental-2" titleButton="agende aula experimental grátis"/>
        </FreeAcessDue>
    )
}

export default FreeAcess;