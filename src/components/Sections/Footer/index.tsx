import React from "react";
import Image from 'next/image';
import styled from "styled-components";
import { Manrope, Roboto } from '@next/font/google'
import Copyright from "@/components/Copyright";
import { useHref } from "@/utils/util";

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

const FooterDue = styled.footer`
    background-color: #F6DFB7;
    padding: 40px 0 10px;
    display: block;
    position: relative;
    width: 100%;
    z-index: 10;
    &:after{
        content: "";
        position: absolute;
        top: -140px;
        background-image: url(../../images/bg-waves-footer.svg);
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        width: 100%;
        height: 30%;
        left: 0px;
        z-index: 1;
        @media (max-width: 768px){
            top: -80px;
            height: 10%;
        }
    }

    .footer-wrapper-due-studio {
        display: flex;
        align-items: center;
        margin: 0 auto 30px;
        max-width: 1148px;
        padding: 0 30px;
        @media (max-width: 989px){
            flex-direction: column;
        }

        .footer-left-due-studio {
            width: 50%;
            @media (max-width: 989px){
                width: 100%;
                margin-bottom: 30px;
            }

            .footer-section-title-due-studio {
                color: #FF5E2b;
                font-family: "Roboto", sans-serif;
                font-size: 0.875em;
                font-weight: bold;
                text-transform: uppercase;
            }

            .footer-title-due-studio {
                display: flex;
                align-items: center;
                font-family: "Manrope", sans-serif;
                font-size: 2em;
                font-weight: 800;
                color: #000;
                margin: 30px 0;
                @media (max-width: 989px){
                    font-size: 1.825em;
                }

                img {
                    margin-left: 20px;
                    width: 40px;
                }

            }

            .footer-adress-due-studio,
            .footer-open-and-close-due-studio {
                font-family: "Manrope", sans-serif;
                color: #1B1C31;
                font-size: 22px;
                line-height: 150%;
                max-height: 250px;
                max-width: 504px;
                overflow: hidden;
                text-align: left;
                margin-bottom: 20px;
            }

            .footer-social-list-due-studio {
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 250px;
                @media (max-width: 989px){
                    max-width: 100%;
                    margin-bottom: 30px;
                    justify-content: space-evenly;
                }

                .footer-social-item-due-studio {
                    a {
                        cursor: pointer;
                        display: block;
                        height: 46px;
                        width: 46px;
                        background-color: #fff;
                        border-radius: 50%;

                        img {
                            width: inherit;
                        }
                    }
                }
            }
        }

        .footer-google-maps-due-studio {
            width: 100%;
            .mapouter{
                position:relative;
                text-align:right;
                width:100%;
                height:363px;
            }
            .gmap_canvas {
                overflow:hidden;
                background:none;
                width:100%;
                height:363px;
            }
            .gmap_iframe {
                height:363px;
                width: 100%;
            }

        }
    }
`


function Footer() {

    const href = useHref()

    return (
        <FooterDue id="localizacao">
            <div className="footer-wrapper-due-studio">
                <div className="footer-left-due-studio">
                    <span className="footer-section-title-due-studio" style={roboto.style}>Localização</span>
                    <h5 className="footer-title-due-studio" style={manrope.style}>Venha nos visitar! <Image src="/icon-localizacao.svg" alt="Icone Local" width={40} height={54} /></h5>
                    <p className="footer-adress-due-studio" style={manrope.style}>R. Professor João Doetzer, 103 <br /> Jardim das Américas<br /> Curitiba-PR</p>
                    <p className="footer-open-and-close-due-studio" style={manrope.style}>De segunda à sexta-feira <br /> Das 7h às 21h30 </p>
                    <ul className="footer-social-list-due-studio">
                        <li className="footer-social-item-due-studio"><a href={href} id="btn-footer-whatsapp"><Image src="/icon-whatsapp.svg" alt="Ícone WhatsApp" width={46} height={46} /></a></li>
                        <li className="footer-social-item-due-studio"><a href="https://www.facebook.com/duepersonal" id="btn-footer-facebook"><Image src="/icon-facebook.svg" alt="Ícone Facebook" width={46} height={46} /></a></li>
                        <li className="footer-social-item-due-studio"><a href="https://www.instagram.com/due_personal/" id="btn-footer-instagram"><Image src="/icon-instagram.svg" alt="Ícone Instagram" width={46} height={46} /></a></li>
                        <li className="footer-social-item-due-studio"><a href="https://www.youtube.com/@due_personal" id="btn-footer-youtube"><Image src="/icon-youtube.svg" alt="Ícone YouTube" width={46} height={46} /></a></li>
                    </ul>
                </div>
                <div className="footer-google-maps-due-studio">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe className="gmap_iframe" width="{100}" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3602.349579133116!2d-49.2237!3d-25.46!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5f3c4093b05%3A0xc0320aca0bb4d471!2sDue%20Studio%20Personal!5e0!3m2!1spt-BR!2sbr!4v1741177371116!5m2!1spt-BR!2sbr" />
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </FooterDue>
    )
}

export default Footer;