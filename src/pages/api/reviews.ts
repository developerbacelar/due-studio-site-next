import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  reviews?: {
    author_name: string,
    rating: number,
    text: string
  }[],
  message?: string
}

const translateText = async (text: string): Promise<string> => {
  const response = await axios.post(
    'https://translation.googleapis.com/language/translate/v2',
    {},
    {
      params: {
        q: text,
        target: 'pt',
        key: 'AIzaSyBRwipvrr7uwxfl4JQQL4xpfXIMYuw4GVk',
      },
    }
  );

  return response.data.data.translations[0].translatedText;
};

const translateReview = async (review: { text: string }): Promise<{ text: string }> => {
  const translatedText = await translateText(review.text);

  return {
    ...review,
    text: translatedText,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        place_id: 'ChIJBTsJxPPl3JQRcdS0C8oKMsA',
        fields: 'review',
        key: 'AIzaSyBRwipvrr7uwxfl4JQQL4xpfXIMYuw4GVk'
      },
    });

    const reviews = response.data.result.reviews;
    const translatedReviews = await Promise.all(reviews.map(translateReview));

    res.status(200).json({ reviews: translatedReviews });
  } catch (error: any) {
    res.status(error.response.status).json({ message: '' });
  }
}
