import React from 'react';
import './App.css';
import heroBanner from './assets/hero-banner.jpeg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ArtistPortfolio from './components/ArtistPortfolio';
import BehindTheScenes from './components/BehindTheScenes';
import CustomOrders from './components/CustomOrders';
import ProductGallery from './components/ProductGallery';
import MessagingSystem from './components/MessagingSystem';
import AboutUs from './components/AboutUs';

/* 
  PUBLIC_INTERFACE
  CreativeConnect Main App — Enhanced UI/UX Homepage

  - AboutUs page routed with react-router
  - Navigation includes About Us
  - No breaking changes to existing sections
*/

const SECTIONS = [
  { key: 'home', label: 'Home', route: '/' },
  { key: 'portfolio', label: 'Artist Portfolios', route: '/portfolio' },
  { key: 'stories', label: 'Behind-the-Scenes', route: '/stories' },
  { key: 'orders', label: 'Custom Orders', route: '/orders' },
  { key: 'gallery', label: 'Product Gallery', route: '/gallery' },
  { key: 'messages', label: 'Messaging', route: '/messages' },
  { key: 'about', label: 'About Us', route: '/about' },
];

const HERO_GRAPHIC = heroBanner; // Use local, user-provided image

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="container flex justify-between align-center">
            <Link className="logo" style={{ cursor: "pointer", textDecoration: "none" }} to="/">
              <span className="logo-symbol" aria-label="Art">🎨</span>
              CreativeConnect
            </Link>
            <nav className="navbar" style={{ flex: 1, marginLeft: 32 }}>
              <ul
                className="navbar-list flex"
                style={{ gap: 8, listStyle: "none", margin: 0, padding: 0 }}
              >
                {SECTIONS.map(s => (
                  <li key={s.key}>
                    <Link
                      to={s.route}
                      className="btn"
                      style={{
                        borderRadius: 5,
                        background: window.location.pathname === s.route ? 'var(--cc-gold)' : 'transparent',
                        color: window.location.pathname === s.route ? 'var(--cc-dark)' : 'var(--cc-white)',
                        fontWeight: 600,
                        border: "none",
                        fontSize: "1.09em",
                        margin: "0 1px",
                        padding: "8px 17px"
                      }}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <section className="hero hero-modern hero-modern-centered home-hero-stripped">
                    {/* Animated floating smileys on the hero area */}
                    <div className="hero-smiley-anim-area" aria-hidden="true">
                      <span className="smiley smiley-bounce" style={{ left: '9%', top: '13%' }} role="img" aria-label="Smiling Face 1">😊</span>
                      <span className="smiley smiley-float" style={{ left: '87%', top: '23%' }} role="img" aria-label="Grinning Face">😄</span>
                      <span className="smiley smiley-sway" style={{ left: '61%', top: '5%' }} role="img" aria-label="Winking Face">😉</span>
                      <span className="smiley smiley-zoom" style={{ left: '19%', top: '74%' }} role="img" aria-label="Star Eyes">🤩</span>
                      <span className="smiley smiley-bounce2" style={{ left: '58%', top: '85%' }} role="img" aria-label="Heart Eyes">😍</span>
                      <span className="smiley smiley-sway smiley-xs" style={{ left: '70%', top: '77%' }} role="img" aria-label="Blushing Face">☺️</span>
                    </div>
                    <div className="home-hero-content">
                      <div className="hero-img-wrap">
                        <img
                          src={HERO_GRAPHIC}
                          alt="CreativeConnect Hero Banner"
                          className="home-hero-img"
                          style={{
                            width: "min(340px, 94vw)",
                            height: "auto",
                            maxHeight: "222px",
                            objectFit: "contain",
                            display: "block",
                            margin: "0 auto 24px auto",
                            boxShadow: "0 6px 22px #80000018, 0 2px 8px #ffd10422",
                            borderRadius: "18px",
                            border: "2.5px solid var(--cc-maroon)",
                            background: "linear-gradient(90deg,#ffeaa8 25%, #fffbe2 100%)",
                            filter: "drop-shadow(0px 2px 0 #ffd10433)",
                          }}
                        />
                      </div>
                      <h1
                        className="title home-title"
                        style={{
                          fontSize: '3rem',
                          color: 'var(--cc-maroon)',
                          fontWeight: 900,
                          marginBottom: 10,
                          textShadow: '0 2px 0 #ffd10442',
                        }}
                      >
                        Welcome to <span style={{ color: 'var(--cc-gold)', fontWeight: 800 }}>CreativeConnect</span>
                      </h1>
                      <div
                        className="subtitle home-subtitle"
                        style={{
                          color: 'var(--cc-gold)',
                          fontWeight: 700,
                          fontSize: '1.45rem',
                          letterSpacing: '.02em',
                          marginTop: 2,
                        }}
                      >
                        Where creative minds gather and new friendships spark ✨
                      </div>
                      <p
                        className="description home-desc"
                        style={{
                          fontSize: '1.19rem',
                          color: 'var(--text-secondary)',
                          maxWidth: 520,
                          margin: '18px auto 0 auto',
                          lineHeight: 1.62,
                          fontWeight: 500,
                        }}
                      >
                        <b>CreativeConnect</b> is a vibrant community for artists, crafters, and passionate admirers alike.<br />
                        Share your artwork, connect with fellow creators, and discover unique handmade pieces tailored to your taste.
                        <br />
                        <span style={{ color: 'var(--cc-maroon)' }}>
                          <b>Find inspiration. Celebrate talent. Support one another.
                          <span style={{ color: 'var(--cc-gold)' }}> All in one uplifting hub.</span></b>
                        </span>
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.95em',
                          margin: '32px 0 19px 0',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '1.22rem',
                            color: 'var(--cc-maroon)',
                            fontWeight: 700,
                            background: 'linear-gradient(90deg,#fffbe2 70%, #ffeaa8 100%)',
                            borderRadius: 9,
                            padding: '7px 19px',
                            boxShadow: '0 1.5px 13px #ffd10420',
                          }}
                        >
                          You’re welcome here—no matter if you’re a creator, collector, or just curious!
                        </span>
                        <span
                          style={{
                            fontSize: '1.09rem',
                            color: 'var(--text-secondary)',
                            fontWeight: 600,
                            padding: '4px 14px',
                          }}
                        >
                          Share your vision. Discover new art. Make meaningful connections.
                        </span>
                        <span
                          style={{
                            fontSize: '1.08rem',
                            color: 'var(--cc-maroon)',
                            fontWeight: 500,
                            letterSpacing: '.01em',
                            background: 'var(--cc-gold)',
                            borderRadius: '7px',
                            padding: '4px 17px 4px 17px',
                            boxShadow: '0 2px 7px #ffe25f30',
                          }}
                        >
                          Let’s celebrate creativity—together!
                        </span>
                      </div>
                      <div className="hero-cta" style={{ justifyContent: 'center', marginTop: 18 }}>
                        <Link
                          to="/gallery"
                          className="btn btn-accent btn-large hero-cta-btn home-explore-btn"
                          style={{
                            minWidth: 160,
                            fontSize: '1.21rem',
                            fontWeight: 800,
                            letterSpacing: '.005em',
                            marginTop: '7px',
                            borderRadius: 13,
                            boxShadow: '0 7px 24px #80000025, 0 3px 8px #ffd10422',
                            display: 'inline-block'
                          }}
                        >
                          Explore
                        </Link>
                      </div>
                    </div>
                  </section>
                </main>
              }
            />
            <Route path="/portfolio" element={<ArtistPortfolio />} />
            <Route path="/stories" element={<BehindTheScenes />} />
            <Route path="/orders" element={<CustomOrders />} />
            <Route path="/gallery" element={<ProductGallery />} />
            <Route path="/messages" element={<MessagingSystem />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        <footer className="footer">
          &copy; {new Date().getFullYear()} CreativeConnect &mdash; Connecting Creators &amp; Admirers
        </footer>
      </div>
    </Router>
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
