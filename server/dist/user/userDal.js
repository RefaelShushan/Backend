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
exports.loginDal = exports.registerdal = void 0;
const mongo_1 = require("../data/mongo");
const registerdal = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield mongo_1.client.connect();
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    const oneDoc = yield collection.insertOne(item);
    console.log(collection);
    return collection;
});
exports.registerdal = registerdal;
const loginDal = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    const findResult = yield collection.find({}).toArray();
    console.log(findResult);
    return findResult;
});
exports.loginDal = loginDal;
