import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * ProductGallery component for ArtistryHub
 * Displays a grid of sample images (artworks/crafts), each with a title and artist, in a branded, responsive layout.
 * Uses mock/placeholder data and is styled according to ArtistryHub brand guidelines.
 */
const mockProducts = [
  {
    id: 1,
    title: "Golden Sunrise Vase",
    artist: "Sienna Carter",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Abstract Shapes Canvas",
    artist: "Eli Nguyen",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Handwoven Basket",
    artist: "Rita Okoye",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Ceramic Forest Mug",
    artist: "Jonas Feld",
    image:
      "https://images.unsplash.com/photo-1526178613658-3f1622045574?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Whimsical Pendant",
    artist: "Priya Sharma",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Nature Illustration Print",
    artist: "Claire Ko",
    image:
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Color Fusion Bowl",
    artist: "Enzo Gómez",
    image:
      "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Minimalist Pottery",
    artist: "Leah Tran",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Botanical Embroidery",
    artist: "Dalia Mendez",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
];

const ProductGallery = () => {
  return (
    <section style={{ padding: "24px 0" }}>
      <div className="card" style={{ background: "var(--cc-white)" }}>
        <div className="subtitle" style={{ marginBottom: 8 }}>
          Product Gallery
        </div>
        <h1 className="title" style={{ color: "var(--cc-maroon)", marginBottom: 12 }}>
          Browse Unique Art & Crafts
        </h1>
        <div
          className="description"
          style={{
            marginBottom: 28,
            color: "var(--text-secondary)",
            textAlign: "center",
          }}
        >
          A curated collection of original artwork and hand-crafted pieces created by ArtistryHub's talented community.
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "28px",
            margin: "0 auto",
          }}
        >
          {mockProducts.map((prod) => (
            <div
              key={prod.id}
              className="card"
              style={{
                padding: 0,
                overflow: "hidden",
                borderRadius: 15,
                background: "var(--card-bg)",
                boxShadow: "var(--card-shadow)",
                border: "1.5px solid var(--cc-grey-border)",
                transition: "box-shadow 0.18s, border 0.18s",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={prod.image}
                alt={`Product: ${prod.title} by ${prod.artist}`}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  borderBottom: "1px solid var(--cc-grey-border)",
                }}
              />
              <div style={{ padding: "15px 15px 12px 15px", flex: 1 }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.06rem",
                    color: "var(--cc-maroon)",
                    marginBottom: 4,
                  }}
                >
                  {prod.title}
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.98rem",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  {prod.artist}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <button className="btn btn-accent btn-large">See More Art & Crafts</button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
