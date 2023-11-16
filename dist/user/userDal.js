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
exports.deleteItemDal = exports.getAllCartItems = exports.getCartItemById = exports.updateCartDal = exports.readDataById = exports.getUserByEmailDal = exports.loginDal = exports.registerdal = void 0;
const mongo_1 = require("../data/mongo");
const registerdal = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield mongo_1.client.connect();
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    const oneDoc = yield collection.insertOne(item);
    //   console.log(collection);
    console.log(oneDoc);
    return oneDoc;
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
const getUserByEmailDal = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    // .toArray();
    const findResult = yield collection.findOne({ email: id });
    return findResult;
});
exports.getUserByEmailDal = getUserByEmailDal;
const readDataById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("products");
    const findResult = yield collection.findOne({ id: Number(id) });
    console.log(findResult);
    return findResult;
});
exports.readDataById = readDataById;
// export const updateCartDal = async (id1: string,reqBody:any): Promise<any> => {
//   const db = client.db("kodecode");
//   const reqBodyString=reqBody.id
//   const collection = db.collection("users");
//   const product = await readDataById(reqBodyString);
//   const updateResult = await collection.updateOne(
//     { email: id1 },
//     { $push: { cart:product }}
//   )
//   return updateResult;
// };
const updateCartDal = (id1, reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const reqBodyString = reqBody.id;
    const collection = db.collection("users");
    const product = yield (0, exports.readDataById)(reqBodyString);
    const user = yield collection.findOne({ email: id1 });
    const isProductInCart = user.cart.some((cartProduct) => cartProduct.id === product.id);
    if (!isProductInCart) {
        const updateResult = yield collection.updateOne({ email: id1 }, { $push: { cart: product } });
        return updateResult;
    }
    else {
        return { message: "Product is already in the cart" };
    }
});
exports.updateCartDal = updateCartDal;
const getCartItemById = (userId, itemId) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    const user = yield collection.findOne({ email: userId }, { projection: { cart: { $elemMatch: { id: itemId } } } });
    return user === null || user === void 0 ? void 0 : user.cart[0];
});
exports.getCartItemById = getCartItemById;
const getAllCartItems = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    const user = yield collection.findOne({ email: userId }, { projection: { _id: 0, cart: 1 } });
    return (user === null || user === void 0 ? void 0 : user.cart) || [];
});
exports.getAllCartItems = getAllCartItems;
const deleteItemDal = (id1, reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongo_1.client.db("kodecode");
    const collection = db.collection("users");
    const user = yield collection.findOne({ email: id1 });
    const reqBodyString = reqBody.id;
    let arrayOfCart = [];
    arrayOfCart = user.cart;
    const filteredArray = arrayOfCart.filter((obj) => obj.id !== reqBodyString);
    const updateResult = yield collection.updateOne({ email: id1 }, 
    // { $set: { cart:[filteredArray] }}
    { $pull: { cart: { id: Number(reqBodyString) } } });
    return updateResult;
});
exports.deleteItemDal = deleteItemDal;
