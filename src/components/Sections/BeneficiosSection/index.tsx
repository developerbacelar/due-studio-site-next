import React from "react";
import 'next/image'
import styled from "styled-components";
import {Manrope} from '@next/font/google'

const manrope = Manrope({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
})


const BeneficiosSectionDue = styled.section`
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    padding: 52px 30px;
    justify-content: space-between;
    margin: 30px auto;
    width: 100%;
    max-width: 1148px;
    @media (max-width: 768px){
        flex-direction: column;
        width: 85%;
    }
    .second-section-title-due-studio{
        font-size: 2em;
        color: #FF5E2B;
        font-family: "Manrope", sans-serif;
        max-width: 234px;
        line-height: 150%;
        font-weight: 800;
        @media (max-width: 768px){
            text-align: center;
            line-height: 100%;
        }

    }
    .second-section-list-items-due-studio{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: calc(100% - 286px);
        @media (max-width: 1024px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .second-section-item-due-studio{
            align-items: flex-start;
            display: flex;
            font-family: "Manrope", sans-serif;
            @media (max-width: 1024px){
                margin-top: 30px;
            }
            .second-section-icon-due-studio{
                background-color: #FFEFD0;
                border-radius: 5px;
                padding: 20px;
                margin-right: 18px;
                img{
                    width: 30px;
                    height: 30px;
                }
            }
            p{  
                display: block;
                font-size: 1.25em;
                color: #64607D;
                line-height: 125%;
                max-width: 147px;
                font-weight: bold;
            }
            .second-section-due-studio-first-text{
                display: flex;
                flex-direction: column;
                span{
                    font-size: 0.875em;
                    color: #64607D;
                    margin-top: 15px;
                }
            }
        }
    }
`

function BeneficiosSection(){
    return(
        <BeneficiosSectionDue>
            <h2 className="second-section-title-due-studio" style={manrope.style}>Benefícios de treinar na Due</h2>
            <ul className="second-section-list-items-due-studio" style={manrope.style}>
                <li className="second-section-item-due-studio">
                    <div className="second-section-icon-due-studio">
                        <img src="/icon-star.svg" alt="Ícone Star" title="Ícone Star" width="30" height="30"/>
                    </div>
                    <div className="second-section-due-studio-first-text">
                        <p>Atendimento personalizado</p>
                        <span>Até 5 alunos por aula</span>
                    </div>
                </li>
                <li className="second-section-item-due-studio">
                    <div className="second-section-icon-due-studio">
                        <img src="/icon-medal.svg" alt="Ícone Medalha" title="Ícone Medalha" width="30" height="30"/>
                    </div>
                    <p>2 Tipos de treino em uma sessão</p>
                </li>
                <li className="second-section-item-due-studio">
                    <div className="second-section-icon-due-studio">
                        <img src="/icon-secure.svg" alt="Ícone Segurança" title="Ícone Segurança" width="30" height="30"/>
                    </div>
                    <p>Espaço amplo, arejado e higienizado</p>
                </li>
            </ul>
        </BeneficiosSectionDue>
    )
}

export default BeneficiosSection;