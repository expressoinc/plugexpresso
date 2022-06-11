import { ResponseData, VerifyDto } from "./types";
declare class PlugExpresso {
    sk: string;
    constructor(sk: string);
    verify(args: VerifyDto): Promise<ResponseData>;
    getPayoutList(): Promise<ResponseData>;
}
export default PlugExpresso;
