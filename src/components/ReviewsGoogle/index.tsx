import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import styled from 'styled-components';
import 'next/image';
import { Manrope } from '@next/font/google'

const manrope = Manrope({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
})


const ReviewsDue = styled.div`
    max-width: 1148px;
    margin: 30px auto;
    font-family: "Manrope", sans-serif;
    padding: 0 30px;

    .review-item {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 30px;
        width: 100%;
        @media (max-width: 989px){
            flex-direction: column;
            align-items: center;
        }
        .review-box-img{
            background-image: url(../../images/dots.svg);
            background-position: 100% 0;
            background-repeat: no-repeat;
            background-size: 100px;
            width: 250px;
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .review-img {
                border: 5px solid #fff;
                box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
                width: 150px;
                height: 150px;
                border-radius: 100%;
            }
            .review-author-name{
                margin-top: 20px;
                font-size: 19px;
                color: #000;
                font-weight: bold;
            }
        }

        .review-information {
            width: calc(100% - 50%);
            margin-left: 30px;
            @media (max-width: 989px){
                width: 100%;
                margin-left: 0;
            }
            .review-icon-aspas{
                width: 30px;
                height: 30px;
                img{
                    width: inherit;
                }
            }
            .review-stars {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 20px 0;
                img{
                    width: 30px;
                    height: 30px;
                }
            }

            .review-comment {
                color: #1B1C31;
                font-size: 22px;
                line-height: 150%;
                min-height: 250px;
                max-width: 504px;
                overflow: hidden;
                text-align: left;
            }
        }
    }

    .slick-arrow {
        z-index: 1;

        &:before {
            font-size: 50px;
            color: #FF5E2B;
            z-index: 1;
        }

        &.slick-next {
            right: -3px;
            width: 50px;
            height: 50px;
            @media (max-width: 989px){
                right: -16px;
                top: 140px;
            }
        }
        
        &.slick-prev {
            left: -16px;
            width: 50px;
            height: 50px;
            @media (max-width: 989px){
                top: 140px;
            }
        }
    }

    .slick-dots {
        bottom: 10px;

        li button:before {
            font-size: 10px;
            color: #999;
            opacity: 1;
        }

        li.slick-active button:before {
            color: #000;
        }
    }
    .loader {
        border: 8px solid #000;
        border-top: 8px solid #FF5E2B;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
        margin: 0 auto;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .loading-message{
        margin-top: 15px;
        font-size: 1em;
        font-weight: bold;
    }
`

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    arrows: true,
};

interface Review {
    author_name: string;
    profile_photo_url: string;
    rating: number;
    text: string;
};

const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<{ reviews: Review[] }>('/api/reviews');
                setReviews(response.data.reviews);
            } catch (error: any) {
                setError(error.response?.data.message || error.message);
            }
        };

        fetchData();
    }, []);


    return (
        <ReviewsDue style={manrope.style}>
            {reviews.length > 0 ? (
                <Slider {...settings}>
                    {reviews.filter(review => review.text.length <= 200).map((review, index) => (
                        <div key={index}>
                            <div className='review-item'>
                                <div className='review-box-img'>
                                    <img className='review-img' src={review.profile_photo_url} alt={review.author_name} />
                                    <span className='review-author-name'>{review.author_name}</span>
                                </div>
                                <div className='review-information'>
                                    <span className='review-icon-aspas'>
                                        <img src="/icon-aspas.svg" alt="Ícone Aspas" />
                                    </span>
                                    <div className='review-stars'>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <img src="/icon-star.svg" key={i} alt={i.toString()} />
                                        ))}
                                    </div>
                                    <p className='review-comment'>{review.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <>
                    <div className='loader'></div>
                    <p style={manrope.style} className='loading-message'>Carregando Reviews Aguarde...</p>
                </>
            )}
        </ReviewsDue>
    );

};

export default Reviews;
