import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * BehindTheScenes component for ArtistryHub
 * Displays a real-time-inspired feed of behind-the-scenes stories from creators.
 * Uses mock data (image, creator name, timestamp, description) in a lively, branded, card-based layout.
 */

// Mock data: List of stories
const mockStories = [
  {
    id: 1,
    creator: "Sienna Carter",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    timestamp: "2 minutes ago",
    description: "First glaze layer drying! I love how the colors are coming alive. Can't wait to fire this piece tonight. #ceramicprocess",
  },
  {
    id: 2,
    creator: "Jonas Feld",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    timestamp: "10 minutes ago",
    description: "Nature walk inspiration for my next pottery collection 🌿. Snapped some mossy textures to try in today's session.",
  },
  {
    id: 3,
    creator: "Claire Ko",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    image: "https://images.unsplash.com/photo-1526178613658-3f1622045574?auto=format&fit=crop&w=600&q=80",
    timestamp: "22 minutes ago",
    description: "Mixing custom shades for a 'wildflower' illustration. Mixing paint is half the magic! Here’s my setup before I start sketching.",
  },
  {
    id: 4,
    creator: "Rita Okoye",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    timestamp: "32 minutes ago",
    description: "Weaving in golden thread for accent—see the shimmer? Each basket I make gets a unique touch inspired by my grandmother’s tradition.",
  },
  {
    id: 5,
    creator: "Eli Nguyen",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    timestamp: "40 minutes ago",
    description: "Behind the scenes of the 'Fused Glass Pendant'—assembling tiny fragments before firing at 1400°F. #glassart #creativeprocess",
  },
];

const BehindTheScenes = () => {
  return (
    <section style={{ padding: "24px 0" }}>
      <div className="card" style={{ background: "var(--cc-white)", boxShadow: "var(--card-shadow)" }}>
        <div className="subtitle" style={{ marginBottom: 8 }}>
          Behind-the-Scenes Stories
        </div>
        <h1 className="title" style={{ color: "var(--cc-maroon)", marginBottom: 16 }}>
          Journey Into Creation
        </h1>
        <div className="description" style={{ marginBottom: 28, color: "var(--text-secondary)", textAlign: "center" }}>
          Step into the creative process! Artists share live stories, photos, and moments from their studios and workbenches. Get inspired.
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            maxWidth: 780,
            margin: "0 auto",
          }}>
          {mockStories.map((story) => (
            <div
              key={story.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 0,
                padding: 0,
                margin: 0,
                border: "1.2px solid var(--cc-grey-border)",
                boxShadow: "var(--card-shadow)",
                background: "#fff",
                overflow: "hidden",
                borderRadius: 14,
                alignItems: "stretch",
              }}
            >
              <div style={{
                flex: "0 0 150px",
                minWidth: 130,
                background: "#f9f6fa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: "1px solid var(--cc-grey-border)"
              }}>
                <img
                  src={story.image}
                  alt={`Behind the scenes photo from ${story.creator}`}
                  style={{
                    width: "100%",
                    height: 130,
                    objectFit: "cover",
                    borderTopLeftRadius: 14,
                    borderBottomLeftRadius: 14,
                  }}
                />
              </div>
              <div style={{ flex: 1, padding: "18px 22px 15px 18px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 7 }}>
                  <img
                    src={story.avatar}
                    alt={`Avatar of ${story.creator}`}
                    style={{
                      width: 39,
                      height: 39,
                      borderRadius: "100%",
                      border: "2.2px solid var(--cc-gold)",
                      marginRight: 10,
                      objectFit: "cover",
                      boxShadow: "0 2px 9px rgba(232,197,23,0.09)",
                    }}
                  />
                  <span style={{ fontWeight: 700, color: "var(--cc-maroon)", fontSize: "1.08em", marginRight: 15 }}>
                    {story.creator}
                  </span>
                  <span style={{ color: "var(--cc-gold)", fontSize: "0.95em", fontWeight: 500 }}>&bull;</span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.97em", marginLeft: 9 }}>
                    {story.timestamp}
                  </span>
                </div>
                <div style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.06em",
                  marginBottom: 5,
                  lineHeight: 1.55,
                  fontWeight: 500,
                  letterSpacing: "0.01em"
                }}>
                  {story.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
