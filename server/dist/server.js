"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express = require("express");
const app = express();
const path = require("path");
const router = require("./router");
app.use((0, cors_1.default)());
app.use(express.json());
app.use(express.text());
app.use(router);
const PORT = 8200;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
