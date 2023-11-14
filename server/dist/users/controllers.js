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
exports.login = void 0;
const userdal_1 = require("./userdal");
const userdal_2 = require("./userdal");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginEmail = yield (0, userdal_1.getUserByEmail)(req.params.email);
        const loginPassword = yield (0, userdal_2.getUserById)(req.params.password);
        if (loginEmail && loginPassword) {
            res.send(loginEmail);
        }
        else {
            res.json("cant find the email or the password");
        }
    }
    catch (err) {
        console.error("at users/controllers.ts, line 18, func (getItemById)");
        res.status(400).json({ message: "Internal Server Error" });
    }
});
exports.login = login;
