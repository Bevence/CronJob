import express from "express";
import { CronJob } from "cron";

import messenger from "./mail.js";

const app = express();

const job = new CronJob("*/1 * * * *", () => {
  /**
   * * * * * * *
   * | | | | | |
   * | | | | | day of week(0-6 -> Sun-Sat)
   * | | | | month(0-11 -> Jan-Dec)
   * | | | day of month(1-31)
   * | | hour(0-23)
   * | minute(0-59)
   * second(0-59)
   */
  console.log("Sending mail...");
  messenger();
});

app.listen(8080, () => {
  job.start();
  console.log("Server listening on port 8080");
});
