import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction, Router } from "express";

const usersRoute = Router();

//buscar todos os usuarios
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Vitor' }];
    res.status(StatusCodes.OK).send(users);
});

//buscar um usuario especifico
usersRoute.get('/users/:uuid', (req: Request <{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

//criar um usuario
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

//alterar um determinado usuario
usersRoute.put('/users/:uuid', (req: Request <{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send(modifiedUser);
});

//Deleta um usuario
usersRoute.delete('/users/:uuid', (req: Request <{uuid: string}>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;