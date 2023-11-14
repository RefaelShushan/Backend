
import express from 'express';
// import { requireAuth } from '../middleware/auth';
import {
    newItem ,getAllItems,getItemById,updateItem,deleteProuduct1
} from '../products/controllers'

const router = express.Router();

// Get all trips
router.get('/',getAllItems );

// Get a trip by ID
router.get('/:id', getItemById);

// Create a new trip (protected with requireAuth)
router.post('/', newItem);

// Update a trip by ID (protected with requireAuth)
router.put('/:id', updateItem);

// Delete a trip by ID (protected with requireAuth)
router.delete('/:id', deleteProuduct1);

export default router;
