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
exports.deleteProuduct = exports.updateItemOfService = exports.newItemOfService = exports.readTopProductsService = exports.getserviceByCategory = exports.getItemByIdService = exports.getAllItemsService = void 0;
// export {};
// const userDal = require("./userDal");
const productDal_1 = require("./productDal");
const getAllItemsService = () => __awaiter(void 0, void 0, void 0, function* () {
    // get all items
    try {
        const data = yield (0, productDal_1.readData)();
        console.log(data);
        return data;
    }
    catch (err) {
        console.error("at userService.js, line 14, func (getAllItems)");
    }
    return console.error();
});
exports.getAllItemsService = getAllItemsService;
const getItemByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data1 = yield (0, productDal_1.readDataById)(id);
        console.log(data1, "jgdua");
        return data1;
    }
    catch (err) {
        console.error("at userService.js, line 14, func (getAllItems)");
    }
    return console.error();
});
exports.getItemByIdService = getItemByIdService;
const getserviceByCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data1 = yield (0, productDal_1.readDataByCategory)(id);
        console.log(data1);
        return data1;
    }
    catch (err) {
        console.error("at userService.js, line 14, func (getAllItems)");
    }
    return console.error();
});
exports.getserviceByCategory = getserviceByCategory;
const readTopProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, productDal_1.readTopProductsDal)();
        console.log(data, "ggg");
        return data;
    }
    catch (err) {
        console.error("at userService.js, line 14, func (getAllItems)");
    }
    return console.error();
});
exports.readTopProductsService = readTopProductsService;
const newItemOfService = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const writeData1 = yield (0, productDal_1.writeData)(item);
    return productDal_1.writeData;
});
exports.newItemOfService = newItemOfService;
// mongo
const updateItemOfService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let numberid = Number(id);
    let result = yield (0, productDal_1.updateItem)(id);
    return result;
});
exports.updateItemOfService = updateItemOfService;
const deleteProuduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let numberid = Number(id);
    let result = yield (0, productDal_1.deleteItem)(numberid);
    return result;
});
exports.deleteProuduct = deleteProuduct;
