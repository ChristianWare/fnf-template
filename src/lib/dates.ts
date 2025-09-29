// src/lib/billing/dates.ts
import { fromZonedTime } from "date-fns-tz";

/**
 * Return UNIX seconds for 00:00:00 on the first day of next month
 * in the America/Phoenix time zone.
 */
export function firstOfNextMonthPhoenixUnix(): number {
  const tz = "America/Phoenix";
  const now = new Date();

  // Build a wall-clock date of "first of next month at 00:00:00"
  // (values here are just year/month/day/clock, no timezone)
  const wallTime = new Date(
    now.getFullYear(),
    now.getMonth() + 1, // next month (Date handles year rollover)
    1, // day 1
    0,
    0,
    0,
    0
  );

  // Convert that wall time *in Phoenix* to the actual UTC instant
  const utcInstant = fromZonedTime(wallTime, tz);

  return Math.floor(utcInstant.getTime() / 1000);
}
