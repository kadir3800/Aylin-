import "./globals.css";

export const metadata = {
  title: "Aylin İlikli | Masaj & Biyoenerji",
  description: "Bakırköy masaj ve biyoenerji randevu sistemi"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <header style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="container row" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <a href="/" style={{ fontWeight: 900 }}>Aylin İlikli</a>
            <div className="row">
              <a className="btn" href="/randevu">Randevu</a>
              <a className="btn" href="/magaza">Mağaza</a>
              <a className="btn" href="/iletisim">İletişim</a>
              <a className="btn" href="/destek">Chatbot</a>
            </div>
          </div>
        </header>

        {children}

        <footer className="container" style={{ opacity: 0.8, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
          <div className="muted">Pzt–Cmt 08:00–20:00 • Pazar kapalı • WhatsApp: +90 531 222 55 33</div>
        </footer>
      </body>
    </html>
  );
}
