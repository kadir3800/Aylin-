"use client";

import { useEffect, useState } from "react";
import { CANCEL_FREE_HOURS, RESCHEDULE_FREE_HOURS } from "@/lib/booking";

type Slot = { startISO: string; label: string; available: boolean };

export default function RandevuSayfasi() {
  const [date, setDate] = useState("2026-01-26");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selected, setSelected] = useState("");

  const [adSoyad, setAdSoyad] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");

  const [mesaj, setMesaj] = useState("");

  useEffect(() => {
    setMesaj("");
    fetch(`/api/slots?date=${encodeURIComponent(date)}`)
      .then(r => r.json())
      .then(data => {
        setSlots(data.slots || []);
        setSelected("");
        if (data.disabled) setMesaj("Bu tarihten önce randevu alınamaz.");
      })
      .catch(() => setMesaj("Slotlar yüklenemedi."));
  }, [date]);

  function onayla() {
    if (!selected) return setMesaj("Lütfen saat seç.");
    if (!adSoyad || !telefon || !email) return setMesaj("Lütfen bilgileri doldur.");
    setMesaj("✅ Randevu talebin alındı. (Demo) Ödeme adımı sonraki aşamada: iyzico");
  }

  return (
    <main className="container">
      <div className="card">
        <h1 style={{marginTop:0}}>Randevu Al</h1>
        <div className="muted">
          Pzt–Cmt 08:00–20:00 • Son seans 19:00 • Pazar kapalı<br/>
          İptal: {CANCEL_FREE_HOURS} saat öncesine kadar ücretsiz • Erteleme: {RESCHEDULE_FREE_HOURS} saat öncesine kadar online
        </div>

        <div style={{display:"grid", gap:10, marginTop:12}}>
          <label>
            <div style={{fontWeight:900, marginBottom:6}}>Tarih</div>
            <input className="btn" style={{width:"100%"}} type="date" value={date} min="2026-01-26"
              onChange={e=>setDate(e.target.value)} />
          </label>

          <div>
            <div style={{fontWeight:900, marginBottom:6}}>Saat</div>
            <div className="row">
              {slots.map(s => (
                <button
                  key={s.startISO}
                  className={"btn " + (selected===s.startISO ? "btnPrimary" : "")}
                  disabled={!s.available}
                  onClick={() => setSelected(s.startISO)}
                  style={{opacity: s.available ? 1 : 0.5}}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <input className="btn" style={{width:"100%"}} placeholder="Ad Soyad" value={adSoyad} onChange={e=>setAdSoyad(e.target.value)} />
          <input className="btn" style={{width:"100%"}} placeholder="Telefon" value={telefon} onChange={e=>setTelefon(e.target.value)} />
          <input className="btn" style={{width:"100%"}} placeholder="E-posta" value={email} onChange={e=>setEmail(e.target.value)} />

          {mesaj && <div className="muted" style={{color:"#fca5a5"}}>{mesaj}</div>}

          <button className="btn btnPrimary" onClick={onayla}>Ödemeye Geç (Demo)</button>

          <a className="btn" href="https://wa.me/905312225533" target="_blank" rel="noreferrer">
            WhatsApp ile yaz
          </a>

          <div className="muted">
            Not: 5 saatten az kaldıysa erteleme/iptal WhatsApp ile yapılır.
          </div>
        </div>
      </div>
    </main>
  );
            }
