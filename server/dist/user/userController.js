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
exports.deleteItem = exports.getAllCartItems = exports.updateCart = exports.login = exports.register = void 0;
const uuid_1 = require("uuid");
const bcrypt_1 = require("../bcrypt/bcrypt");
const userService_1 = require("./userService");
const jwt_1 = require("../auth/jwt");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const userByMail = yield (0, userService_1.getUserByEmailService)(user.email);
        if (userByMail)
            throw new Error("llll");
        user._id = (0, uuid_1.v1)();
        user.email = user.email;
        user.name = user.name;
        user.cart = [];
        user.password = (0, bcrypt_1.generateUserPassword)(user.password);
        //   user.isAdmin = user.isAdmin || false;
        const data = yield (0, userService_1.registerService)(user);
        res.send(data);
        // res.send(true)
    }
    catch (err) {
        console.error("at controllers.ts, line 44, func (newItem)");
        res.status(400).json({ message: "This user is already registered" });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFromClient = req.body;
        const users = (yield (0, userService_1.loginService)());
        if (!users)
            throw new Error("Oops... Could not get the users from the Database");
        const userInDB = users.find((user) => userFromClient.email === user.email);
        if (!userInDB)
            throw new Error("The email or password is incorrect!");
        const userCopy = Object.assign({}, userInDB);
        if (!(0, bcrypt_1.comparePassword)(userFromClient.password, userCopy.password))
            throw new Error("The email or password is incorrect!");
        const token = (0, jwt_1.generateAuthToken)(userInDB);
        res.send(userFromClient.email);
        // res.send(token)
        return token;
    }
    catch (error) {
        res.json({ message: "The email or password is incorrect" });
    }
});
exports.login = login;
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, userService_1.updateCartService)(req.params.id, req.body);
        console.log(req.body);
        res.send(data);
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.updateCart = updateCart;
const getAllCartItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, userService_1.getAllCartItemsService)(req.params.id);
        res.send(data);
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.getAllCartItems = getAllCartItems;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, userService_1.deleteItemService)(req.params.id, req.body);
        console.log(req.body);
        res.send(data);
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.deleteItem = deleteItem;
