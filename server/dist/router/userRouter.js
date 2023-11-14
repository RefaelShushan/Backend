"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { createUser, getUserByEmail } from '../users/userdal';
// import { login } from '../users/controllers';
const auth_1 = require("../auth");
const router = express_1.default.Router();
// User registration route
router.post('/register', auth_1.registerController);
// User login route
router.post('/login', auth_1.loginController);
exports.default = router;
