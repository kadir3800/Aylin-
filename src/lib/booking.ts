export const OPEN_HOUR = 8;
export const LAST_START_HOUR = 19;
export const CANCEL_FREE_HOURS = 24;
export const RESCHEDULE_FREE_HOURS = 5;

export function generateDailySlots(date: Date) {
  const slots: { startISO: string; label: string; available: boolean }[] = [];
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");

  for (let h = OPEN_HOUR; h <= LAST_START_HOUR; h++) {
    const hh = String(h).padStart(2, "0");
    slots.push({
      startISO: `${y}-${m}-${d}T${hh}:00:00`,
      label: `${hh}:00`,
      available: true
    });
  }
  return slots;
      }
