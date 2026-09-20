import twilio from "twilio";
export function twilioClient(){return twilio(process.env.TWILIO_ACCOUNT_SID!,process.env.TWILIO_AUTH_TOKEN!)}
