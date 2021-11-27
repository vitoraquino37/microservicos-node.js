import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction, Router } from "express";
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

//buscar todos os usuarios
usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

//buscar um usuario especifico
usersRoute.get('/users/:uuid', async (req: Request <{uuid: string}>, res: Response, next: NextFunction) => {
    try{
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send({ uuid });
    } catch (error){
        next(error);
    }
    
});

//criar um usuario
usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);
    res.status(StatusCodes.CREATED).send(newUser);
});

//alterar um determinado usuario
usersRoute.put('/users/:uuid', async (req: Request <{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    await userRepository.update(modifiedUser);

    res.status(StatusCodes.OK).send(modifiedUser);
});

//Deleta um usuario
usersRoute.delete('/users/:uuid', async (req: Request <{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;