import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">OGD MOBILE</header>

      {/* Navigation */}
      <nav className="nav">
        <a href="#how-it-works">How It Works</a>
        <a href="#data-deals">Data Deals</a>
        <a href="#tips">Tips</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Save Data, Save Money!</h2>
        <p>Get the best data plans in Nigeria with OGD MOBILE. Easy, fast, and reliable.</p>
        <div className="cta">
          <a href="#data-deals">Get Data Deals</a>
          <a href="#tips">Learn Tips</a>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" id="how-it-works">
        <h3>How OGD MOBILE Works</h3>
        <p>1. Browse affordable data plans from MTN, Airtel, Glo, and 9mobile.</p>
        <p>2. Click the “Buy Now” buttons to purchase through our secure affiliate links.</p>
        <p>3. Save money every day with exclusive deals.</p>
      </section>

      {/* Data Deals / Affiliate Buttons */}
      <section className="section" id="data-deals">
        <h3>Latest Data Deals</h3>
        <div className="affiliate-buttons">
          <a href="YOUR_MTN_AFFILIATE_LINK" target="_blank" rel="noreferrer">MTN 1GB for ₦200</a>
          <a href="YOUR_AIRTEL_AFFILIATE_LINK" target="_blank" rel="noreferrer">Airtel 1GB for ₦180</a>
          <a href="YOUR_GLO_AFFILIATE_LINK" target="_blank" rel="noreferrer">Glo 1GB for ₦150</a>
          <a href="YOUR_9MOBILE_AFFILIATE_LINK" target="_blank" rel="noreferrer">9mobile 1GB for ₦170</a>
        </div>
      </section>

      {/* Tips Section / Blog */}
      <section className="section" id="tips">
        <h3>Data-Saving Tips</h3>
        <p>💡 Turn off background apps to save mobile data.</p>
        <p>💡 Use Wi-Fi whenever possible for large downloads.</p>
        <p>💡 Monitor your daily usage to avoid overspending.</p>
      </section>

      {/* Contact / Socials */}
      <section className="section" id="contact">
        <h3>Contact & Join</h3>
        <p>Join our community on WhatsApp and Telegram for daily deals.</p>
        <div className="affiliate-buttons">
          <a href="YOUR_WHATSAPP_GROUP_LINK" target="_blank" rel="noreferrer">Join WhatsApp</a>
          <a href="YOUR_TELEGRAM_GROUP_LINK" target="_blank" rel="noreferrer">Join Telegram</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; 2026 OGD MOBILE. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
