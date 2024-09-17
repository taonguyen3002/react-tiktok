import * as request from '../untils/httpRequest';
import { token } from '../constant';
export const currentUser = async () => {
    try {
        const res = await request.get('auth/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
