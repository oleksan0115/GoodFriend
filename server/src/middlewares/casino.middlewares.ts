import { Request, Response, NextFunction } from 'express';
import { getMyInfo } from '../services/casino.services';
import { MyInfo } from '../types/casino.types';
import * as dataAccess from '../utils/dataAccess.utils'
import * as response from "../config/response"

