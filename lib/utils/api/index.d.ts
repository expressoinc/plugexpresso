import { ResponseData } from "../../types";
export declare const postAction: (url: string, payload?: {}) => Promise<ResponseData>;
export declare const getAction: (url: string) => Promise<ResponseData>;
