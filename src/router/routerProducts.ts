
import express from 'express';
import {
    newItem ,getAllItems,getItemById,updateItem,deleteProuduct1,getItemBycategory,readTopProducts,updateAmount
} from '../products/controllers'

const router = express.Router();


router.get('/',getAllItems );


router.get('/spesific/:id', getItemById);


router.post('/', newItem);

router.put('/popularity/:id', updateItem);
// כמות
router.get('/contyty',updateAmount)

router.delete('/:id', deleteProuduct1);


router.get('/category/:id',getItemBycategory );

router.get('/popularity',readTopProducts);

export default router;
