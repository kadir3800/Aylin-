import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(()=>null) as any;
  const msg = (body?.message || "").toString().toLowerCase();

  if (!msg) {
    return NextResponse.json({ error: "Mesaj boş olamaz." }, { status: 400 });
  }

  if (msg.includes("adres") || msg.includes("konum")) {
    return NextResponse.json({
      reply: "Adres: Öz Serezli İş Hanı, 9. kat, daire 16, Bakırköy/İstanbul. İletişim sayfasında harita var."
    });
  }

  if (msg.includes("saat") || msg.includes("açık")) {
    return NextResponse.json({
      reply: "Pzt–Cmt 08:00–20:00 (son seans 19:00). Pazar kapalı."
    });
  }

  if (msg.includes("fiyat")) {
    return NextResponse.json({
      reply: "Seans fiyatları 1000 TL’den başlar. Masaj türüne göre değişir."
    });
  }

  if (msg.includes("iptal")) {
    return NextResponse.json({
      reply: "İptal: 24 saat öncesine kadar online. Daha az kaldıysa WhatsApp’tan yazabilirsiniz."
    });
  }

  if (msg.includes("ertele")) {
    return NextResponse.json({
      reply: "Erteleme: 5 saat öncesine kadar online. Daha az kaldıysa WhatsApp’tan yazabilirsiniz."
    });
  }

  return NextResponse.json({
    reply: "Merhaba! Randevu, fiyat, adres, saatler, iptal/erteleme hakkında soru sorabilirsiniz. WhatsApp: +90 531 222 55 33"
  });
}
