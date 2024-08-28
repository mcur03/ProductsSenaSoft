import { Router } from "express";
import { ProductController } from "../controller/productController";
import { validateProduct, validateProductExists } from "../middleware/productMiddleware";

const router = Router();

router.get('/products', ProductController.getAll);
router.get('/products/search', ProductController.getByName);
router.post('/products', validateProduct, ProductController.create);
router.delete('/products/:id', validateProductExists, ProductController.delete)



export default router;