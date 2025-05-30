import React, { useState } from 'react';
import './App.css';

import ArtistPortfolio from './components/ArtistPortfolio';
import BehindTheScenes from './components/BehindTheScenes';
import CustomOrders from './components/CustomOrders';
import ProductGallery from './components/ProductGallery';
import MessagingSystem from './components/MessagingSystem';

/*
  PUBLIC_INTERFACE
  artistryhub Main App — Layout, Branding, and All Features

  - Maroon header (logo + navigation tabs)
  - White background for main content, shiny gold/yellow as accent for active tab/buttons
  - Modular loading of all 5 core features, no router; state-based navigation
  - Maroon footer with gold text
  - Responsive, modern, accessible
  - Brand: primary=maroon, secondary=white, accent=gold (#e8c517)
*/

const SECTIONS = [
  { key: 'home', label: 'Home' },
  { key: 'portfolio', label: 'Artist Portfolios' },
  { key: 'stories', label: 'Behind-the-Scenes' },
  { key: 'orders', label: 'Custom Orders' },
  { key: 'gallery', label: 'Product Gallery' },
  { key: 'messages', label: 'Messaging' },
];

function App() {
  // Section control; default to Home
  const [section, setSection] = useState('home');
  // Responsive nav menu (for mobile if wanted)
  const [navOpen, setNavOpen] = useState(false);

  // Section displays
  function renderSection() {
    switch (section) {
      case 'portfolio':
        return <ArtistPortfolio />;
      case 'stories':
        return <BehindTheScenes />;
      case 'orders':
        return <CustomOrders />;
      case 'gallery':
        return <ProductGallery />;
      case 'messages':
        return <MessagingSystem />;
      default:
        // Home section: expanded, engaging intro + vibrant, visually balanced message with image
        return (
          <main>
            <section
              className="hero"
              style={{
                minHeight: "calc(72vh - 110px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div className="subtitle" style={{ fontSize: "1.28rem", marginBottom: 3, color: "var(--cc-maroon)" }}>
                Welcome to artistryhub
              </div>
              <h1 className="title" style={{ marginTop: 0, marginBottom: 10 }}>
                <span className="logo-symbol" aria-label="Art">🎨</span> artistryhub
              </h1>

              <div style={{
                marginBottom: 24,
                maxWidth: 570,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 11
              }}>
                <p className="description"
                  style={{
                    marginBottom: 0,
                    fontSize: "1.19rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <b>Discover, share, connect—</b> <span style={{ color: "var(--cc-gold)", fontWeight: 600 }}>ArtistryHub</span> is a creative haven for artists, crafters, and curious souls of all kinds!<br />
                  Join a vibrant community where imaginations ignite, skills are celebrated, and inspiration is everywhere.
                </p>
                <p className="description"
                  style={{
                    marginBottom: 0,
                    fontSize: "1.11rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span role="img" aria-label="sparkles" style={{ fontSize: "1.07em", marginRight: 3, color: "var(--cc-gold)" }}>✨</span>
                  <b>For creators:</b> Build your portfolio, share your process, and open doors to new friendships and art-loving fans.
                  <br />
                  <span role="img" aria-label="eyes" style={{ fontSize: "1em", marginRight: 3, marginLeft: 2 }}>👀</span>
                  <b>For explorers:</b> Find unique handmade treasures, connect with gifted makers, or commission your own one-of-a-kind piece.
                </p>
                <p className="description"
                  style={{
                    marginBottom: 0,
                    fontSize: "1.13rem",
                    fontWeight: 500,
                    color: "var(--cc-maroon)",
                  }}>
                  Here, every brushstroke, sculpted curve, and creative spark has a place—and you’re invited to be part of something beautiful. <br />
                </p>
                <p className="description"
                  style={{
                    marginBottom: 14,
                    fontSize: "1.1rem",
                    color: "var(--cc-dark)",
                  }}>
                  <b>Start exploring galleries, meet talented creators, or share your artistic story—your artistry adventure begins here!</b>
                </p>
              </div>
              {/* Centered lively/craft art image from Unsplash, with attribution */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=702&q=80"
                  alt="Potter at work, artistic process (Photo by Quino Al, Unsplash)"
                  style={{
                    maxWidth: "400px",
                    maxHeight: "340px",
                    width: "100%",
                    borderRadius: "16px",
                    boxShadow: "0 4px 16px rgba(128,0,0,0.09)",
                    marginBottom: "8px",
                    objectFit: "cover"
                  }}
                />
                <span style={{
                  fontSize: "0.98em",
                  color: "var(--text-secondary)",
                  marginTop: "4px"
                }}>
                  Photo by <a href="https://unsplash.com/@quinoal" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cc-maroon)", textDecoration: "underline" }}>Quino Al</a> on <a href="https://unsplash.com/photos/photo-1506744038136-46273834b3fb" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cc-maroon)", textDecoration: "underline" }}>Unsplash</a>
                </span>
              </div>
            </section>
          </main>
        );
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container flex justify-between align-center">
          <div className="logo" style={{ cursor: "pointer" }} onClick={() => setSection('home')}>
            <span className="logo-symbol" aria-label="Art">🎨</span>
            artistryhub
          </div>
          <nav className="navbar" style={{ flex: 1, marginLeft: 32 }}>
            <ul className="navbar-list flex" style={{ gap: 8, listStyle: "none", margin: 0, padding: 0 }}>
              {SECTIONS.map(s => (
                <li key={s.key}>
                  <button
                    className={`btn ${section === s.key ? 'btn-accent' : ''}`}
                    style={{
                      borderRadius: 5,
                      background: section === s.key ? 'var(--cc-gold)' : 'transparent',
                      color: section === s.key ? 'var(--cc-dark)' : 'var(--cc-white)',
                      fontWeight: 600,
                      border: "none",
                      fontSize: "1.09em",
                      margin: "0 1px",
                      padding: "8px 17px"
                    }}
                    onClick={() => setSection(s.key)}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div style={{ flex: 1 }}>{renderSection()}</div>
      <footer className="footer">
        &copy; {new Date().getFullYear()} artistryhub &mdash; Connecting Creators &amp; Admirers
      </footer>
    </div>
  );
}

// Card for homepage feature highlights
function FeatureCard({ title, desc, icon, onGo }) {
  return (
    <div className="card" style={{ minHeight: 170, textAlign: "center", position: "relative" }}>
      <div style={{ fontSize: "2.1rem", marginBottom: 8 }}>{icon}</div>
      <div style={{ fontWeight: 700, color: "var(--cc-maroon)", fontSize: "1.15em", marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ color: "var(--text-secondary)", fontSize: "1em", minHeight: 30, marginBottom: 7 }}>{desc}</div>
      <button className="btn btn-accent" onClick={onGo} style={{ marginTop: 8, fontSize: "0.98em" }}>
        Visit
      </button>
    </div>
  );
}

export default App;
