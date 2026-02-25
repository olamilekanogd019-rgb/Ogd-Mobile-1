import React from "react";
import "./App.css";

// Import banners
import banner1 from "./assets/images/banner1.png";
import banner2 from "./assets/images/banner2.png";
import banner3 from "./assets/images/banner3.png";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1>Welcome to OGD MOBILE</h1>
        <p>Get the latest data deals and special offers!</p>
      </header>

      {/* Banner Section */}
      <section className="banners">
        {/* Banner 1 */}
        <a
          href="YOUR_MTN_AFFILIATE_LINK"
          target="_blank"
          rel="noreferrer"
        >
          <img src={banner1} alt="Special Offer" />
        </a>

        {/* Banner 2 */}
        <a
          href="YOUR_AIRTEL_AFFILIATE_LINK"
          target="_blank"
          rel="noreferrer"
        >
          <img src={banner2} alt="Data Special Offer" />
        </a>

        {/* Banner 3 */}
        <a
          href="YOUR_GLO_AFFILIATE_LINK"
          target="_blank"
          rel="noreferrer"
        >
          <img src={banner3} alt="Join Our Promo" />
        </a>
      </section>

      {/* Data Deals Section */}
      <section className="data-deals">
        <h2>Latest Data Deals</h2>
        <ul>
          <li>MTN 1GB - <a href="YOUR_MTN_AFFILIATE_LINK">Buy Now</a></li>
          <li>Airtel 2GB - <a href="YOUR_AIRTEL_AFFILIATE_LINK">Buy Now</a></li>
          <li>Glo 500MB - <a href="YOUR_GLO_AFFILIATE_LINK">Buy Now</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; 2026 OGD MOBILE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
