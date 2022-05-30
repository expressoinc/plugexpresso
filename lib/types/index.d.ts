export interface PlugExpressoDto {
    sk: string;
}
export interface VerifyDto {
    email: string;
    token: string;
    exact_amount?: number;
    exact_currency?: string;
}
