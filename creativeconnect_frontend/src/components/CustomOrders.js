import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * CustomOrders component for ArtistryHub
 * Shows a list of custom order requests, each with an attached message thread (buyer↔artist),
 * including timestamps. All data is mock/sample, styled for clarity and brand continuity.
 * Suitable for integrating under the "Custom Orders" feature.
 */

const mockOrders = [
  {
    id: 101,
    title: "Custom Ceramic Mug",
    buyer: {
      name: "Alex Morgan",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    artist: {
      name: "Sienna Carter",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    requestedOn: "2024-06-02T10:13:00Z",
    status: "Pending",
    messages: [
      {
        from: "buyer",
        body: "Hi Sienna! Could you make a mug with mountain scenery and my dog's name?",
        timestamp: "2024-06-02T10:13:12Z",
      },
      {
        from: "artist",
        body: "Hi Alex, absolutely! Would you prefer earthy tones or something more vibrant?",
        timestamp: "2024-06-02T10:22:43Z",
      },
      {
        from: "buyer",
        body: "Earthy is perfect. My dog's name is Otis :)",
        timestamp: "2024-06-02T10:23:20Z",
      },
      {
        from: "artist",
        body: "Got it! I’ll sketch a concept and send it here soon.",
        timestamp: "2024-06-02T10:24:41Z",
      },
    ],
  },
  {
    id: 102,
    title: "Personalized Glass Pendant",
    buyer: {
      name: "Leah Tran",
      avatar: "https://randomuser.me/api/portraits/women/81.jpg",
    },
    artist: {
      name: "Eli Nguyen",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    requestedOn: "2024-06-01T16:55:00Z",
    status: "Artist replied",
    messages: [
      {
        from: "buyer",
        body: "Hi Eli! I’d like a pendant with turquoise and amber swirl. Is that possible?",
        timestamp: "2024-06-01T16:55:10Z",
      },
      {
        from: "artist",
        body: "Hi Leah, that combo sounds beautiful! I have glass in those colors. What pendant shape do you prefer?",
        timestamp: "2024-06-01T17:10:01Z",
      },
      {
        from: "buyer",
        body: "Maybe a teardrop or oval shape works for me!",
        timestamp: "2024-06-01T17:13:29Z",
      },
      {
        from: "artist",
        body: "Great! I’ll send photos of both as options.",
        timestamp: "2024-06-01T17:14:55Z",
      },
    ],
  },
  {
    id: 103,
    title: "Handwoven Basket with Gold Accent",
    buyer: {
      name: "Dalia Mendez",
      avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    artist: {
      name: "Rita Okoye",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    requestedOn: "2024-05-31T09:05:00Z",
    status: "In Progress",
    messages: [
      {
        from: "buyer",
        body: "Hi Rita, can you weave a 12-inch basket with gold threads for a gift?",
        timestamp: "2024-05-31T09:05:13Z",
      },
      {
        from: "artist",
        body: "Hi Dalia! Absolutely, I’ll select my best gold thread for this one.",
        timestamp: "2024-05-31T09:07:02Z",
      },
      {
        from: "buyer",
        body: "Thank you! Is it possible to add a gift note as well?",
        timestamp: "2024-05-31T09:11:00Z",
      },
      {
        from: "artist",
        body: "Of course! Please send me the text for your note 😊",
        timestamp: "2024-05-31T09:14:36Z",
      },
    ],
  },
];

// Helper to format timestamps (e.g., June 1, 2024 5:14PM)
function formatDateTime(isoStr) {
  const date = new Date(isoStr);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const CustomOrders = () => (
  <section style={{ padding: "30px 0" }}>
    <div className="card" style={{ background: "var(--cc-white)" }}>
      <div className="subtitle" style={{ marginBottom: 8, color: "var(--cc-maroon)", fontWeight: 600 }}>
        Custom Order Requests
      </div>
      <h1 className="title" style={{ color: "var(--cc-maroon)", marginBottom: 12 }}>
        Mock Orders With Artist-Buyer Messages
      </h1>
      <div className="description" style={{ color: "var(--text-secondary)", marginBottom: 18 }}>
        View your ongoing custom orders, and see message history between you and the artist for each commission.
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "38px",
        paddingBottom: 8,
      }}>
        {mockOrders.map(order => (
          <div
            key={order.id}
            className="card"
            style={{
              border: "1.5px solid var(--cc-gold)",
              borderRadius: 15,
              background: "#fff",
              padding: "26px 18px 18px 18px",
              boxShadow: "var(--card-shadow)",
              marginBottom: 0,
            }}
          >
            <div className="flex align-center" style={{ gap: 14, marginBottom: 6 }}>
              <img
                src={order.buyer.avatar}
                alt={`${order.buyer.name} avatar`}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "100%",
                  border: "2px solid var(--cc-gold)",
                  marginRight: 5,
                  objectFit: "cover",
                }}
              />
              <span style={{ fontWeight: 700, color: "var(--cc-maroon)", fontSize: "1.08em" }}>
                {order.buyer.name}
              </span>
              <span style={{
                color: "#888",
                fontWeight: 500,
                fontSize: 13,
                marginLeft: 8,
                marginRight: 4,
              }}>ordered</span>
              <span style={{
                color: "var(--cc-gold)",
                fontWeight: 700,
                fontSize: "1.11em",
                marginRight: 10,
              }}>{order.title}</span>
              <span style={{
                color: "#afaaa2",
                fontWeight: 500,
                fontSize: "0.98em",
                marginLeft: "auto"
              }}>
                {formatDateTime(order.requestedOn)}
              </span>
              <span
                style={{
                  background: "var(--cc-gold)",
                  color: "var(--cc-dark)",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: 13,
                  padding: "2px 10px",
                  marginLeft: 8,
                }}
              >
                {order.status}
              </span>
            </div>
            {/* ORDER MESSAGE THREAD */}
            <div
              style={{
                marginTop: 12,
                background: "var(--cc-grey-bg)",
                borderRadius: 11,
                padding: "14px 15px 9px 15px",
                minHeight: 62,
                boxShadow: "0 1px 7px rgba(128,0,0,0.03)",
              }}
            >
              <div style={{
                fontWeight: 700,
                color: "var(--cc-maroon)",
                marginBottom: 5,
                fontSize: "1.08em"
              }}>
                <span className="text-maroon" style={{ marginRight: 7 }}>
                  Messages
                </span>
                <span style={{
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                  fontSize: "0.97em"
                }}>
                  (Buyer &mdash; <img alt="buyer icon" src={order.buyer.avatar} style={{ width: 18, height: 18, borderRadius: "50%", margin: "0 2px -4px 2px" }} />
                  : Artist &mdash; <img alt="artist icon" src={order.artist.avatar} style={{ width: 18, height: 18, borderRadius: "50%", margin: "0 2px -4px 2px" }} />)
                </span>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 7,
                marginTop: 3,
              }}>
                {order.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: msg.from === "buyer" ? "row" : "row-reverse",
                      alignItems: "flex-end",
                      gap: 9,
                    }}
                  >
                    <img
                      src={msg.from === "buyer" ? order.buyer.avatar : order.artist.avatar}
                      alt={msg.from === "buyer" ? order.buyer.name : order.artist.name}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1.5px solid var(--cc-gold)",
                        objectFit: "cover",
                        marginBottom: -2,
                        boxShadow: msg.from === "artist"
                          ? "0 2px 7px rgba(232,197,23,0.09)"
                          : "0 2px 7px rgba(128,0,0,0.11)"
                      }}
                      title={msg.from === "buyer" ? order.buyer.name : order.artist.name}
                    />
                    <div
                      style={{
                        background: msg.from === "buyer"
                          ? "var(--cc-white)"
                          : "var(--cc-maroon)",
                        color: msg.from === "buyer"
                          ? "var(--text-color)"
                          : "var(--cc-gold)",
                        border: "1px solid var(--cc-gold)",
                        borderRadius: msg.from === "buyer"
                          ? "12px 12px 12px 6px"
                          : "12px 12px 6px 12px",
                        padding: "9px 14px 7.5px 14px",
                        fontWeight: 500,
                        fontSize: "1em",
                        maxWidth: 450,
                        boxShadow: "0 1px 6px rgba(128,0,0,0.06)",
                        wordBreak: "break-word",
                        marginLeft: msg.from === "buyer" ? 0 : "auto",
                        marginRight: msg.from === "artist" ? 0 : "auto",
                        textAlign: "left"
                      }}
                    >
                      {msg.body}
                      <span
                        style={{
                          display: "block",
                          marginTop: 4,
                          fontSize: "0.88em",
                          color: msg.from === "buyer"
                            ? "var(--text-secondary)"
                            : "#ffe25f",
                          fontWeight: 400,
                          textAlign: "right"
                        }}
                      >
                        {formatDateTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomOrders;
