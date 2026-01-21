import { generateDailySlots } from "../../../lib/booking";

export async function GET() {
  try {
    const today = new Date();
    const slots = generateDailySlots(today);

    return new Response(JSON.stringify(slots), {
      status: 200,
      headers: { 
        "Content-Type": "application/json" 
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Hata oluştu" }), {
      status: 500,
      headers: { 
        "Content-Type": "application/json" 
      },
    });
  }
}
