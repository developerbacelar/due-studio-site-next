import React from "react";
import Image from 'next/image'
import styled from "styled-components";

const ButtonWhatsAppDue = styled.a`
    animation: heartbeat 1.5s ease-in-out infinite both;
    bottom: 20px;
    position: fixed;
    right: 15px;
    width: 70px;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 180px;
    }
    @-webkit-keyframes heartbeat {
        from {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: center center;
                    transform-origin: center center;
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        10% {
            -webkit-transform: scale(0.91);
                    transform: scale(0.91);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        17% {
            -webkit-transform: scale(0.98);
                    transform: scale(0.98);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        33% {
            -webkit-transform: scale(0.87);
                    transform: scale(0.87);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        45% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        }
        @keyframes heartbeat {
        from {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: center center;
                    transform-origin: center center;
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        10% {
            -webkit-transform: scale(0.91);
                    transform: scale(0.91);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        17% {
            -webkit-transform: scale(0.98);
                    transform: scale(0.98);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        33% {
            -webkit-transform: scale(0.87);
                    transform: scale(0.87);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        45% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
    }
`

function ButtonWhatsApp() {
    return(
        <ButtonWhatsAppDue className="btn-whatsapp-flutuante" id="btn-flutuante-whatsapp" href="https://api.whatsapp.com/send?phone=5541991256464&amp;text=Olá,%20vim%20pelo%20seu%20site!%20Gostaria%20de%20informações%20sobre%20uma%20futura%20aula%20experimental." target="_blank" rel="noopener">
            <Image src="/icon-whatsapp-logo.svg" alt="Botão WhatsApp" width={150} height={100}/>
        </ButtonWhatsAppDue>
    )
}

export default ButtonWhatsApp;