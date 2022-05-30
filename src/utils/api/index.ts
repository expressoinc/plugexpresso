import axiosOrders from "./axios-order";

const axios = axiosOrders();

export const postAction = async (url: string, payload = {}) => {
    try {
        const { data }: { data: any } = await axios.post(url, payload);
        return data?.data;
    } catch (err) {
        new Error('Request [POST]: failed to complete.');
        return { status: "error", message: (err as any).response.data };
    }
}

export const getAction = async (url: string) => {
    try {
        const { data }: { data: any } = await axios.get(url);
        return data?.data;
    } catch (err) {
        new Error('Request [GET]: failed to complete.');
        return { status: "error", message: (err as any).response.data };
    }
}