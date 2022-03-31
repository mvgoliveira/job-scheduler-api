import { Router } from "express";
import { ScheduleController } from "./controllers/ScheduleController";

const routes = Router();
const scheduleController = new ScheduleController();

routes.post('/schedule', scheduleController.create)
routes.get('/schedule', scheduleController.findAll);
routes.put('/schedule', scheduleController.update);
routes.delete('/schedule', scheduleController.delete);

export {routes}