import React, { useState } from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * ArtistPortfolio component for ArtistryHub
 * Displays a grid of artist cards, each showing a profile image, name, bio, and a gallery of artwork thumbnails.
 * Uses mock data and is styled to ArtistryHub branding guidelines.
 */

// Mock data for artists
const mockArtists = [
  {
    id: 1,
    name: "Sienna Carter",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Ceramic artist blending modern minimalism with earthy palettes. Sienna’s work is celebrated for organic shapes and lively glazes.",
    artworks: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=350&q=80",
    ],
  },
  {
    id: 2,
    name: "Eli Nguyen",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    bio: "Glass artisan fascinated by colors and transparency. Eli crafts unique pendants and bowls using fused glass techniques.",
    artworks: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=350&q=80",
    ],
  },
  {
    id: 3,
    name: "Rita Okoye",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    bio: "Basket weaver inspired by Nigerian heritage, merging tradition with contemporary colors and shimmering gold accents.",
    artworks: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=350&q=80",
    ],
  },
  {
    id: 4,
    name: "Claire Ko",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Botanical illustrator who captures natural beauty with watercolors and ink. Her art features vibrant florals and calming scenes.",
    artworks: [
      "https://images.unsplash.com/photo-1526178613658-3f1622045574?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=350&q=80",
    ],
  },
  {
    id: 5,
    name: "Jonas Feld",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    bio: "Functional pottery with nature inspiration. Jonas integrates textures from the forest floor into his mugs and vases.",
    artworks: [
      "https://images.unsplash.com/photo-1526178613658-3f1622045574?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=350&q=80",
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=350&q=80",
    ],
  },
];

/**
 * Modal (inline simple) for artist full portfolio view.
 * @param {object} props
 */
function ArtistPortfolioModal({ artist, onClose }) {
  if (!artist) return null;

  // Simulate full portfolio with all their known artworks and an expanded bio.
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 2000,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(29,20,32,0.60)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "auto"
      }}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="card"
        style={{
          background: "var(--cc-white)",
          borderRadius: 20,
          boxShadow: "0 8px 30px #80000018, 0 1.5px 9px #ffd10422",
          minWidth: 330,
          maxWidth: 480,
          width: "93vw",
          maxHeight: "96vh",
          overflowY: "auto",
          position: "relative",
          padding: "32px 24px 26px 24px",
        }}
        onClick={e => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button
          aria-label="Close"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "var(--cc-maroon)",
            color: "var(--cc-gold)",
            border: "none",
            borderRadius: "50%",
            width: 36,
            height: 36,
            fontSize: "1.32em",
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 1px 4px #80000022"
          }}
        >
          &times;
        </button>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 13, gap: 16, flexWrap: "wrap" }}>
          <img
            src={artist.avatar}
            alt={`Portrait of artist ${artist.name}`}
            style={{
              width: 85,
              height: 85,
              borderRadius: "100%",
              objectFit: "cover",
              border: "3.2px solid var(--cc-gold)",
              marginRight: 10,
              boxShadow: "0 4px 16px #e8c51722"
            }}
          />
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.39em", color: "var(--cc-maroon)", marginBottom: 2 }}>{artist.name}</div>
            <div style={{ color: "var(--text-secondary)", fontWeight: 500, marginBottom: 6 }}>{artist.bio}</div>
          </div>
        </div>
        <div style={{ fontWeight: 800, color: "var(--cc-gold)", marginBottom: 5, fontSize: "1.09em" }}>Gallery</div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 13,
          marginBottom: 16
        }}>
          {artist.artworks.map((art, idx) => (
            <img
              key={idx}
              src={art}
              alt={`Artwork ${idx + 1} by ${artist.name}`}
              style={{
                width: "100%",
                minWidth: 0,
                maxHeight: 116,
                objectFit: "cover",
                borderRadius: 10,
                background: "#f9f6fa",
                border: "1.9px solid var(--cc-maroon)",
                boxShadow: "0 2px 8px #80000014"
              }}
            />
          ))}
        </div>
        {/* Example: add more info if available, e.g. link, socials, etc */}
        <div style={{
          marginTop: 10,
          color: "var(--text-secondary)",
          background: "var(--cc-grey-bg)",
          borderRadius: 9,
          padding: "9px 14px",
          fontSize: "1.02em"
        }}>
          <div>
            <b>Contact / Collaboration:</b> <span style={{ color: "var(--cc-maroon)" }}>Demo only</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
