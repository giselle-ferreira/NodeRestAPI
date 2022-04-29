import { Request, Response, NextFunction } from "express";
const Router = require('express')
const { StatusCodes } = require('http-status-codes')


const usersRoute = Router();

// get /users
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Giselle' }];
    res.status(StatusCodes.OK).send(users);
})

// get /users/:uuid
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    res.status(StatusCodes.OK).send({ uuid });
})

// post /users
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body
    res.status(StatusCodes.CREATED).send(newUser);
})

// put /users/:uuid
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    const modifiedUser = req.body

    modifiedUser.uuid = uuid
    res.status(StatusCodes.OK).send({ modifiedUser });
})

// delete /users/:uuid
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
})

module.exports = usersRoute;