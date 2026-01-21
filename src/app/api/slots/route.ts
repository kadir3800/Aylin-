import { generateDailySlots } from "@/lib/booking";

export async function GET() {
  const today = new Date();
  const slots = generateDailySlots(today);

  return new Response(JSON.stringify(slots), {
    headers: { "Content-Type": "application/json" },
  });
}
