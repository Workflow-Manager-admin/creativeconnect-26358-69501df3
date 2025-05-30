import React, { useState } from "react";
import "../App.css";

/*
  PUBLIC_INTERFACE
  CustomOrders component for ArtistryHub (revamped)
  - Shows a visually engaging, detailed list of custom order requests.
  - Includes: order status tracker, order info (title, desc, deadlines, budget), expanded mock data,
    artist/buyer/creator info, and improved form UI (demo-only).
  - All on-brand with maroon/gold/white, modern cards, usability improvements.
*/

// Expanded mock (demo) data for richer detail.
const mockOrders = [
  {
    id: 201,
    title: "Custom Ceramic Mug (Mountain Scene)",
    description:
      "A custom hand-thrown mug featuring layered blue-green mountain scenery and the name 'Otis' hand-lettered.",
    budget: 45,
    currency: "USD",
    deadlines: {
      request: "2024-06-02",
      artistReply: "2024-06-03",
      completion: "2024-06-18",
      delivery: "2024-06-22",
    },
    status: "In Progress",
    statusSteps: [
      { label: "Requested", date: "2024-06-02" },
      { label: "Artist Replied", date: "2024-06-03" },
      { label: "In Progress", date: "2024-06-06" },
    ],
    buyer: {
      name: "Alex Morgan",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    artist: {
      name: "Sienna Carter",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      portfolioUrl: "#",
    },
    requestedOn: "2024-06-02T10:13:00Z",
    lastUpdate: "2024-06-08T09:12:15Z",
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
    id: 202,
    title: "Personalized Glass Pendant (Turquoise/Amber)",
    description:
      "A hand-fused pendant in a teardrop shape, mixing turquoise and amber. Modern aesthetic, suitable for gifting.",
    budget: 30,
    currency: "USD",
    deadlines: {
      request: "2024-06-01",
      artistReply: "2024-06-01",
      completion: "2024-06-10",
      delivery: "2024-06-14",
    },
    status: "Artist Replied",
    statusSteps: [
      { label: "Requested", date: "2024-06-01" },
      { label: "Artist Replied", date: "2024-06-01" },
    ],
    buyer: {
      name: "Leah Tran",
      avatar: "https://randomuser.me/api/portraits/women/81.jpg",
    },
    artist: {
      name: "Eli Nguyen",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    requestedOn: "2024-06-01T16:55:00Z",
    lastUpdate: "2024-06-04T19:22:18Z",
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
    id: 203,
    title: "Handwoven Basket with Gold Accent (Gift Order)",
    description:
      "Basket ~12\" with shimmering gold accent thread, custom-shaped to a modern oval. Kindly include a gift note: 'With love & gratitude, enjoy!'.",
    budget: 55,
    currency: "USD",
    deadlines: {
      request: "2024-05-31",
      artistReply: "2024-05-31",
      completion: "2024-06-16",
      delivery: "2024-06-20",
    },
    status: "Pending",
    statusSteps: [{ label: "Requested", date: "2024-05-31" }],
    buyer: {
      name: "Dalia Mendez",
      avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    artist: {
      name: "Rita Okoye",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    requestedOn: "2024-05-31T09:05:00Z",
    lastUpdate: "2024-05-31T09:07:02Z",
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

// Helper to format timestamps
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

// Order status color mapping
const statusColors = {
  "Pending": "#ffeaa8",
  "Artist Replied": "var(--cc-gold)",
  "In Progress": "#fffbe2",
  "Completed": "#a5e88c",
  "Delivered": "#e8c517"
};

// --- Status Tracker (stepper bar) ---
function OrderStatusTracker({ statusSteps, currentStatus }) {
  // Logic: step is "active" if reached; show dots + dates.
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 0,
      margin: "8px 0 18px 0",
      paddingLeft: 1,
      minHeight: 34
    }}>
      {statusSteps.map((step, idx) => (
        <React.Fragment key={step.label}>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", minWidth: 64
          }}>
            <span style={{
              display: "inline-block",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: currentStatus === step.label ? "var(--cc-maroon)" : "var(--cc-gold)",
              border: currentStatus === step.label ? "2px solid var(--cc-gold)" : "2.5px solid var(--cc-grey-border)",
              boxShadow: currentStatus === step.label
                ? "0 1.5px 6px #80000040"
                : "0 0.5px 4px #ffd10435",
              marginBottom: 1.5,
              transition: "background .18s"
            }}></span>
            <span style={{
              fontSize: "0.97em",
              fontWeight: 600,
              letterSpacing: "0.01em",
              color:
                currentStatus === step.label
                  ? "var(--cc-maroon)"
                  : "var(--text-secondary)"
            }}>{step.label}</span>
            <span style={{
              fontSize: "0.84em",
              color: "#baa173",
              marginTop: -1,
            }}>
              {step.date}
            </span>
          </div>
          {idx !== statusSteps.length - 1 && (
            <div style={{
              flex: 1,
              height: 2.3,
              background: currentStatus === statusSteps[idx + 1].label
                ? "linear-gradient(90deg, var(--cc-gold) 60%, var(--cc-maroon) 100%)"
                : "var(--cc-grey-border)",
              margin: "0 2.5px",
              borderRadius: 2
            }}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// --- Order Form (Demo) ---
function OrderRequestForm({ onMockSubmit }) {
  const [fields, setFields] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
    artist: "",
    buyer: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setError("");
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!(fields.title && fields.description && fields.budget && fields.deadline)) {
      setError("Fill in all required fields.");
      return;
    }
    setSubmitted(true);
    if (onMockSubmit) onMockSubmit(fields);
  }
  if (submitted) {
    return (
      <div
        className="card"
        style={{
          color: "var(--cc-maroon)",
          textAlign: "center",
          background: "#fffbe2",
          border: "1.5px solid var(--cc-gold)",
          fontWeight: 700,
          fontSize: "1.13em",
        }}
      >
        🎨 Order submitted (mock)!<br />
        <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
          (This is a demo. No order was sent.)
        </span>
      </div>
    );
  }
  return (
    <form
      className="card"
      style={{
        background: "var(--cc-grey-bg)",
        boxShadow: "none",
        border: "1.5px solid var(--cc-grey-border)",
        marginBottom: 16,
        padding: "20px 19px",
        maxWidth: 520,
        margin: "0 auto 23px auto",
      }}
      onSubmit={onSubmit}
      autoComplete="off"
      aria-label="Custom order request form"
    >
      <div style={{ fontWeight: 800, color: "var(--cc-maroon)", marginBottom: 13 }}>
        Request a Custom Order
      </div>
      <div className="grid" style={{ gap: 13 }}>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 700, fontSize: "1em" }}>
          Order Title<span style={{ color: "var(--cc-gold)", fontWeight: 800 }}>*</span>
          <input
            name="title"
            value={fields.title}
            onChange={handleChange}
            required
            style={{
              border: "1.2px solid var(--cc-maroon)",
              borderRadius: 8,
              padding: "7px 13px",
              fontFamily: "inherit",
              fontSize: "1.05em",
              marginTop: 2,
            }}
            placeholder="e.g. Personalized Mug"
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 700, fontSize: "1em" }}>
          Description<span style={{ color: "var(--cc-gold)", fontWeight: 800 }}>*</span>
          <textarea
            name="description"
            value={fields.description}
            onChange={handleChange}
            required
            style={{
              border: "1.2px solid var(--cc-maroon)",
              borderRadius: 8,
              padding: "7px 13px",
              fontFamily: "inherit",
              fontSize: "1em",
              marginTop: 2,
              minHeight: 54,
            }}
            placeholder="Add style, color, personalization details, etc."
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 700, fontSize: "1em" }}>
          Budget (USD)<span style={{ color: "var(--cc-gold)", fontWeight: 800 }}>*</span>
          <input
            name="budget"
            value={fields.budget}
            onChange={handleChange}
            required
            type="number"
            min={1}
            step={0.1}
            style={{
              border: "1.2px solid var(--cc-maroon)",
              borderRadius: 8,
              padding: "7px 13px",
              fontFamily: "inherit",
              fontSize: "1em",
              marginTop: 2,
            }}
            placeholder="Estimate your budget"
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", fontWeight: 700, fontSize: "1em" }}>
          Deadline<span style={{ color: "var(--cc-gold)", fontWeight: 800 }}>*</span>
          <input
            type="date"
            name="deadline"
            value={fields.deadline}
            onChange={handleChange}
            required
            style={{
              border: "1.2px solid var(--cc-maroon)",
              borderRadius: 8,
              padding: "7px 13px",
              fontFamily: "inherit",
              fontSize: "1em",
              marginTop: 2,
            }}
          />
        </label>
      </div>
      <div style={{ marginTop: 14, color: "var(--cc-maroon)", fontWeight: 600, fontSize: "1em" }}>{error}</div>
      <button
        type="submit"
        className="btn btn-accent btn-large"
        style={{
          marginTop: "18px",
          width: "100%",
          fontWeight: 800,
          fontSize: "1.09em",
          borderRadius: 8,
        }}
      >
        Submit Custom Order
      </button>
    </form>
  );
}

