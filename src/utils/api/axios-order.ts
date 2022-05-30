import axios from 'axios';
import { BASE_URL } from './constants';

const axiosOrders = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "content-type": "application/json",
    },
  });
  return instance;
}

export const setSk = async (sk: string) => {
  try {
    if (sk) axiosOrders().defaults.headers!.common['authorization'] = `Bearer ${sk}`;
  } catch {
    throw new Error('Error setting API key');
  }
}

export default axiosOrders;