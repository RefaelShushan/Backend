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
exports.updateItem = exports.readTopCategory = exports.getItemById = exports.getAllItems = void 0;
// const userService = require("./userService");
const categoryService_1 = require("./categoryService");
const categoryService_2 = require("./categoryService");
const categoryService_3 = require("./categoryService");
const categoryService_4 = require("./categoryService");
const getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, categoryService_1.getAllItemsService)();
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
        const data = yield (0, categoryService_2.getItemByIdService)(req.params.id);
        if (data) {
            res.send(data);
        }
        else {
            res.json("cant find the id by id ");
            console.log(data, 'hfsfsf');
        }
    }
    catch (err) {
        console.error("at controllers.ts, line 35, func (getItemById)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.getItemById = getItemById;
const readTopCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, categoryService_4.readTopCategoryService)();
        console.log("elchi1");
        res.send(data);
    }
    catch (err) {
        console.log("elchi");
        console.error("at controllers.ts, line 6, func (getallItems)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.readTopCategory = readTopCategory;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, categoryService_3.updateItemOfService)(req.params.id);
        res.send(data);
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.updateItem = updateItem;
