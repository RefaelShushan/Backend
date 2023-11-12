import cors from "cors";
const express = require("express");
const app = express();
const path = require("path");
const router = require("./router");
app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(router);

const PORT = 8200;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
