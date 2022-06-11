"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_order_1 = __importDefault(require("./axios-order"));
const axios = axios_order_1.default();
exports.postAction = (url, payload = {}) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const { data } = yield axios.post(url, payload);
        return (_a = data) === null || _a === void 0 ? void 0 : _a.data;
    }
    catch (err) {
        new Error('Request [POST]: failed to complete.');
        return { status: "error", message: err.response && ((_b = err.response) === null || _b === void 0 ? void 0 : _b.data) ? (_c = err.response) === null || _c === void 0 ? void 0 : _c.data['message'] : "Request [POST]: failed to complete." };
    }
});
exports.getAction = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f;
    try {
        const { data } = yield axios.get(url);
        return (_d = data) === null || _d === void 0 ? void 0 : _d.data;
    }
    catch (err) {
        new Error('Request [GET]: failed to complete.');
        return { status: "error", message: err.response && ((_e = err.response) === null || _e === void 0 ? void 0 : _e.data) ? (_f = err.response) === null || _f === void 0 ? void 0 : _f.data['message'] : "Request [GET]: failed to complete." };
    }
});
//# sourceMappingURL=index.js.map