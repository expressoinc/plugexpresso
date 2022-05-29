import { VerifyDto } from "./interfaces";


class PlugExpresso {
    sk: string;
    constructor(sk: string) {
        this.sk = sk;
    }

    async verify (verifyDto: VerifyDto): Promise<void> {
        
    }
}
  
export default PlugExpresso;