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
exports.deleteItem = exports.updateItem = exports.writeData = exports.readData = void 0;
// const client = new MongoClient('mongodb+srv://yehuda9955:F0jiS7OCoKEb5kJM@cluster0.ijcfz0y.mongodb.net/test?retryWrites=true&w=majority');
const mongo_1 = require("../data/mongo");
// dataInterFace[]
// mongo   
const readData = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    const findResult = yield collection.find({}).toArray();
    console.log(findResult);
    return findResult;
});
exports.readData = readData;
const writeData = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield mongo_1.client.connect();
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    const oneDoc = yield collection.insertOne(item);
    console.log(collection);
    return collection;
});
exports.writeData = writeData;
const updateItem = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    console.log(id);
    const updateResult = yield collection.updateOne({ id: id }, { $set: { id: id,
            title: body.title,
            price: body.price,
            description: body.description,
            image: body.image,
            rating: body.rating
        } });
    return updateResult;
});
exports.updateItem = updateItem;
const deleteItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    const deleteResult = yield collection.deleteMany({ id: id });
    console.log(deleteResult);
    console.log(id);
    return deleteResult;
});
exports.deleteItem = deleteItem;
