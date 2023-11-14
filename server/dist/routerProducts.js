"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { requireAuth } from '../middleware/auth';
const controllers_1 = require("./products/controllers");
const router = express_1.default.Router();
// Get all trips
router.get('/', controllers_1.getAllItems);
// Get a trip by ID
router.get('/:id', controllers_1.getItemById);
// Create a new trip (protected with requireAuth)
router.post('/', controllers_1.newItem);
// Update a trip by ID (protected with requireAuth)
router.put('/:id', controllers_1.updateItem);
// Delete a trip by ID (protected with requireAuth)
router.delete('/:id', controllers_1.deleteProuduct1);
exports.default = router;
