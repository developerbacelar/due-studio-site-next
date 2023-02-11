import axios from 'axios';

module.exports.handler = async (event: any, context: any) => {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
            params: {
                place_id: 'ChIJBTsJxPPl3JQRcdS0C8oKMsA',
                fields: 'review',
                key: 'AIzaSyBRwipvrr7uwxfl4JQQL4xpfXIMYuw4GVk',
                language: 'pr-BR'
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error: any) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify({ message: error.response.statusText }),
        };
    }
};
