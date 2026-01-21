import { NextResponse } from "next/server";
import { generateDailySlots, isBeforeMinBookingDate } from "@/lib/booking";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // YYYY-MM-DD
  if (!date) return NextResponse.json({ error: "date required" }, { status: 400 });

  const d = new Date(date + "T00:00:00");
  if (isBeforeMinBookingDate(d)) return NextResponse.json({ slots: [], disabled: true });

  const slots = generateDailySlots(d).map(s => ({ ...s, available: true }));
  return NextResponse.json({ slots });
}
