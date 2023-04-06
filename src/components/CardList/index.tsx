import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from 'next/image';
import {Manrope} from '@next/font/google'

const manrope = Manrope({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
})


const CardListDue = styled.div`
    max-width: 1148px;
    margin: 40px auto 32px;
    .third-section-cards-list-due-studio{
        align-items: stretch;
        display: flex;
        flex-wrap: wrap;
        font-family: "Manrope", sans-serif;
        justify-content: space-evenly;
        text-align: left;
        width: 100%;
        @media (max-width: 768px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .third-section-cards-item-due-studio{
            background-color: #fff;
            border-radius: 20px;
            padding: 40px;
            position: relative;
            width: 100%;
            max-width: 350px;
            margin-top: 20px;
            @media (max-width: 768px){
                text-align: center;
                order: 2;
            }
            img{
                margin-bottom: 15px;
            }
            h4{
                color: #16012C;
                font-weight: bold;
                font-size: 1.5em;
            }
            p{
                color: #64607D;
                font-size: 1em;
                margin: 25px 0;
                line-height: 175%;
            }
            a{
                position: absolute;
                bottom: 25px;
                color: #FF5E2B;
                font-size: 1em;
                font-weight: 600;
                left: 50%;
                transform: translateX(-50%);
                &:hover{
                    cursor: pointer;
                    text-decoration: underline;
                }
                b{
                    color: #FF5E2B;
                    width: 20px;
                    height: 20px;
                    margin-left: 10px;
                }
            }
            &.exclusive{
                border: 1px solid #FF5E2B;
                box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
                position: relative;
                @media (max-width: 768px){
                    margin: 30px 0;
                    order: 1;
                }
                span{
                    position: absolute;
                    background-color: #FF5E2B;
                    color: #fff;
                    font-size: 0.75em;
                    top: -10px;
                    padding: 5px 10px;
                    border-radius: 5px;
                    letter-spacing: 1.2px;
                    left: 50%;
                    transform: translateX(-50%);
                    white-space: nowrap;
                }
            }
        }
    }

`

const Card = (props:any) => (
    <li className={`third-section-cards-item-due-studio${props.isExclusive ? " exclusive" : ""}`}>
        {props.isExclusive && <span className="exclusive-label" style={manrope.style}>MÉTODO EXCLUSIVO</span>}
        <Image src={props.icon} alt={`Ícone ${props.title}`} width={48} height={64} title={`Ícone ${props.title}`} />
        <h4 style={manrope.style}>{props.title}</h4>
        <p style={manrope.style}>{props.description}</p>
        <a style={manrope.style} id={props.btnId} href="https://api.whatsapp.com/send?phone=5541991256464&text=Ol%C3%A1,%20vim%20pelo%20seu%20site!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20uma%20futura%20aula%20experimental.">{props.linkText}<b>&#8594;</b></a>
    </li>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    isExclusive: PropTypes.bool,
    btnId: PropTypes.string.isRequired
};

Card.defaultProps = {
    isExclusive: false
};

const CardsList = () => (
    <CardListDue>
        <ul className="third-section-cards-list-due-studio">
            <Card
                title="Pilates"
                description="O Pilates proporciona benefícios para todas as idades, pois com essa modalidade o aluno fica mais forte, flexível e consciente sobre seu corpo, com menos dores e outros benefícios!"
                icon="/icon-pilates.svg"
                linkText="Agende agora"
                btnId="btn-agende-agora-card-pilates"
            />
            <Card
                title="Método DUE"
                description="O Método Due é um treino completo que une as modalidades de Pilates e Treinamento funcional em uma mesma aula, otimizando seu tempo e focando no seu desenvolvimento!"
                icon="/icon-metododue.svg"
                linkText="Agende agora"
                isExclusive
                btnId="btn-agende-agora-card-metodo-due"
            />
            <Card
                title="Treinamento Funcional"
                description="O Treinamento Funcional é focado em aperfeiçoar a aptidão física e auxiliar no processo de emagrecimento. Aqui no Studio Due, o treino é constantemente modificado, para que sempre seja um novo desafio para os nossos alunos."
                icon="/icon-funcional.svg"
                linkText="Agende agora"
                btnId="btn-agende-agora-card-treinamento-funcional"
            />
        </ul>
    </CardListDue>
);

export default CardsList;