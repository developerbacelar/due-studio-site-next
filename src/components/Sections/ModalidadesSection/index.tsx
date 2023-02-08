import React from "react";
import styled from "styled-components";
import CardsList from '../../CardList'
import FreeAcess from "../../FreeAcess";
import {Manrope, Roboto} from '@next/font/google'

const manrope = Manrope({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
})

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    style: ['normal'],
})

const ModalidadesSectionDue = styled.section`
    text-align: center;
    padding: 0 30px;
    .third-section-title-due-studio{
        color: #FF5E2b;
        font-family: "Roboto", sans-serif;
        font-size: 0.875em;
        font-weight: bold;
        text-transform: uppercase;
    }
    .third-sub-title-section-due-studio{
        font-family: "Manrope", sans-serif;
        font-size: 2em;
        font-weight: 800;
        color: #000;
        margin: 30px 0;
    }
    .third-section-text-due-studio{
        font-family: "Manrope", sans-serif;
        font-size: 1.25em;
        color: #64607D;
        line-height: 150%;
    }
`

function ModalidadesSection(){
    return(
        <ModalidadesSectionDue id="modalidades">
            <span className="third-section-title-due-studio" style={roboto.style}>Modalidades</span>
            <h3 className="third-sub-title-section-due-studio" style={manrope.style}>Cuide da sua saúde e do seu bem-estar</h3>
            <p className="third-section-text-due-studio" style={manrope.style}>No Studio Due atendemos no máximo 4 alunos por aula, dessa forma conseguimos
                <br/>
                proporcionar um atendimento com mais exclusividade e segurança garantindo uma
                <br/>
                maior eficácia nos treinos!
            </p>
            <CardsList/>
            <FreeAcess/>
        </ModalidadesSectionDue>
    )
}

export default ModalidadesSection;