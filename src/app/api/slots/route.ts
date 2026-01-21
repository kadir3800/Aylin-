import { generateDailySlots } from "@/lib/Booking";

export async function GET() {
  const today = new Date();
  const slots = generateDailySlots(today);

  return new Response(JSON.stringify(slots), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
