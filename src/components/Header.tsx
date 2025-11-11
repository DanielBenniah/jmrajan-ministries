import React from 'react';

export function Header(): React.JSX.Element {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-text">
            <h1>J.M. Rajan Ministries</h1>
          </div>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}


