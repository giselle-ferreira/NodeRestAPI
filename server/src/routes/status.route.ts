import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
const { Router } = require('express')

const statusRoute = Router()

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
})

module.exports = statusRoute;