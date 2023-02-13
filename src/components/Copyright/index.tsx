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
             <strong>Due Personal Studio &#169; 2023.</strong> <br/> <span> <strong>Desenvolvido por <a className="creator-link" href="https://github.com/developerbacelar">Marco A Bacelar</a>.</strong></span> 
             
        </Copy>
    )
}

export default Copyright;