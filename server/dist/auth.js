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
exports.loginController = exports.generateAuthToken = exports.registerController = void 0;
const auth_1 = require("../src/middleware/auth");
const userdal_1 = require("./users/userdal");
// User registration
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(req.body);
    const requestingUser = { email, password };
    if (!requestingUser) {
        return res.status(403).json({ error: "Permission denied" });
    }
    const existingUser = yield (0, userdal_1.getUserByEmail)(email);
    if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
    }
    const newUser = {
        _id: "",
        email,
        password,
    };
    (0, userdal_1.createUser)(newUser);
    res.status(201).json({ message: "User registered successfully" });
});
exports.registerController = registerController;
const generateAuthToken = () => {
    // Generate a random token (for demonstration purposes)
    const randomToken = Math.random().toString(36).substring(2, 15);
    // Save the generated token in the array
    auth_1.tokenArray.push(randomToken);
    return randomToken;
};
exports.generateAuthToken = generateAuthToken;
// User login
const loginController = (req, res, next) => {
    const { email, password } = req.body;
    // Find the user by email
    const user = (0, userdal_1.getUserByEmail)(email);
    // Check if the user exists and the password matches (in a real app, compare hashed passwords)
    //   || user?.password !== password
    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
    }
    // Generate an authentication token using the middleware function
    const authToken = (0, exports.generateAuthToken)();
    console.log(auth_1.tokenArray);
    const responseObj = { user, token: authToken };
    // In a real application, you would store the token securely and handle token expiration
    res.json({ message: "Login successful", responseObj });
};
exports.loginController = loginController;
