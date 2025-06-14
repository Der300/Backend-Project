import { callApi } from "./api";

const authService = async (url, data = null, method = 'POST') => {

    try {
        const res = await callApi(url, data, method);

        // call api that bai
        if (res.data.success === false) {
            return { source: 'API', error: true, message: res.data.message };
        }
        // call api thanh cong
        return { error: false, data: res.data.data };

    } catch (err) {
        // Bat loi server
        return { source: 'API-server', error: true, message: err.message };
    }
};
export default authService;


