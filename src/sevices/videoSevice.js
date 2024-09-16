import * as request from '../untils/httpRequest';

export const video = async ({ type, page }) => {
    try {
        const res = request.get('videos', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
