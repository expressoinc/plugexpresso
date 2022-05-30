"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./constants");
const axiosOrders = () => {
    const instance = axios_1.default.create({
        baseURL: constants_1.BASE_URL,
        headers: {
            "content-type": "application/json",
        },
    });
    return instance;
};
exports.setSk = (sk) => __awaiter(this, void 0, void 0, function* () {
    try {
        if (sk)
            axiosOrders().defaults.headers.common['authorization'] = `Bearer ${sk}`;
    }
    catch (_a) {
        throw new Error('Error setting API key');
    }
});
exports.default = axiosOrders;
//# sourceMappingURL=axios-order.js.map