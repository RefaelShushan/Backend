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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItemService = exports.getAllCartItemsService = exports.updateCartService = exports.getUserByEmailService = exports.loginService = exports.registerService = void 0;
const userDal_1 = require("./userDal");
const registerService = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, userDal_1.registerdal)(item);
    // console.log(result,"result")
    return result;
});
exports.registerService = registerService;
const loginService = () => __awaiter(void 0, void 0, void 0, function* () {
    // get all items
    try {
        const data = yield (0, userDal_1.loginDal)();
        console.log(data);
        return data;
    }
    catch (err) {
        console.error("at userService.js, line 14, func (getAllItems)");
    }
    return console.error();
});
exports.loginService = loginService;
const getUserByEmailService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data1 = yield (0, userDal_1.getUserByEmailDal)(id);
        return data1;
    }
    catch (err) {
        console.error("at userService.js, line 14, func (getAllItems)");
    }
    return console.error();
});
exports.getUserByEmailService = getUserByEmailService;
const updateCartService = (id, reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, userDal_1.updateCartDal)(id, reqBody);
    return result;
});
exports.updateCartService = updateCartService;
const getAllCartItemsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, userDal_1.getAllCartItems)(id);
    return result;
});
exports.getAllCartItemsService = getAllCartItemsService;
const deleteItemService = (id, reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, userDal_1.deleteItemDal)(id, reqBody);
    return result;
});
exports.deleteItemService = deleteItemService;
