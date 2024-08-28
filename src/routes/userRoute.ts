import { Router } from "express";
import { UserController } from "../controller/userController";
import { validateUserRegistration } from '../middleware/userMiddleware'

const router = Router();

router.post('/register',validateUserRegistration, UserController.register);
router.post('/login', UserController.login)

export default router;