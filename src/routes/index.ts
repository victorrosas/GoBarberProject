import express from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = express.Router();
routes.use(express.json());

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
