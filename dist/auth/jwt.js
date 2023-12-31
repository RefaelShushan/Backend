"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.verifyToken = exports.generateAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
// import { handleError } from "../../utils/handleErrors";
const KEY = config_1.default.get("JWT_KEY");
const generateAuthToken = (user) => {
    const { _id, isAdmin, email } = user;
    if (!KEY)
        throw new Error("no secret key provided!");
    const expiresIn = 60 * 60 * 24 * 7;
    const token = jsonwebtoken_1.default.sign({ _id, isAdmin, email }, KEY, { expiresIn });
    return token;
};
exports.generateAuthToken = generateAuthToken;
const verifyToken = (tokenFromClient) => {
    try {
        if (!KEY)
            throw new Error("no secret key provided!");
        const userPayload = jsonwebtoken_1.default.verify(tokenFromClient, KEY);
        return userPayload;
    }
    catch (_a) {
        return null;
    }
};
exports.verifyToken = verifyToken;
const auth = (req, res, next) => {
    try {
        const tokenFromClient = req.header("x-auth-token");
        if (!tokenFromClient)
            throw new Error("Authentication Error: Please Login");
        const userInfo = (0, exports.verifyToken)(tokenFromClient);
        if (!userInfo)
            throw new Error("Authentication Error: Unauthorize user");
        const reqUser = req;
        reqUser.user = userInfo;
        return next();
    }
    catch (error) {
        // if (error instanceof Error) return handleError(res, error, 401);
    }
};
exports.auth = auth;
