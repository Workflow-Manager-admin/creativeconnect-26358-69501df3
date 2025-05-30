import React, { useState } from 'react';
import './App.css';

import ArtistPortfolio from './components/ArtistPortfolio';
import BehindTheScenes from './components/BehindTheScenes';
import CustomOrders from './components/CustomOrders';
import ProductGallery from './components/ProductGallery';
import MessagingSystem from './components/MessagingSystem';

/*
  PUBLIC_INTERFACE
  CreativeConnect Main App — Layout, Branding, and All Features

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
        // Home section: engaging intro; summary of features and who it's by
        return (
          <main>
            <section className="hero">
              <div className="subtitle">Welcome to</div>
              <h1 className="title">
                <span className="logo-symbol" aria-label="Art">🎨</span> CreativeConnect
              </h1>
              <p className="description">
                The creative platform connecting artists, crafters, and admirers.<br />
                Discover unique artworks, explore creative journeys, and request custom-crafted pieces—all in one inspiring community.
              </p>
              <div style={{ margin: '22px 0 0 0' }}>
                <button
                  className="btn btn-accent btn-large"
                  onClick={() => setSection('portfolio')}
                >Explore Artists</button>
              </div>
            </section>
            <section className="container" style={{ marginTop: 38 }}>
              <h2 className="subtitle" style={{ color: 'var(--cc-maroon)', textAlign: 'center' }}>
                Platform Features
              </h2>
              <div className="grid grid-cols-3" style={{ gap: 24, marginTop: 18 }}>
                <FeatureCard
                  title="Artist Portfolios"
                  desc="Browse personal portfolios, discover creators & inspirations."
                  icon="🖼️"
                  onGo={() => setSection('portfolio')}
                />
                <FeatureCard
                  title="Behind-the-Scenes"
                  desc="Read stories and see process photos direct from the studio."
                  icon="🛠️"
                  onGo={() => setSection('stories')}
                />
                <FeatureCard
                  title="Custom Orders"
                  desc="Collaborate for unique, made-to-order craft pieces with messaging."
                  icon="✨"
                  onGo={() => setSection('orders')}
                />
                <FeatureCard
                  title="Product Gallery"
                  desc="Explore artworks and crafts for inspiration or purchase."
                  icon="🛒"
                  onGo={() => setSection('gallery')}
                />
                <FeatureCard
                  title="Messaging"
                  desc="Chat with artists and buyers—share ideas, coordinate orders."
                  icon="💬"
                  onGo={() => setSection('messages')}
                />
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
            CreativeConnect
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
        &copy; {new Date().getFullYear()} CreativeConnect &mdash; Connecting Creators &amp; Admirers
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
