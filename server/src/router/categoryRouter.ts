
import express from 'express';
// import { requireAuth } from '../middleware/auth';
import {
    getAllItems,getItemById,updateItem,
} from '../category/controllers'

const router = express.Router();

// Get all trips
router.get('/',getAllItems );
// Get a trip by ID
router.get('/:id', getItemById);

// Update a trip by ID (protected with requireAuth)
router.put('/:id', updateItem);




export default router;
