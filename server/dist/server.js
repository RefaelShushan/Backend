"use strict";
// import cors from "cors";
// import {client} from './data/mongo'
// const express = require("express");
// const app = express();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const path = require("path");
// const router = require("./routerProducts");
// app.use(cors());
// app.use(express.json());
// app.use(express.text());
// app.use(router);
// app.use('/api/products', );
// app.use('/api/auth', authRoutes);
// const PORT = 8200;
// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
//   client.connect();
// });
// src/server.ts
const mongo_1 = require("./data/mongo");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routerProducts_1 = __importDefault(require("./router/routerProducts"));
// import userRouter from './router/userRouter';
const categoryRouter_1 = __importDefault(require("./router/categoryRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Trip routes
app.use('/api/products', routerProducts_1.default);
// app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter_1.default);
app.listen(3000, () => {
    console.log(`Server is up and running`);
    mongo_1.client.connect();
});
