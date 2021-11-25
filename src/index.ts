import express from 'express';
import statusRouter from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurações de rotas
app.use(statusRouter);
app.use(usersRoute);

//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000');
});