const CustomOrders = () => {
  // Demo: allow form submit, doesn't alter orders
  const [dummy, setDummy] = useState(false);

  return (
    <section style={{ padding: "30px 0" }}>
      <div className="card" style={{ background: "var(--cc-white)", boxShadow: "var(--card-shadow)" }}>
        <div className="subtitle" style={{ marginBottom: 8, color: "var(--cc-maroon)", fontWeight: 600 }}>
          Custom Orders Dashboard
        </div>
        <h1 className="title" style={{ color: "var(--cc-maroon)", marginBottom: 12 }}>
          Detailed Orders & Messaging
        </h1>
        <div className="description" style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Review your detailed order history, message threads, and track status for each custom commission — all on-brand!
        </div>

        <OrderRequestForm onMockSubmit={() => setDummy(x => !x)} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "41px",
            paddingBottom: 8,
          }}
        >
          {/* Each order */}
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="card"
              style={{
                border: "2px solid var(--cc-gold)",
                borderRadius: 18,
                background: "#fff",
                padding: "28px 22px 21px 22px",
                boxShadow: "var(--card-shadow)",
                marginBottom: 0,
                marginTop: 4,
                position: "relative"
              }}
            >
              {/* Order header: Title, status, basic info */}
              <div className="flex align-center" style={{ gap: 17, marginBottom: 11, flexWrap: "wrap" }}>
                <img
                  src={order.buyer.avatar}
                  alt={`${order.buyer.name} avatar`}
                  style={{
                    width: 43,
                    height: 43,
                    borderRadius: "100%",
                    border: "2px solid var(--cc-gold)",
                    marginRight: 5,
                    objectFit: "cover",
                  }}
                />
                <span style={{ fontWeight: 700, color: "var(--cc-maroon)", fontSize: "1.12em" }}>
                  {order.buyer.name}
                </span>
                <span style={{
                  color: "#888",
                  fontWeight: 500,
                  fontSize: 13,
                  margin: "0 4px 0 10px"
                }}>orders</span>
                <span style={{
                  color: "var(--cc-gold)",
                  fontWeight: 700,
                  fontSize: "1.11em",
                  marginRight: 8,
                  letterSpacing: ".01em",
                }}>
                  {order.title}
                </span>
                <span style={{
                  background: statusColors[order.status] || "var(--cc-gold)",
                  color: "var(--cc-maroon)",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "3px 15px",
                  marginLeft: 10,
                  border: order.status === "In Progress" ? "2.2px solid var(--cc-gold)" : "none",
                  boxShadow: order.status === "In Progress" ? "0 1px 7px #ffe25f50" : "none",
                  display: "inline-block"
                }}>
                  {order.status}
                </span>
                <span style={{
                  color: "#afaaa2",
                  fontWeight: 500,
                  fontSize: "0.98em",
                  marginLeft: "auto"
                }}>
                  Requested: {formatDateTime(order.requestedOn)}
                </span>
              </div>
              {/* Order status tracker/stepper */}
              <OrderStatusTracker statusSteps={order.statusSteps} currentStatus={order.status} />
              {/* Collapsible main info/details  (no collapse on mock demo) */}
              <div className="grid" style={{ gridTemplateColumns: "3fr 1.6fr", gap: 23, alignItems: "start", marginBottom: 14, flexWrap: "wrap" }}>
                <div>
                  <div style={{ marginBottom: 5, color: "var(--cc-gold)", fontWeight: 700, letterSpacing: ".01em" }}>Order Description</div>
                  <div style={{
                    color: "var(--text-secondary)",
                    background: "var(--cc-grey-bg)",
                    padding: "11px 14px",
                    borderRadius: 9,
                    fontSize: "1.08em",
                    fontWeight: 500,
                  }}>
                    {order.description}
                  </div>
                  <div className="flex align-center" style={{ gap: 15, marginTop: 8, fontSize: "0.98em", color: "var(--cc-maroon)", fontWeight: 600 }}>
                    <span>Budget: <span style={{ color: "var(--cc-gold)", fontWeight: 700 }}>${order.budget} {order.currency}</span></span>
                    <span style={{ color: "var(--text-secondary)" }}>
                      Delivery by: <b style={{ color: "var(--cc-maroon)", fontWeight: 700 }}>{order.deadlines.delivery}</b>
                    </span>
                  </div>
                  <div style={{ marginTop: 7, color: "var(--text-secondary)", fontSize: ".99em" }}>
                    Last update: {formatDateTime(order.lastUpdate)}
                  </div>
                </div>
                <div className="card" style={{
                  background: "#f9f6fa",
                  border: "1.1px solid var(--cc-grey-border)",
                  borderRadius: 12,
                  padding: "12px 15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                  alignItems: "flex-start"
                }}>
                  <div className="flex align-center" style={{ gap: 11 }}>
                    <img
                      src={order.artist.avatar}
                      alt="Artist Avatar"
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        border: "2px solid var(--cc-gold)",
                        objectFit: "cover"
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--cc-maroon)", marginBottom: -1 }}>
                        {order.artist.name}<span style={{ color: "#baa173", fontSize: ".97em", fontWeight: 500, marginLeft: 3 }}>(Artist)</span>
                      </div>
                      <div>
                        <a
                          href={order.artist.portfolioUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--cc-maroon)",
                            textDecoration: "underline dotted",
                            fontSize: "0.96em",
                            fontWeight: 600,
                          }}
                          tabIndex={1}
                        >View Portfolio</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex align-center" style={{ gap: 9, marginTop: 6 }}>
                    <img
                      src={order.buyer.avatar}
                      alt="Buyer Avatar"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        border: "1.6px solid var(--cc-grey-border)",
                        objectFit: "cover"
                      }}
                    />
                    <div style={{ fontWeight: 600, color: "var(--cc-gold)", fontSize: ".99em" }}>{order.buyer.name} <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>(Buyer)</span></div>
                  </div>
                </div>
              </div>
              {/* ORDER MESSAGE THREAD */}
              <div
                style={{
                  marginTop: 17,
                  background: "var(--cc-grey-bg)",
                  borderRadius: 11,
                  padding: "16px 16px 10px 15px",
                  minHeight: 62,
                  boxShadow: "0 1px 7px rgba(128,0,0,0.03)",
                  border: "1.2px solid var(--cc-grey-border)",
                }}
              >
                <div style={{
                  fontWeight: 800,
                  color: "var(--cc-maroon)",
                  marginBottom: 6,
                  fontSize: "1.09em",
                  letterSpacing: ".01em"
                }}>
                  Message Thread
                  <span style={{
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                    fontSize: "0.97em",
                    marginLeft: 10
                  }}>
                    (Buyer <img alt="buyer icon" src={order.buyer.avatar} style={{ width: 17, height: 17, borderRadius: "50%", margin: "0 2px -4px 1px" }} /> | Artist <img alt="artist icon" src={order.artist.avatar} style={{ width: 17, height: 17, borderRadius: "50%", margin: "0 2px -4px 2px" }} />)
                  </span>
                </div>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginTop: 4,
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
                          width: 29,
                          height: 29,
                          borderRadius: "50%",
                          border: "1.4px solid var(--cc-gold)",
                          objectFit: "cover",
                          marginBottom: -2,
                          boxShadow: msg.from === "artist"
                            ? "0 2px 7px #ffe25f55"
                            : "0 2px 7px #80000022"
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
                          border: "1.1px solid var(--cc-gold)",
                          borderRadius: msg.from === "buyer"
                            ? "12px 12px 12px 5.5px"
                            : "12px 12px 5.5px 12px",
                          padding: "10px 15px 8px 15px",
                          fontWeight: 500,
                          fontSize: "1em",
                          maxWidth: 450,
                          boxShadow: "0 1px 6px rgba(128,0,0,0.07)",
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
                            fontSize: "0.86em",
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
};

export default CustomOrders;
