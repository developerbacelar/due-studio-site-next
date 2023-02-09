import React from "react";
import styled from "styled-components";
import Slider from 'react-slick';
import ButtonDefault from "../../Button";
import {Manrope} from '@next/font/google'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'

const manrope = Manrope({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
})

const FirstSectionDue = styled.section`
    background-image: url(../../../images/bg-waves.svg);
    background-position: right top;
    background-repeat: no-repeat;
    background-size: 57%;
    display: block;
    height: auto;
    margin: 80px 0 0;
    padding: 0 30px;
    width: 100%;
    .first-section-wrapper-due-studio {
        align-items: center;
        background-image: url(../../../images/dots.svg);
        background-position: 43% 100%;
        background-repeat: no-repeat;
        background-size: 100px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1148px;
        padding: 30px 0;
        text-align: left;
        width: 100%;
        @media (max-width: 1024px){
            flex-direction: column;
            background-position: 100% 5%;
        }

        .first-section-left-due-studio {
            display: flex;
            flex-direction: column;
            @media (max-width: 1024px){
                order: 2;
            }

            .first-section-title-due-studio {
                color: #000;
                font-size: 3em;
                font-weight: bold;
                line-height: 125%;
                max-width: 400px;
                @media (max-width: 1024px){
                    font-size: 2em;
                }
            }

            .first-section-subtitle-due-studio {
                color: #757095;
                font-size: 1.250em;
                margin: 15px 0 30px;
                line-height: 125%;
                max-width: 278px;
            }
            .first-section-button-due-studio{
                text-transform: uppercase;
                @media (max-width: 1024px){
                    width: 100%;
                    text-align: center;
                }
            }

        }
        .first-section-right-due-studio{
            max-width: 678px;
            @media (max-width: 1024px){
                max-width: 298px;
            }
            .first-section-carousel{
                max-width: 100%;
                margin: 30px auto;
                overflow: hidden;
                border-radius: 26px;
                img {
                    border-radius: 26px;
                    max-width: 100%;
                    max-height: 452px;
                    @media (max-width: 1024px){
                        max-height: 220px;
                    }
                }
    
                .slick-dots {
                    bottom: 10px;
                    li button:before {
                        font-size: 10px;
                        color: #fff;
                        opacity: 1;
                    }
                    li.slick-active button:before {
                        color: #FF5E2B;
                    }
                }
                
            }
        }
    }
    
`

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    arrows: false,
}


const FirstSection = () => {
    return (
        <FirstSectionDue>
            <div className="first-section-wrapper-due-studio">
                <div className="first-section-left-due-studio" style={manrope.style}>
                    <h1 className="first-section-title-due-studio">Studio de Pilates & Treinamento Funcional</h1>
                    <span className="first-section-subtitle-due-studio">Faça um treino completo e alcance seus objetivos!</span>
                    <ButtonDefault classComponent="first-section-button-due-studio" titleButton="agende aula experimental" />
                </div>
                <div className="first-section-right-due-studio">
                    <div className="first-section-carousel">
                        <Slider {...settings}>
                            <div className='slide-img'>
                                <Image src="/foto1.webp" alt="Fachada Due" object-fit="contain"  width={678} height={452} />
                            </div>
                            <div className='slide-img'>
                                <Image src="/foto2.webp" alt="Estrutura 1" object-fit="contain" width={678} height={452}/>
                            </div>
                            <div className='slide-img'>
                                <Image src="/foto3.webp" alt="Estrutura 2" object-fit="contain" width={678} height={452}/>
                            </div>
                            <div className='slide-img'>
                                <Image src="/foto4.webp" alt="Estrutura 3" object-fit="contain" width={678} height={452}/>
                            </div>
                            <div className='slide-img'>
                                <Image src="/foto5.webp" alt="Estrutura 4" object-fit="contain" width={678} height={452}/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </FirstSectionDue>
    )
}

export default FirstSection;