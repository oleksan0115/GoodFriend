import express, { Router, Request, Response } from 'express';
import * as middlewares from '../middlewares/casino.middlewares';
import * as controllers from "../controllers/casino.controllers";

const router: Router = express.Router();

router.post("/game-list")
router.post("/game-type")

export default router;