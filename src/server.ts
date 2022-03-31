import {http} from './http';
import { scheduleJob } from "node-schedule";

const port = 3333;

http.listen(port, () => {
  console.log("🚀 App is running on port:", port);
});