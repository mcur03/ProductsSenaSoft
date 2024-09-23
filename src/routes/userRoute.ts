import { Router } from "express";
import { UserController } from "../controller/userController";
import { validateUserRegistration } from '../middleware/userMiddleware'

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login)

export default router;