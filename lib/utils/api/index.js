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
const axios_order_1 = __importDefault(require("./axios-order"));
const axios = axios_order_1.default();
exports.postAction = (url, payload = {}) => __awaiter(this, void 0, void 0, function* () {
    try {
        const result = yield axios.post(url, payload);
        console.log("data", result);
        return result.data;
    }
    catch (err) {
        new Error('Request [POST]: failed to complete.');
        return err.response.data;
    }
});
exports.getAction = (url) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { data } = yield axios.get(url);
        return data;
    }
    catch (err) {
        new Error('Request [GET]: failed to complete.');
        return err.response.data;
    }
});
//# sourceMappingURL=index.js.map