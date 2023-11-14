"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { requireAuth } from '../middleware/auth';
const controllers_1 = require("../products/controllers");
const router = express_1.default.Router();
router.get('/', controllers_1.getAllItems);
router.get('/spesific/:id', controllers_1.getItemById);
router.post('/', controllers_1.newItem);
router.put('/:id', controllers_1.updateItem);
router.delete('/:id', controllers_1.deleteProuduct1);
router.get('/category/:id', controllers_1.getItemBycategory);
router.get('/popularity', controllers_1.readTopProducts);
exports.default = router;
