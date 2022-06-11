export interface PlugExpressoDto {
    sk: string;
}

export interface VerifyDto {
    email: string;
    token: string;
    exact_amount?: number;
    exact_currency?: string;
}

export interface ResponseData {
    status: 'success' | 'error';
    message?: string;
    data?: Array<{ [key: string]: string }> | { [key: string]: string };
}