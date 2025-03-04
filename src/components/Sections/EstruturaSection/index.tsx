import React from "react";
import Slider from 'react-slick';
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import {Manrope, Roboto} from '@next/font/google'

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

const EstruturaSectionDue = styled.section`
        text-align: center;
        margin: 100px auto 0;
    .fourth-section-wrapper-due-studio{
        max-width: 1148px;
        padding: 0 30px;
        margin: 0 auto;
        .fourth-section-title-due-studio{
            color: #FF5E2b;
            font-family: "Roboto", sans-serif;
            font-size: 0.875em;
            font-weight: bold;
            text-transform: uppercase;
        }
        .fourth-sub-title-section-due-studio{
            font-family: "Manrope", sans-serif;
            font-size: 2em;
            font-weight: 800;
            color: #000;
            margin: 30px 0;
        }
        .fourth-section-text-due-studio{
            font-family: "Manrope", sans-serif;
            font-size: 1.25em;
            color: #64607D;
            line-height: 150%;
        }
        .first-section-right-due-studio{
            margin: 0 auto;
            @media (max-width: 768px){
                max-width: 360px;
            }
            .first-section-carousel{
                margin: 30px auto;
                border-radius: 26px;
                .slide-img{
                    border-radius: 26px;
                    height: 280px;
                    overflow: hidden;
                    width: 376px;
                    img {
                        width: 100%;
                        height: inherit;
                        border-radius: 26px;
                    }
                }
    
                .slick-slide{
                    div{
                        display: flex;
                        width: inherit;
                        height: 280px;
                        overflow: hidden;
                        border-radius: 26px;
                        margin: 0 8px;
                        @media (max-width: 768px){
                            margin: 0;
                        }
                    }
                }
                .slick-arrow{
                    z-index: 2;
                    width: 50px;
                    height: 50px;
                    &:before{
                        font-size: 50px;
                        color: #FF5E2B;
                    }
                    &.slick-next{
                        right: -32px;
                    }
                    &.slick-prev{
                        left: -16px;
                        @media (max-width: 768px){
                            left: -32px;
                        }
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: true
            }
        },
        {
            breakpoint: 989,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                arrows: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                arrows: true
            }
        }
    ]
}

function EstruturaSection() {


    return (
        <EstruturaSectionDue id="estrutura">
            <div className="fourth-section-wrapper-due-studio">
                <span className="fourth-section-title-due-studio" style={roboto.style}>Estrutura</span>
                <h3 className="fourth-sub-title-section-due-studio" style={manrope.style}>Nosso Studio</h3>
                <p className="fourth-section-text-due-studio" style={manrope.style}>
                    O Método Due une os principais princípios e exercícios do Pilates de Aparelhos e 
                    <br />
                    do Treinamento Funcional para otimizar seus resultados!
                </p>
                <div className="first-section-right-due-studio">
                    <div className="first-section-carousel">
                        <Slider {...settings}>
                            <div className='slide-img'>
                                <Image src="/img-studio1.webp" alt="Fachada Due" width={300} height={280}/>
                            </div>
                            <div className='slide-img'>
                                <Image src="/img-studio2.webp" alt="Estrutura 1" width={376} height={280}/>
                            </div>
                            <div className='slide-img'>
                                <Image src="/img-studio3.webp" alt="Estrutura 2" width={376} height={280}/>
                            </div>
                            <div className='slide-img'>
                                <Image src="/img-studio4.webp" alt="Estrutura 3" width={376} height={280}/>
                            </div>
                            <div className='slide-img'>
                                <Image src="/img-studio5.webp" alt="Estrutura 4" width={376} height={280}/>
                            </div>
                            <div className='slide-img'>
                                <Image src="/img-studio6.webp" alt="Estrutura 5" width={376} height={280}/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </EstruturaSectionDue>
    )
}

export default EstruturaSection;