
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
