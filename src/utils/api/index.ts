import { ResponseData } from "../../types";
import axiosOrders from "./axios-order";
import { AxiosError } from "axios";

const axios = axiosOrders();

export const postAction = async (url: string, payload = {}): Promise<ResponseData> => {
    try {
        const { data }: { data: { data: ResponseData } } = await axios.post(url, payload);
        return data?.data;
    } catch (err) {
        new Error('Request [POST]: failed to complete.');
        return { status: "error", message: (err as AxiosError).response && (err as AxiosError).response?.data ? (err as AxiosError).response?.data['message'] : "Request [POST]: failed to complete." };
    }
}

export const getAction = async (url: string): Promise<ResponseData> => {
    try {
        const { data }: { data: { data: ResponseData } } = await axios.get(url);
        return data?.data;
    } catch (err) {
        new Error('Request [GET]: failed to complete.');
        return { status: "error", message: (err as AxiosError).response && (err as AxiosError).response?.data ? (err as AxiosError).response?.data['message'] : "Request [GET]: failed to complete." };
    }
}