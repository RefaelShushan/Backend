"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = require("./data/mongo");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routerProducts_1 = __importDefault(require("./router/routerProducts"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const categoryRouter_1 = __importDefault(require("./router/categoryRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/products", routerProducts_1.default);
app.use("/api/users", userRouter_1.default);
app.use("/api/category", categoryRouter_1.default);
app.listen(3000, () => {
    console.log(`Server is up and running`);
    mongo_1.client.connect();
});
