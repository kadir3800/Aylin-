import { generateDailySlots } from "../../lib/booking";

/**
 * Bu API rotası, o günkü müsait randevu saatlerini (slot) döner.
 * GET isteği yapıldığında çalışır.
 */
export async function GET() {
  try {
    // Mevcut tarih ve saat bilgisini alıyoruz
    const today = new Date();

    // Booking.ts dosyasındaki fonksiyonu kullanarak saat dilimlerini oluşturuyoruz
    const slots = generateDailySlots(today);

    // Başarılı sonucu JSON formatında ve 200 durum koduyla gönderiyoruz
    return new Response(JSON.stringify(slots), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Herhangi bir hata durumunda 500 hatası döndürüyoruz
    return new Response(JSON.stringify({ error: "Saat dilimleri oluşturulamadı" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
