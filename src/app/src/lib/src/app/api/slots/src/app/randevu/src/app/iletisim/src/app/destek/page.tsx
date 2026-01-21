"use client";

import { useState } from "react";

export default function Destek() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function gonder() {
    setLoading(true);
    setReply("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
      });
      const data = await res.json();
      setReply(data.reply || data.error || "Cevap yok");
    } catch {
      setReply("Bağlantı hatası.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <div className="card">
        <h1 style={{marginTop:0}}>Destek Chatbot</h1>
        <p className="muted">
          Fiyat, adres, saatler, iptal/erteleme kuralları hakkında sorabilirsin.
        </p>

        <textarea
          className="btn"
          style={{width:"100%", minHeight:120, textAlign:"left"}}
          placeholder="Mesajını yaz..."
          value={msg}
          onChange={e=>setMsg(e.target.value)}
        />

        <div className="row" style={{marginTop:10}}>
          <button className="btn btnPrimary" onClick={gonder} disabled={loading}>
            {loading ? "Gönderiliyor..." : "Gönder"}
          </button>
          <a className="btn" href="https://wa.me/905312225533" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        {reply && (
          <div className="card" style={{marginTop:12, padding:12}}>
            <div style={{fontWeight:900}}>Cevap</div>
            <div className="muted" style={{marginTop:8, whiteSpace:"pre-wrap"}}>{reply}</div>
          </div>
        )}
      </div>
    </main>
  );
}
