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
exports.deleteProuduct1 = exports.updateItem = exports.newItem = exports.readTopProducts = exports.getItemBycategory = exports.getItemById = exports.getAllItems = void 0;
const userService = require("./userService");
const productService_1 = require("./productService");
const productService_2 = require("./productService");
const productService_3 = require("./productService");
const productService_4 = require("./productService");
const productService_5 = require("./productService");
const productService_6 = require("./productService");
const productService_7 = require("./productService");
const getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, productService_1.getAllItemsService)();
        res.send(data);
    }
    catch (err) {
        console.error("at controllers.ts, line 6, func (getallItems)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.getAllItems = getAllItems;
const getItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, productService_2.getItemByIdService)(req.params.id);
        if (data) {
            res.send(data);
        }
        else {
            res.json("cant find the id all");
        }
    }
    catch (err) {
        console.error("at controllers.ts, line 35, func (getItemById)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.getItemById = getItemById;
const getItemBycategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, productService_6.getserviceByCategory)(req.params.id);
        if (data) {
            res.send(data);
        }
        else {
            res.json("cant find the id category");
        }
    }
    catch (err) {
        console.error("at controllers.ts, line 35, func (getItemById)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.getItemBycategory = getItemBycategory;
const readTopProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, productService_7.readTopProductsService)();
        console.log("elchi1");
        res.send(data);
    }
    catch (err) {
        console.log("elchi");
        console.error("at controllers.ts, line 6, func (getallItems)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.readTopProducts = readTopProducts;
const newItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, productService_3.newItemOfService)(req.body);
        res.send(data);
    }
    catch (err) {
        console.error("at controllers.ts, line 44, func (newItem)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.newItem = newItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, productService_4.updateItemOfService)(req.params.id);
        res.send(data);
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.updateItem = updateItem;
const deleteProuduct1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, productService_5.deleteProuduct)(req.params.id);
        res.send(data);
    }
    catch (err) {
        console.error("at controllers.ts, line 62, func (delelteitem)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.deleteProuduct1 = deleteProuduct1;
