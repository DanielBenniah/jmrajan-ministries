import React from 'react';

export function Hero(): React.JSX.Element {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-logo">
            <img src="/Logo.jpg" alt="J.M. Rajan Ministries Logo" className="logo-image" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">J.M. Rajan Ministries</h1>
            <p className="hero-verse">
              "For we are to God the fragrance of Christ among those who are being saved 
              and among those who are perishing."
            </p>
            <p className="hero-reference">— 2 Corinthians 2:15</p>
          </div>
        </div>
      </div>
    </section>
  );
}

