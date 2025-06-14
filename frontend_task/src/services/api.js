import axios from "axios";

const API_BASE_PATH = "http://localhost/BE_PROJECT/backend_task/";//duong dan den thu muc chua cac file php

export const callApi = async (url, data = null, method = 'POST') => {

    const methodsWithData = ['POST', 'PUT'];
    const config = {
        method,
        url: `${API_BASE_PATH}${url}`,
        headers: { 'Content-Type': 'application/json' },
    };

    if (data && methodsWithData.includes(method.toUpperCase())) {
        config.data = data;
    }

    try {
        const response = await axios(config);
        return response;
    } catch (error) {
        throw error;
    }
};

