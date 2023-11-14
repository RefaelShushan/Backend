
import express from 'express';
// import { requireAuth } from '../middleware/auth';
import {
    newItem ,getAllItems,getItemById,updateItem,deleteProuduct1,getItemBycategory,readTopProducts
} from '../products/controllers'

const router = express.Router();


router.get('/',getAllItems );


router.get('/spesific/:id', getItemById);


router.post('/', newItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteProuduct1);


router.get('/category/:id',getItemBycategory );

router.get('/popularity',readTopProducts);

export default router;
