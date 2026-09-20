# Church SMS — Full Dashboard

Next.js + Supabase + Twilio church SMS platform.

## Includes
- Supabase admin login and protected dashboard
- Contact CRUD, search, CSV/XLS/XLSX import and SMS consent
- Groups and membership
- SMS composer, drafts, send-now and Twilio scheduling
- Sent/scheduled/history views
- Twilio delivery callbacks and STOP/START handling
- Dashboard statistics and church settings
- Responsive white / black / beige design

## Install
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Supabase
Create a project, run `supabase/schema.sql`, then create an admin user in Authentication > Users. Add the Supabase URL, publishable key and server-only service-role key to `.env.local`.

## Twilio
Set the Account SID, Auth Token and Messaging Service SID. Configure status callbacks to `/api/webhooks/twilio/status` and inbound messaging to `/api/webhooks/twilio/inbound` on your deployed domain.

## Import format
Use columns such as `name`, `phone`, `email`, `sms_consent`, `group`. Phone numbers should be E.164, e.g. `+14155550123`. Blank consent is treated as false.

## Compliance
Only message recipients who have appropriate permission. Honor STOP/unsubscribe requests and comply with applicable U.S. messaging requirements and Twilio policies.
