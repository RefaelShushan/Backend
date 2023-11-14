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
exports.createUser = exports.getUserById = exports.getUserByEmail = void 0;
const mongo_1 = require("../data/mongo");
// Get a user by email
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = mongo_1.client.db("kodecode");
        const collection = db.collection("users");
        if (!collection)
            return null;
        const user = yield collection.findOne({ email });
        return user;
    });
}
exports.getUserByEmail = getUserByEmail;
// Get a user by ID
function getUserById(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = mongo_1.client.db("kodecode");
        const collection = db.collection("users");
        const user = yield collection.findOne({ password });
        return user;
    });
}
exports.getUserById = getUserById;
// Create a new user
function createUser(newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = mongo_1.client.db("kodecode");
        const collection = db.collection("users");
        yield collection.insertOne(newUser);
        return newUser;
    });
}
exports.createUser = createUser;
