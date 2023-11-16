// import cors from "cors";
// import {client} from './data/mongo'
// const express = require("express");
// const app = express();

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
import { client } from "./data/mongo";
import express from "express";
import cors from "cors";
import productrouter from "./router/routerProducts";
import userRouter from "./router/userRouter";
import categoryRouter from "./router/categoryRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productrouter);
app.use("/api/users", userRouter);
app.use("/api/category", categoryRouter);

app.listen(3000, () => {
  console.log(`Server is up and running`);
  client.connect();
});
