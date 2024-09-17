import * as request from '../untils/httpRequest';

export const video = async ({ type, page }) => {
    try {
        const res = await request.get('videos', {
            params: {
                type,
                page,
            },
            method: 'get',
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
