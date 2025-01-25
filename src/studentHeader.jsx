import React from "react";
import './studentHeader.css';

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Eco Cup Tracker</h1>
        <nav className="header-nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#ranking" className="nav-link">
            Ranking
          </a>
          <a href="#community" className="nav-link">
            Community
          </a>
        </nav>
      </div>
    </header>
  );
}
