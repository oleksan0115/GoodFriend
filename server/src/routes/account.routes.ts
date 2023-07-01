import express, { Router, Request, Response } from 'express';
import * as middlewares from '../middlewares/account.middlewares';
import * as controllers from "../controllers/account.controllers";

const router: Router = express.Router();

router.post("/email", middlewares.emailCheck, controllers.sendEmail);

router.post("/sign-up", middlewares.emailCheck, middlewares.authCodeCheck, middlewares.promoCodeCheck, controllers.signUp);

router.post("/sign-in", (req: Request, res: Response) => {
});

router.post("/forgot-password", (req: Request, res:Response) => {   
})

router.post("/test", (req: Request, res: Response) => {
    res.json({"hi":"hello"})
});

export default router;