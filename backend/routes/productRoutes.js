import express from 'express';


import { deleteProduct, getProductById,getProducts,updateProduct,createProduct ,createProductReview} from '../controller/productController.js';
import { protect,admin } from '../middleware/authMidleware.js';

const router=express.Router();

router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id/reviews').post(protect, createProductReview);
router.route('/:id').get(getProductById).put(protect,admin,updateProduct)
                    .delete(protect,admin,deleteProduct);


export default router;