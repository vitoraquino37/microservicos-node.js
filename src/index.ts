import express, { application } from 'express';
import jwtAuthenticaticationMiddleware from './middlewares/jwt-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRouter from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurações de rotas
app.use(statusRouter);
app.use(authorizationRoute);
app.use(jwtAuthenticaticationMiddleware);
app.use(usersRoute);


//configuração dos handlers de erro
app.use(errorHandler);

//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000');
});

