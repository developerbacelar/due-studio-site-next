import React from "react";
import { useHref } from "@/utils/util";
import styled from "styled-components";
import { Manrope } from '@next/font/google'

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

const ButtonDefault = (props: any) => {

    const href = useHref()

    return (
        <DefaultButton style={manrope.style} className={props.classComponent} id={props.btnId} href={href}>
            {props.titleButton}
        </DefaultButton>
    )
}



export default ButtonDefault;
