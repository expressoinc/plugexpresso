import { VerifyDto } from "./types";
declare class PlugExpresso {
    sk: string;
    constructor(sk: string);
    verify(args: VerifyDto): Promise<any>;
    getPayoutList(): Promise<void>;
}
export default PlugExpresso;
