import express, { Router, Request, Response } from 'express';
import * as middlewares from '../middlewares/casino.middlewares';
import * as controllers from "../controllers/casino.controllers";

const router: Router = express.Router();

// balance (Callback URL)
router.get("/honor-link/balance", middlewares.queryUserCheck, controllers.responseBalance);

// changeBalance (Callback URL)
router.get("/honor-link/changeBalance", middlewares.queryUserCheck, controllers.responseBalance)

export default router;