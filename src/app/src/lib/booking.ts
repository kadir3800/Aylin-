function pad(n: number) { return String(n).padStart(2, "0"); }

const MIN_BOOKING_DATE = "2026-01-26"; // önümüzdeki hafta pazartesi başlangıç
const CLOSED_WEEKDAY = 0; // 0 = Pazar
const OPEN_HOUR = 8;      // 08:00
const LAST_START_HOUR = 19; // 19:00 başlar, 20:00 biter
export const CANCEL_FREE_HOURS = 24;     // 24 saat önceye kadar online iptal
export const RESCHEDULE_FREE_HOURS = 5;  // 5 saat önceye kadar online erteleme

export function isBeforeMinBookingDate(d: Date) {
  const [y,m,day] = MIN_BOOKING_DATE.split("-").map(Number);
  const min = new Date(y, m-1, day);
  const d0 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return d0.getTime() < min.getTime();
}

export function generateDailySlots(date: Date) {
  if (date.getDay() === CLOSED_WEEKDAY) return [];
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  const slots: { startISO: string; label: string }[] = [];
  for (let h = OPEN_HOUR; h <= LAST_START_HOUR; h++) {
    const startISO = `${y}-${pad(m)}-${pad(d)}T${pad(h)}:00:00`;
    slots.push({ startISO, label: `${pad(h)}:00` });
  }
  return slots;
}

export function hoursUntil(startISO: string) {
  return (new Date(startISO).getTime() - Date.now()) / (1000*60*60);
}
