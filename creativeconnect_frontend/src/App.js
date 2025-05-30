import React, { useState } from 'react';
import './App.css';

/*
  PUBLIC_INTERFACE
  The main CreativeConnect app layout.
  - Sticky maroon header with logo and navigation
  - White content section with basic routing/state for major features
  - Maroon footer with accent color
*/

const FEATURES = [
  { key: 'portfolio', label: 'Artist Portfolios' },
  { key: 'stories', label: 'Behind-the-Scenes Stories' },
  { key: 'gallery', label: 'Product Gallery' },
  { key: 'custom', label: 'Custom Orders' },
  { key: 'messages', label: 'Messaging' }
];

// Simple content stubs for each major section
function FeatureSection({ feature }) {
  switch (feature) {
    case 'portfolio':
      return (
        <div className="card">
          <div className="subtitle">Artist Portfolios</div>
          <h1 className="title">Explore Featured Creators</h1>
          <div className="description">
            View personal portfolios showcasing artwork, crafts, bios, and more from CreativeConnect artists.
          </div>
          <button className="btn btn-accent btn-large">Browse Portfolios</button>
        </div>
      );
    case 'stories':
      return (
        <div className="card">
          <div className="subtitle">Behind-the-Scenes Stories</div>
          <h1 className="title">Discover Creative Journeys</h1>
          <div className="description">
            Dive into process photos, videos, and stories directly from the creators themselves.
          </div>
          <button className="btn btn-accent btn-large">See Stories</button>
        </div>
      );
    case 'gallery':
      return (
        <div className="card">
          <div className="subtitle">Product Gallery</div>
          <h1 className="title">Art & Crafts for Sale</h1>
          <div className="description">
            Browse the full gallery of all available handmade art, crafts, and designs.
          </div>
          <button className="btn btn-accent btn-large">Shop Gallery</button>
        </div>
      );
    case 'custom':
      return (
        <div className="card">
          <div className="subtitle">Custom Orders</div>
          <h1 className="title">Request a Custom Piece</h1>
          <div className="description">
            Looking for something personalized? Request and commission custom artwork or crafts from our creators.
          </div>
          <button className="btn btn-accent btn-large">Order Custom Work</button>
        </div>
      );
    case 'messages':
      return (
        <div className="card">
          <div className="subtitle">Messaging System</div>
          <h1 className="title">Connect & Communicate</h1>
          <div className="description">
            Send messages to artists and crafters for questions, inquiries, or discuss custom orders.
          </div>
          <button className="btn btn-accent btn-large">Open Messenger</button>
        </div>
      );
    default:
      // Welcome screen if none selected (shouldn't be shown with default section)
      return (
        <div className="hero">
          <h1 className="title">Welcome to ArtistryHub</h1>
          <div className="description">
            Select a section above to get started!
          </div>
        </div>
      );
  }
}

function App() {
  // State for active feature section
  const [active, setActive] = useState('portfolio');

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header" style={{ position: 'sticky', top: 0, zIndex: 110 }}>
        <div className="container flex justify-between align-center" style={{ minHeight: 62 }}>
          <div className="logo">
            <span className="logo-symbol" aria-label="CC Logo">✦</span> CreativeConnect
          </div>
          <nav>
            <ul className="flex" style={{ listStyle: 'none', gap: 8, margin: 0, padding: 0 }}>
              {FEATURES.map(f => (
                <li key={f.key}>
                  <button
                    className={`btn ${active === f.key ? 'btn-accent' : ''}`}
                    style={{ margin: '0 3px', minWidth: 120, fontWeight: 600 }}
                    onClick={() => setActive(f.key)}
                  >
                    {f.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, background: 'var(--cc-white)', minHeight: '60vh', paddingTop: 32, paddingBottom: 48 }}>
        <div className="container">
          <FeatureSection feature={active} />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} CreativeConnect &middot; Powered by Art & Craft
      </footer>
    </div>
  );
}

export default App;