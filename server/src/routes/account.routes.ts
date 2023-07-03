import express, { Router, Request, Response } from 'express';
import * as middlewares from '../middlewares/account.middlewares';
import * as controllers from "../controllers/account.controllers";

const router: Router = express.Router();

// sign-up
router.post("/sign-up", middlewares.emailCheck, middlewares.authCodeCheck, middlewares.promoCodeCheck, controllers.signUp);
router.post("/email", middlewares.emailCheck, controllers.sendEmail);

// sign-in
router.post('/signin', controllers.signIn)
router.post('/accesstoken', controllers.accessToken)
router.post('/refreshtoken', controllers.refreshToken)
router.post('/signin/success', controllers.signInSuccess)
router.post('/signout', controllers.signout)


// forgot-password
router.post("/forgot-password", (req: Request, res:Response) => {   
})

export default router;