// This is the file which will contain the "endpoints" of all of our server routes.
//  Let's go ahead and set up our imports and exports.

import express from 'express';
// When we initially created our routes, we required the following dependencies. Since we've migrated our routes to the controller, these specific dependencies are no longer necessary.
// import mongoose from 'mongoose';
// import Product from '../models/product.model.js';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;