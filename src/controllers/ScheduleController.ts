import { Request, Response } from "express";
import { Job } from "node-schedule";
import { ScheduleService } from "../services/ScheduleService";

let job: Job;

export class ScheduleController {
  async create(req: Request, res: Response) {
    const { date } = req.body;
    const scheduleService = new ScheduleService();
    
    try {
      const response = await scheduleService.create(date);
      return res.json(response);
    } catch (error) {
      return res.status(401).json({message: error.message});
    }
  }

  async findAll(req: Request, res: Response) {
    const scheduleService = new ScheduleService();

    try {
      const schedulesJobs = await scheduleService.findAll();
      return res.json(schedulesJobs);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  async update(req: Request, res: Response) {
    const scheduleService = new ScheduleService();
    const {date} = req.body;

    try {
      const response = await scheduleService.update(date);
      return res.json(response);
    } catch (error) {
      return res.status(401).json({message: error.message});
    }
  }

  async delete(req: Request, res: Response) {
    const scheduleService = new ScheduleService();

    try {
      const response = await scheduleService.delete();
      return res.json(response);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }
}