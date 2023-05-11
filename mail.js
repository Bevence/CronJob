import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "bikesh@mailinator.com",
  from: process.env.SENDGRID_SENDER_EMAIL,
  subject: "Test Cronjob",
  text: "This mail is received in interval of 1 minute using cronjob in Nodejs",
  html: "<strong>This mail is received in interval of 1 minute using cronjob in Nodejs</strong>",
};

const messenger = async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log("error", error);
  }
};

export default messenger;
