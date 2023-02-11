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

    res.status(200).json({ reviews: response.data.result.reviews });
  } catch (error: any) {
    res.status(error.response.status).json({ message: error.response.statusText });
  }
}
