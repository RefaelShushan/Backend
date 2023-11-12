import { newItem } from "./controllers";
import { getAllItems } from "./controllers";
import { getItemById } from "./controllers";
import { updateItem } from "./userDal";
import { deleteProuduct1 } from "./controllers";
const express = require("express");
const app = express();
const router = express.Router();
router.get("/all", getAllItems);
router.get("/:id", getItemById);
router.post("/new", newItem);
router.put("/update/:id",updateItem);
router.delete("/:id",deleteProuduct1);

module.exports = router;
