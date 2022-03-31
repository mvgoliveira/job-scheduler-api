import { scheduledJobs, scheduleJob } from "node-schedule";

export class ScheduleService {
  async create(date: Date) {
    const job = scheduledJobs["uniqueScheduleName"];

    if (job) {
      throw new Error("Schedule job already existis!");
    }

    const dateFormatted = new Date(date);

    if (!(dateFormatted instanceof Date)) {
      throw new Error("date bad formatted");
    }

    let currentDate = new Date();

    if (currentDate > dateFormatted) {
      throw new Error("schedule date must be greater than the current date!");
    }
  
    scheduleJob("uniqueScheduleName", date, () => {
      console.log("Job run on " + new Date(Date.now()).toTimeString());
    });

    return { message: "Created Job!" };
  }

  async findAll() {
    try {
      return scheduledJobs;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(date: Date) {
    try {
      const job = scheduledJobs["uniqueScheduleName"];

      if (job) {
        job.cancel();
      } else {
        throw new Error("Schedule job does not exists");
      }

      await this.create(date);

      return { message: "Updated Job!" }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete() {
    try {
      const job = scheduledJobs["uniqueScheduleName"];
      
      if (job) {
        job.cancel();
      } else {
        throw new Error("⛔ Schedule does not exists!");
      }
      
      return { message: "✅ Schedule removed!" };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}