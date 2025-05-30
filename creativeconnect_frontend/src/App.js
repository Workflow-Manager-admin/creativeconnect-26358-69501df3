import React, { useState } from 'react';
import './App.css';

import ArtistPortfolio from './components/ArtistPortfolio';
import BehindTheScenes from './components/BehindTheScenes';
import CustomOrders from './components/CustomOrders';
import ProductGallery from './components/ProductGallery';
import MessagingSystem from './components/MessagingSystem';

/* 
  PUBLIC_INTERFACE
  CreativeConnect Main App — Enhanced UI/UX Homepage

  - Redesigned hero banner with background illustration
  - Animated and illustrated feature highlights
  - Improved CTA buttons
  - Consistent maroon/white/yellow brand colors
*/

const SECTIONS = [
  { key: 'home', label: 'Home' },
  { key: 'portfolio', label: 'Artist Portfolios' },
  { key: 'stories', label: 'Behind-the-Scenes' },
  { key: 'orders', label: 'Custom Orders' },
  { key: 'gallery', label: 'Product Gallery' },
  { key: 'messages', label: 'Messaging' },
];

// Illustration URLs (simple unsplash/placeholder SVGs/local assets could also be used)
const HERO_GRAPHIC =
  'https://cdn.pixabay.com/photo/2016/04/01/11/56/art-1292615_1280.png'; // Artistic SVG illustration
const FEATURE_IMAGES = [
  'https://cdn.pixabay.com/photo/2021/01/07/18/58/painting-5896558_1280.png', // Portfolio
  'https://cdn.pixabay.com/photo/2019/12/14/13/32/art-4694968_1280.png', // Stories
  'https://cdn.pixabay.com/photo/2017/01/31/20/16/craft-2022452_1280.png', // Orders
  'https://cdn.pixabay.com/photo/2017/09/15/21/59/paint-2755788_1280.png', // Gallery
  'https://cdn.pixabay.com/photo/2014/04/02/14/10/phone-306411_1280.png', // Messaging
];

// Stagger for feature card animation
function useStaggeredMount(count, ms) {
  const [loaded, setLoaded] = useState(Array(count).fill(false));
  React.useEffect(() => {
    let t = [];
    for (let i = 0; i < count; i++) {
      t.push(setTimeout(() => {
        setLoaded(l => {
          const copy = [...l];
          copy[i] = true;
          return copy;
        });
      }, ms * i + 100));
    }
    return () => t.forEach(clearTimeout);
  }, [count, ms]);
  return loaded;
}

