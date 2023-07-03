import express, { Router, Request, Response } from 'express';
import * as middlewares from '../middlewares/account.middlewares';
import * as controllers from "../controllers/account.controllers";

const router: Router = express.Router();


// sign-up
router.post("/sign-up", middlewares.emailCheck, middlewares.authCodeCheck, middlewares.promoCodeCheck, controllers.signUp);
router.post("/sign-up/email", middlewares.emailCheck, controllers.sendEmail);

// sign-in
router.post('/sign-in', controllers.signIn)
router.post('/sign-in/success', controllers.signInSuccess)
router.post('/sign-in/refresh', controllers.refresh)  

//sign-out
router.post('/sign-out', controllers.signOut)

// forgot-password
router.post("/forgot-password/email", controllers.sendEmail)
router.post("/forgot-password/change", middlewares.authCodeCheck, controllers.changePassword)

export default router;