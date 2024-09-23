import { Router } from "express";
import { ProductController } from "../controller/productController";
import { validateProduct, validateProductExists } from "../middleware/productMiddleware";
import { validarToken } from "../middleware/userMiddleware";

const router = Router();

router.get('/products', validarToken, ProductController.getAll);
router.get('/products/search', validarToken, ProductController.getByName);
router.post('/productsCreate', validarToken, ProductController.create);
router.delete('/products/:id', validarToken, validateProductExists, ProductController.delete)



export default router;