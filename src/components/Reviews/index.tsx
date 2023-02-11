import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Review {
    author_name: string;
    rating: number;
    text: string;
}

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
        <>
            {error && <div>{error}</div>}
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <p>Author: {review.author_name}</p>
                            <p>Rating: {review.rating}</p>
                            <p>Text: {review.text}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Loading reviews...</div>
            )}
        </>
    );
};

export default Reviews;
