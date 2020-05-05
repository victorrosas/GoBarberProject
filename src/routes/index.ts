import express from 'express';
import appointmentsRouter from './appointments.routes';

const routes = express.Router();
routes.use(express.json());

routes.use('/appointments', appointmentsRouter);

export default routes;
