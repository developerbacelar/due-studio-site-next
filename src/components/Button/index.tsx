import React from "react";
import styled from "styled-components";
import {Manrope} from '@next/font/google'

const manrope = Manrope({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
})

const DefaultButton = styled.a`

    background-color: #ED7841;
    border-radius: 26px;
    color: #fff;
    cursor: pointer;
    font-family: "Manrope", sans-serif;
    font-size: 0.875em;
    font-weight: bold;
    padding: 15px 20px;
    transition: background-color 0.5s ease;
    width: fit-content;
    white-space: nowrap;
    &:hover{
        background-color: #fb580c;
    }
    @media (max-width: 768px){
        order: 3;
    }

` 

const ButtonDefault = (props : any) => (
    <DefaultButton style={manrope.style} className={props.classComponent} href="https://api.whatsapp.com/send?phone=5541991256464&text=Ol%C3%A1,%20vim%20pelo%20seu%20site!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20uma%20futura%20aula%20experimental.">
        {props.titleButton}
    </DefaultButton>
)

export default ButtonDefault;