function App() {
  const [section, setSection] = useState('home');

  // Home/landing with upgrades
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
        // Enhanced Hero Section + animated features
        return (
          <main>
            <section className="hero hero-modern hero-modern-centered">
              <div className="hero-center-stack">
                <div className="hero-art-bg hero-art-bg-centered">
                  <img
                    src={HERO_GRAPHIC}
                    alt="Creative Connect Artistic Banner"
                    className="hero-art-img"
                    loading="lazy"
                  />
                  <div className="hero-overlay" />
                </div>
                {/* Centered animated smiley floating independently */}
                <div className="smiley-floating-center-wrap">
                  <span className="smiley-floating-center" role="img" aria-label="Welcome smiley">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{display: "block"}} xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="27" fill="var(--cc-gold)" stroke="#800000" strokeWidth="3"/>
                      <ellipse cx="18.5" cy="24" rx="3.7" ry="4.8" fill="#800000" />
                      <ellipse cx="37.3" cy="24" rx="3.7" ry="4.8" fill="#800000" />
                      <path d="M16 34.5c2.6 4 7.7 4.9 12.1 3.9 4.4-1 6.8-4.5 7.9-6.2"
                        stroke="#800000" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="hero-main-content">
                <div className="subtitle hero-fade-in" style={{fontWeight: 700, color: 'var(--cc-gold)'}}>Fuel your creativity</div>
                <h1 className="title hero-fade-in" style={{fontSize: '3rem', marginBottom: 8, display: "flex", alignItems: "center", gap: 13 }}>
                  <span className="logo-symbol" aria-label="Art">🎨</span>{" "}
                  <span style={{ color: 'var(--cc-maroon)', filter: 'drop-shadow(0px 2px 0 #ffd10490)' }}>
                    CreativeConnect
                  </span>
                  {/* Optionally show the smiley inline near the title for mobile */}
                  <span className="smiley-animated smiley-inline" role="img" aria-label="Welcome smiley inline">
                    <svg width="35" height="35" viewBox="0 0 56 56" fill="none" style={{display: "block"}} xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="27" fill="var(--cc-gold)" stroke="#800000" strokeWidth="3"/>
                      <ellipse cx="18.5" cy="24" rx="3.7" ry="4.8" fill="#800000" />
                      <ellipse cx="37.3" cy="24" rx="3.7" ry="4.8" fill="#800000" />
                      <path d="M16 34.5c2.6 4 7.7 4.9 12.1 3.9 4.4-1 6.8-4.5 7.9-6.2"
                        stroke="#800000" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    </svg>
                  </span>
                </h1>
                <p className="description hero-fade-in" style={{marginBottom: 18, maxWidth: 640}}>
                  <span style={{fontSize:"1.22em", marginRight:8}} role="img" aria-label="smile sparkle">✨</span>
                  A vibrant art & craft community welcoming artists, crafters, and admirers.<br />
                  <b style={{color: 'var(--cc-maroon)'}}>Discover</b> new artists, <b style={{color:'var(--cc-gold)'}}>explore</b> stories, and <b style={{color:'var(--cc-maroon)'}}>customize</b> your own art journey. Connect. Inspire. Create.
                </p>
                <div className="hero-cta hero-fade-in">
                  <button
                    className="btn btn-accent btn-large hero-cta-btn"
                    onClick={() => setSection('portfolio')}
                  >
                    Meet Our Artists
                  </button>
                  <button
                    className="btn btn-large hero-cta-btn"
                    style={{
                      marginLeft: 13, background: 'var(--cc-maroon)',
                      color:'var(--cc-white)', border: '2px solid var(--cc-gold)'
                    }}
                    onClick={() => setSection('orders')}
                  >
                    Get a Custom Piece
                  </button>
                </div>
              </div>
            </section>

            <FeatureHighlights setSection={setSection} />
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

// --- Animated Feature Highlights ---
function FeatureHighlights({ setSection }) {
  const features = [
    {
      title: "Artist Portfolios",
      desc: "Browse portfolios, discover brilliant creators & visual stories.",
      icon: "🖼️",
      img: FEATURE_IMAGES[0],
      onGo: () => setSection('portfolio')
    },
    {
      title: "Behind-the-Scenes",
      desc: "Peek into creative journeys and studio moments.",
      icon: "🛠️",
      img: FEATURE_IMAGES[1],
      onGo: () => setSection('stories')
    },
    {
      title: "Custom Orders",
      desc: "Commission unique art or handmade crafts directly.",
      icon: "✨",
      img: FEATURE_IMAGES[2],
      onGo: () => setSection('orders')
    },
    {
      title: "Product Gallery",
      desc: "Explore and shop a curated selection of original artworks.",
      icon: "🛒",
      img: FEATURE_IMAGES[3],
      onGo: () => setSection('gallery')
    },
    {
      title: "Messaging",
      desc: "Chat securely with artists and fellow enthusiasts.",
      icon: "💬",
      img: FEATURE_IMAGES[4],
      onGo: () => setSection('messages')
    }
  ];
  // Animation: cards fade up staggered
  const loaded = useStaggeredMount(features.length, 130);

  return (
    <section className="container" style={{ marginTop: 54, marginBottom: 56 }}>
      <h2 className="subtitle" style={{ color: 'var(--cc-maroon)', textAlign: 'center', fontWeight: 800, fontSize: "1.62em", marginBottom: 13, letterSpacing: '.01em' }}>
        <span style={{borderBottom: '4px solid var(--cc-gold)', paddingBottom: 2, color:'var(--cc-maroon)'}}>Featured Platform Highlights</span>
      </h2>
      <div
        className="grid grid-cols-3 feature-grid-modern"
        style={{ gap: 30, marginTop: 27, justifyContent: 'center' }}
      >
        {features.map((f, i) => (
          <FeatureCardModern
            key={f.title}
            {...f}
            style={{
              opacity: loaded[i] ? 1 : 0,
              transform: loaded[i] ? 'translateY(0)' : 'translateY(32px)',
              transition: `opacity 0.6s ${i*0.12+0.25}s cubic-bezier(0.42,0,0,1), transform 0.7s ${i*0.13+0.23}s cubic-bezier(0.38,1.72,0.43,0.8)`
            }}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCardModern({ title, desc, icon, onGo, img, style={} }) {
  return (
    <div
      className="card feature-card-modern"
      style={{
        minHeight: 233,
        textAlign: "center",
        background: "var(--cc-white)",
        position: "relative",
        overflow: "visible",
        padding: "28px 22px 24px 22px",
        border: "1.7px solid var(--cc-grey-border)",
        boxShadow: "var(--card-shadow)",
        ...style
      }}
      tabIndex={0}
      aria-label={`${title} feature card`}
    >
      <div className="feature-img-wrap" style={{
        width: 72, height: 72, margin: "0 auto 10px auto", position:"relative"
      }}>
        <img
          src={img}
          alt=""
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: 15,
            border: "1.5px solid var(--cc-gold)",
            boxShadow: "0 3px 10px #ffd10430"
          }}
        />
        <span
          style={{
            position: "absolute",
            right: -19,
            top: -13,
            fontSize: "1.55em",
            background: "var(--cc-gold)",
            borderRadius: "100%",
            border: "2.5px solid var(--cc-white)",
            boxShadow: "0 2px 5px #fff3, 0 0.5px 1.5px #ffd10411"
          }}
        >
          {icon}
        </span>
      </div>
      <div style={{
        fontWeight: 800,
        color: "var(--cc-maroon)",
        fontSize: "1.18em",
        marginBottom: 8,
        letterSpacing: '0.01em'
      }}>
        {title}
      </div>
      <div
        style={{
          color: "var(--text-secondary)",
          fontSize: "1em",
          minHeight: 32,
          marginBottom: 13,
        }}
      >
        {desc}
      </div>
      <button
        className="btn btn-accent"
        onClick={onGo}
        style={{
          marginTop: 8,
          fontSize: "1em",
          fontWeight: 700,
          borderRadius: 7,
          boxShadow: "0 1px 8px #ffd10419"
        }}
      >
        Explore
      </button>
    </div>
  );
}

// LEGACY: For backward code compatibility (used nowhere)
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
