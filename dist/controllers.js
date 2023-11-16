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
exports.deleteProuduct1 = exports.updateItem = exports.newItem = exports.getItemById = exports.getAllItems = void 0;
const userService = require("./userService");
const userService_1 = require("./userService");
const userService_2 = require("./userService");
const userService_3 = require("./userService");
const userService_4 = require("./userService");
const userService_5 = require("./userService");
const getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, userService_1.getAllItemsService)();
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
        const data = yield (0, userService_2.getItemByIdService)(req.params.id);
        if (data) {
            res.send(data);
        }
        else {
            res.json("cant find the id");
        }
    }
    catch (err) {
        console.error("at controllers.ts, line 35, func (getItemById)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.getItemById = getItemById;
const newItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, userService_3.newItemOfService)(req.body);
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
        const data = yield (0, userService_4.updateItemOfService)(req.params.id, req.body);
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
        const data = yield (0, userService_5.deleteProuduct)(req.params.id);
        res.send(data);
    }
    catch (err) {
        console.error("at controllers.ts, line 62, func (delelteitem)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.deleteProuduct1 = deleteProuduct1;
