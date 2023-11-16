"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { requireAuth } from '../middleware/auth';
const controllers_1 = require("../category/controllers");
const router = express_1.default.Router();
// Get all trips
router.get('/', controllers_1.getAllItems);
// Get a trip by ID
router.get('/spesific/:id', controllers_1.getItemById);
// Update a trip by ID (protected with requireAuth)
router.put('/:id', controllers_1.updateItem);
router.get('/popularity', controllers_1.readTopCategory);
exports.default = router;
