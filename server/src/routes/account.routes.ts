import express, { Router, Request, Response } from 'express';
import * as middlewares from '../middlewares/account.middlewares';
import * as controllers from "../controllers/account.controllers";

const router: Router = express.Router();

// send auth email
router.post("/email", middlewares.emailCheck, controllers.sendEmail);

// sign-up
router.post("/sign-up", middlewares.emailCheck, middlewares.authCodeCheck, middlewares.promoCodeCheck, controllers.signUp);

// sign-in
router.post('/sign-in', controllers.signIn)
router.post('/sign-in/success', controllers.signInSuccess)
router.post('/sign-in/refresh', controllers.refresh)  

//sign-out
router.post('/sign-out', controllers.signOut)


// forgot-password
router.post("/forgot-password", (req: Request, res:Response) => {   
})

export default router;