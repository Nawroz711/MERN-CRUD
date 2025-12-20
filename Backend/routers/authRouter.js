import { Router } from "express";
import { signUp, login, forgotPassword } from '../controllers/authController.js';
import { validateSignup, validateLogin, validateForgotPassword } from '../validations/authValidations.js';

const authRouter = Router();

authRouter.post('/signup', validateSignup, signUp);
authRouter.post('/login', validateLogin, login);
authRouter.post('/forgot-password', validateForgotPassword, forgotPassword);

export default authRouter;