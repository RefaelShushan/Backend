"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../user/userController");
const router = express_1.default.Router();
// User registration route
router.post("/register", userController_1.register);
// User login route
router.post("/login", userController_1.login);
// cart
router.put("/update/:id", userController_1.updateCart);
router.get("/cartarr/:id", userController_1.getAllCartItems);
router.put("/delete/:id", userController_1.deleteItem);
exports.default = router;
