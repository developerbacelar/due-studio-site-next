import React from "react";
import Button from "../../Button";
import styled from "styled-components";
import {Manrope, Roboto} from '@next/font/google'
import ReviewsGoogle from "@/components/ReviewsGoogle";

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

const DepoimentosSectionDue = styled.section`
    text-align: center;
    margin: 100px 0 150px;
    .fifth-section-title-due-studio{
        color: #FF5E2b;
        font-family: "Roboto", sans-serif;
        font-size: 0.875em;
        font-weight: bold;
        text-transform: uppercase;
    }
    .fifth-sub-title-section-due-studio{
        font-family: "Manrope", sans-serif;
        font-size: 2em;
        font-weight: 800;
        color: #000;
        margin: 30px 0;
    }
    .fifth-section-text-due-studio{
        font-family: "Manrope", sans-serif;
        font-size: 1.25em;
        color: #64607D;
        line-height: 150%;
        margin: 18px 0 26px;
    }
    .button-default-due-studio{
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 10px 30px;
        font-size: 1.25em;
        &::before{
            content: "";
            width: 35px;
            height: 35px;
            background-image: url("../../../images/icon-whatsappbranco.svg");
            background-repeat: no-repeat;
            margin-right: 25px;
        }
    }
`
function DepoimentosSection() {
    return (
        <DepoimentosSectionDue id="depoimentos" className="fifth-section-due-studio">
            <span className="fifth-section-title-due-studio" style={roboto.style}>Depoimentos</span>
            <h3 className="fifth-sub-title-section-due-studio" style={manrope.style}>O que nossos clientes estão dizendo</h3>
            <ReviewsGoogle/>
            <h4 className="fifth-sub-title-section-due-studio" style={manrope.style}>Ficou com alguma dúvida?</h4>
            <p className="fifth-section-text-due-studio" style={manrope.style}>
                Fale conosco no Whatsapp!
            </p>
            <Button classComponent="button-default-due-studio" titleButton="(41) 99125-6464"/>
        </DepoimentosSectionDue>
    )
}

export default DepoimentosSection;