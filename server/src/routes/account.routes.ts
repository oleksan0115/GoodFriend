import express, { Router, Request, Response } from 'express';
import * as middlewares from '../middlewares/account.middlewares';



const router: Router = express.Router();

router.post("/sign-up", middlewares.emailCheck, );

router.post("/sign-in", (req: Request, res: Response) => {
});

router.post("/forgot-password", (req: Request, res:Response) => {   
})

export default router;