const ArtistPortfolio = () => {
  const [modalArtist, setModalArtist] = useState(null);

  return (
    <section style={{ padding: "30px 0" }}>
      <div className="card" style={{ background: "var(--cc-white)" }}>
        <div className="subtitle" style={{ marginBottom: 8 }}>
          Artist Portfolios
        </div>
        <h1 className="title" style={{ color: "var(--cc-maroon)", marginBottom: 12 }}>
          Explore Featured Creators
        </h1>
        <div
          className="description"
          style={{
            marginBottom: 28,
            color: "var(--text-secondary)",
            textAlign: "center",
          }}
        >
          View personal portfolios showcasing artwork, crafts, bios, and more from ArtistryHub artists.
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "27px",
            margin: "0 auto",
            paddingBottom: 16,
          }}
        >
          {mockArtists.map((artist) => (
            <div
              key={artist.id}
              className="card"
              style={{
                padding: 0,
                overflow: "hidden",
                borderRadius: 16,
                background: "var(--card-bg)",
                boxShadow: "var(--card-shadow)",
                border: "1.5px solid var(--cc-grey-border)",
                transition: "box-shadow 0.18s, border 0.18s",
                display: "flex",
                flexDirection: "column",
                minHeight: 390,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", padding: "18px 18px 10px 18px", gap: 16 }}>
                <img
                  src={artist.avatar}
                  alt={`Portrait of artist ${artist.name}`}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "100%",
                    objectFit: "cover",
                    border: "3px solid var(--cc-gold)",
                    boxShadow: "0 3px 10px rgba(232,197,23,0.10)",
                    marginRight: 8,
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.26em", color: "var(--cc-maroon)", marginBottom: 2 }}>
                    {artist.name}
                  </div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.99em", fontWeight: 500, marginBottom: 5 }}>
                    {artist.bio}
                  </div>
                </div>
              </div>
              <div style={{ padding: "0 18px 12px 18px", flex: 1 }}>
                <div style={{ marginTop: 11, marginBottom: 7, fontWeight: 600, color: "var(--cc-gold)", letterSpacing: 0.02 }}>Gallery Preview</div>
                <div
                  className="flex"
                  style={{
                    gap: 10,
                    justifyContent: "start",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {artist.artworks.map((art, idx) => (
                    <img
                      key={idx}
                      src={art}
                      alt={`Artwork ${idx + 1} by ${artist.name}`}
                      style={{
                        width: 67,
                        height: 67,
                        borderRadius: 8,
                        objectFit: "cover",
                        border: "1.6px solid var(--cc-maroon)",
                        boxShadow: "0 1px 6px rgba(128,0,0,0.07)",
                        background: "#f9f6fa",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div style={{ padding: "0 18px 18px 18px" }}>
                <button
                  className="btn btn-accent btn-large"
                  style={{ width: "100%", fontWeight: 700, fontSize: "1.08em", marginTop: 8 }}
                  onClick={() => setModalArtist(artist)}
                  title={`View full portfolio for ${artist.name}`}
                >
                  View Full Portfolio
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Modal overlay for full portfolio */}
        {modalArtist && (
          <ArtistPortfolioModal artist={modalArtist} onClose={() => setModalArtist(null)} />
        )}
      </div>
    </section>
  );
};

export default ArtistPortfolio;
