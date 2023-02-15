import React from "react";
import {Manrope} from '@next/font/google'
import styled from "styled-components";

const manrope = Manrope({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
})


const Copy = styled.p`
    margin-top: 50px;
    text-align: center;
    font-size: 1em;
    color: #FF5E2b;
    span{
        color: #000;
        .creator-link{
            color: #000;
            text-decoration: none;
        }

    }
`

function Copyright() {
    return (
        <Copy style={manrope.style}>
             <strong>&#169; Copyright Due Personal Studio 2023</strong> <br/> <span> <strong>Design por <a className="creator-link" href="https://www.linkedin.com/in/thaisfogaca/">Thaís Fogaça</a>.</strong></span> <br/><span> <strong>Desenvolvido por <a className="creator-link" href="https://api.whatsapp.com/send?phone=5541999193115&text=Ol%C3%A1,%20gostaria%20de%20saber%20o%20valor%20para%20fazer%20um%20site!">Marco A Bacelar</a>. Todos os direitos reservados.</strong></span>
             
        </Copy>
    )
}

export default Copyright;