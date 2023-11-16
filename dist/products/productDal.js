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
exports.updateamountDal = exports.deleteItem = exports.updateItem = exports.readTopProductsDal = exports.writeData = exports.readDataByCategory = exports.readDataById = exports.readData = void 0;
const mongo_1 = require("../data/mongo");
const readData = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("products");
    const findResult = yield collection.find({}).toArray();
    console.log(findResult);
    return findResult;
});
exports.readData = readData;
const readDataById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("products");
    const findResult = yield collection.findOne({ id: Number(id) });
    console.log(findResult);
    return findResult;
});
exports.readDataById = readDataById;
const readDataByCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("products");
    // .toArray();
    const findResult = yield collection.find({ category: id }).toArray();
    console.log(findResult, "lll");
    return findResult;
});
exports.readDataByCategory = readDataByCategory;
const writeData = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield mongo_1.client.connect();
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("products");
    const oneDoc = yield collection.insertOne(item);
    console.log(collection);
    return collection;
});
exports.writeData = writeData;
const readTopProductsDal = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = mongo_1.client.db("kodecode");
        const collection = db.collection("products");
        const findResult = yield collection
            .find({})
            .sort({ popularity: -1 })
            .limit(5)
            .toArray();
        return findResult;
    }
    catch (error) {
        console.error("Error in readTopProducts:", error);
        return null;
    }
});
exports.readTopProductsDal = readTopProductsDal;
const updateItem = (id1) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("products");
    const { popularity } = yield (0, exports.readDataById)(id1);
    const updateResult = yield collection.updateOne({ id: Number(id1) }, { $set: { popularity: Number(popularity) + 1 } });
    return updateResult;
});
exports.updateItem = updateItem;
const deleteItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("products");
    const deleteResult = yield collection.deleteMany({ id: id });
    console.log(deleteResult);
    console.log(id);
    return deleteResult;
});
exports.deleteItem = deleteItem;
const updateamountDal = (id1, reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const jsonResult = reqBody.id;
    const collection = db.collection("products");
    const { amount } = yield (0, exports.readDataById)(id1);
    const updateResult = yield collection.updateOne({ id: Number(id1) }, { $set: { popularity: Number(amount) - Number(jsonResult) } });
    return updateResult;
});
exports.updateamountDal = updateamountDal;
