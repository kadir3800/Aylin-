export default function Iletisim() {
  return (
    <main className="container">
      <div className="card">
        <h1 style={{marginTop:0}}>İletişim</h1>

        <p className="muted">
          Adres: Öz Serezli İş Hanı, İstanbul Bakırköy (9. kat, daire 16)
        </p>

        <p>
          WhatsApp: <strong>+90 531 222 55 33</strong>
        </p>

        <div className="row" style={{marginTop:12}}>
          <a className="btn btnPrimary" href="https://wa.me/905312225533" target="_blank" rel="noreferrer">
            WhatsApp ile yaz
          </a>
          <a
            className="btn"
            href="https://www.google.com/maps/search/?api=1&query=%C3%96z%20Serezli%20%C4%B0%C5%9F%20Han%C4%B1%20Bak%C4%B1rk%C3%B6y%20%C4%B0stanbul"
            target="_blank"
            rel="noreferrer"
          >
            Haritada aç
          </a>
        </div>
      </div>

      <div className="card" style={{marginTop:14, overflow:"hidden"}}>
        <iframe
          title="Harita"
          src="https://www.google.com/maps?q=%C3%96z%20Serezli%20%C4%B0%C5%9F%20Han%C4%B1%20Bak%C4%B1rk%C3%B6y%20%C4%B0stanbul&output=embed"
          style={{width:"100%", height:360, border:0, display:"block"}}
          loading="lazy"
        />
      </div>
    </main>
  );
}
