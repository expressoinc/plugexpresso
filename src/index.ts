import { setSk } from "./utils/api/axios-order";
import { VerifyDto } from "./types";
import * as Expresso from "./utils/api";
import * as api from "./utils/api/constants";

class PlugExpresso {
    sk: string;
    constructor(sk: string) {
        this.sk = sk;
    }

    async verify (args: VerifyDto): Promise<any> {
        await setSk(this.sk);
        return await Expresso.postAction(api.BASE_URL_VERIFY, args);
    }

    async getPayoutList (): Promise<void> {
        await setSk(this.sk);
        return await Expresso.getAction(api.BASE_URL_TRANSACTION_LIST);
    }
}
  
export default PlugExpresso;