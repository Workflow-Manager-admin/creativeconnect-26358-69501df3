import React, { useState } from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * MessagingSystem for ArtistryHub
 * Features:
 * - Searchable list of contacts (mock artists/buyers, with avatars and unread indicators)
 * - Clicking a contact shows chat history (mock, with timestamps and avatars)
 * - Chat input box for "sending" (UI-only) messages
 * - ArtistryHub modern maroon/gold/white styling
 */

// ---- MOCK DATA ---- //
const mockContacts = [
  {
    id: 1,
    name: "Sienna Carter",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "Artist",
    unread: 1,
    latest: "Looking forward to your design ideas! 😊",
    chat: [
      {
        fromSelf: false,
        message: "Hi! Any updates on the custom mug?",
        time: "2024-06-04T09:15:00Z"
      },
      {
        fromSelf: true,
        message: "Hi Sienna! Just sent a sketch in the previous message – can you check if that's the style you'd like?",
        time: "2024-06-04T09:18:00Z"
      },
      {
        fromSelf: false,
        message: "Looking forward to your design ideas! 😊",
        time: "2024-06-04T09:20:04Z"
      }
    ]
  },
  {
    id: 2,
    name: "Rita Okoye",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    type: "Artist",
    unread: 0,
    latest: "Thank you! I'll share weaving progress soon.",
    chat: [
      {
        fromSelf: true,
        message: "Hi Rita, will you be able to use gold threading for the design?",
        time: "2024-06-02T15:24:00Z"
      },
      {
        fromSelf: false,
        message: "Of course! Thank you! I'll share weaving progress soon.",
        time: "2024-06-02T15:28:33Z"
      }
    ]
  },
  {
    id: 3,
    name: "Alex Morgan",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    type: "Buyer",
    unread: 2,
    latest: "Thanks, I'll confirm payment today.",
    chat: [
      {
        fromSelf: false,
        message: "Thanks, I'll confirm payment today.",
        time: "2024-06-01T13:10:43Z"
      },
      {
        fromSelf: true,
        message: "Glad you like the draft! Let me know if you want any tweaks.",
        time: "2024-06-01T12:55:18Z"
      }
    ]
  },
  {
    id: 4,
    name: "Leah Tran",
    avatar: "https://randomuser.me/api/portraits/women/81.jpg",
    type: "Buyer",
    unread: 0,
    latest: "Will a teardrop pendant work for the glass design?",
    chat: [
      {
        fromSelf: false,
        message: "Will a teardrop pendant work for the glass design?",
        time: "2024-05-28T19:40:10Z"
      }
    ]
  }
];

// Helper: Format ISO string as short time
function formatTime(iso) {
  const d = new Date(iso);
  return d
    .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
    .replace(/:00/, "");
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function MessagingSystem() {
  const [contacts, setContacts] = useState(mockContacts);
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(contacts[0].id);
  const [messageInput, setMessageInput] = useState("");

  // Filter contacts with search
  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  const activeContact = contacts.find((c) => c.id === activeId);

  // Combine date boundaries in chat for display
  const getChatByDay = (chat) => {
    if (!chat.length) return [];
    const sections = [];
    let lastDate = null;
    for (let msg of chat) {
      const d = formatDate(msg.time);
      if (lastDate !== d) sections.push({ type: "day", label: d });
      sections.push(msg);
      lastDate = d;
    }
    return sections;
  };

  // Sending a message
  function handleSend() {
    if (!messageInput.trim()) return;
    // Add new message to activeContact's chat in state
    setContacts((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              chat: [
                ...c.chat,
                { fromSelf: true, message: messageInput.trim(), time: new Date().toISOString() }
              ],
              latest: messageInput.trim(),
              unread: 0 // no unread for our own sent
            }
          : c
      )
    );
    setMessageInput("");
  }

  // On click contact, mark as read
  function selectContact(id) {
    setActiveId(id);
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, unread: 0 } : c
      )
    );
  }

  return (
    <section style={{ padding: "32px 0", minHeight: 500 }}>
      <div className="card" style={{ display: "flex", flexDirection: "column", background: "var(--cc-white)", boxShadow: "var(--card-shadow)", maxWidth: 950, margin: "0 auto", minHeight: 530 }}>
        <div className="subtitle" style={{ color: "var(--cc-maroon)", marginBottom: 5, textAlign: "left" }}>
          Messaging System
        </div>
        <h1 className="title" style={{ color: "var(--cc-maroon)", fontSize: "2.05em", margin: "0 0 10px 0", textAlign: "left" }}>
          Your Chats
        </h1>
        <div className="description" style={{ color: "var(--text-secondary)", marginBottom: 20, fontSize: "1.03em" }}>
          Connect with buyers and creators – discuss custom orders, share ideas, or ask questions directly.
        </div>
        <div style={{
          display: "flex", 
          flexDirection: "row", 
          background: "var(--cc-grey-bg)",
          borderRadius: 13, 
          boxShadow: "0 1.5px 8px rgba(128,0,0,0.04)",
          minHeight: 375,
          border: "1px solid var(--cc-grey-border)",
          overflow: "hidden"
        }}>
          {/* --- CONTACTS LIST --- */}
          <aside style={{
            width: 274, minWidth: 170, background: "var(--cc-grey-bg)", borderRight: "1.5px solid var(--cc-grey-border)", padding: "17px 9px 10px 11px", overflowY: "auto"
          }}>
            <input
              placeholder="Search contacts"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "96%",
                padding: "8px 13px",
                background: "#fff",
                color: "var(--text-color)",
                borderRadius: 8,
                border: "1.5px solid var(--cc-grey-border)",
                fontSize: "1.01em",
                outline: "none",
                marginBottom: 16,
                fontFamily: "inherit"
              }}
              aria-label="Search contacts"
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {filtered.map(c => (
                <div
                  key={c.id}
                  onClick={() => selectContact(c.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: activeId === c.id ? "var(--cc-maroon)" : "#fff",
                    color: activeId === c.id ? "var(--cc-gold)" : "var(--text-color)",
                    border: activeId === c.id ? "1.5px solid var(--cc-gold)" : "1.5px solid var(--cc-grey-border)",
                    borderRadius: 8,
                    padding: "7.5px 10px",
                    marginBottom: 2,
                    fontWeight: activeId === c.id ? 600 : 500,
                    fontSize: "1.07em",
                    gap: 11,
                    boxShadow: activeId === c.id ? "0 2px 12px rgba(128,0,0,0.08)" : "none",
                    cursor: "pointer",
                    position: "relative",
                    minHeight: 54,
                    transition: "background .13s, border .13s, color .13s"
                  }}
                  tabIndex={0}
                  aria-label={`Open chat with ${c.name}`}
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    style={{
                      width: 41,
                      height: 41,
                      borderRadius: "50%",
                      border: activeId === c.id ? "2.2px solid var(--cc-gold)" : "2.2px solid var(--cc-maroon)",
                      marginRight: 7,
                      objectFit: "cover",
                      background: "#fff"
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: "bold", fontSize: "1.01em" }}>{c.name}</div>
                    <div style={{ fontSize: "0.91em", opacity: 0.92, color: activeId === c.id ? "#ffe25f" : "var(--text-secondary)" }}>
                      {c.latest.length > 34 ? c.latest.slice(0, 32) + "…" : c.latest}
                    </div>
                  </div>
                  {/* Unread indicator */}
                  {c.unread > 0 && (
                    <span style={{
                      display: "inline-block",
                      minWidth: 24,
                      background: "var(--cc-gold)",
                      color: "var(--cc-dark)",
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: 12.5,
                      padding: "1px 7px",
                      marginLeft: 8,
                      textAlign: "center",
                      boxShadow: "0 2px 7px rgba(232, 197, 23, 0.15)"
                    }}
                      title={`${c.unread} unread message${c.unread > 1 ? "s" : ""}`}
                    >
                      {c.unread}
                    </span>
                  )}
                </div>
              ))}
              {filtered.length === 0 && (
                <div style={{ opacity: 0.74, color: "var(--cc-maroon)", fontSize: "1.02em", textAlign: "center", padding: 19 }}>No contacts found.</div>
              )}
            </div>
          </aside>
          {/* --- CHAT WINDOW --- */}
          <main style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            minHeight: 375
          }}>
            {/* Header */}
            <section style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid var(--cc-grey-border)",
              padding: "12px 20px 10px 15px",
              background: "#f9f6fa"
            }}>
              {activeContact && (
                <>
                  <img
                    src={activeContact.avatar}
                    alt={activeContact.name}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      border: "2px solid var(--cc-gold)",
                      marginRight: 12,
                      objectFit: "cover"
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--cc-maroon)", fontSize: "1.14em" }}>
                      {activeContact.name}
                    </div>
                    <div style={{ fontSize: "0.94em", color: "var(--text-secondary)", marginTop: 1 }}>
                      {activeContact.type}
                    </div>
                  </div>
                </>
              )}
            </section>
            {/* Chat thread */}
            <section style={{
              flex: 1,
              overflowY: "auto",
              padding: "17px 14px 8px 14px",
              background: "#fff"
            }}>
              {activeContact ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  {getChatByDay(activeContact.chat).map((item, idx) =>
                    item.type === "day" ? (
                      <div
                        key={`day${idx}`}
                        style={{
                          textAlign: "center",
                          margin: "10px 0 7px 0",
                          color: "var(--cc-gold)",
                          fontWeight: 600,
                          fontSize: "0.99em"
                        }}
                      >
                        {item.label}
                      </div>
                    ) : (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          flexDirection: item.fromSelf ? "row-reverse" : "row",
                          alignItems: "flex-end"
                        }}
                      >
                        {/* Avatar */}
                        <img
                          src={activeContact.avatar}
                          alt={activeContact.name}
                          style={{
                            width: 29,
                            height: 29,
                            borderRadius: "50%",
                            border: item.fromSelf ? "2px solid var(--cc-maroon)" : "2px solid var(--cc-gold)",
                            margin: item.fromSelf ? "0 0 0 8px" : "0 8px 0 0",
                            objectFit: "cover",
                            boxShadow: item.fromSelf
                              ? "0 2px 7px rgba(128,0,0,0.09)"
                              : "0 2px 7px rgba(232,197,23,0.09)"
                          }}
                        />
                        {/* Bubble */}
                        <div style={{
                          background: item.fromSelf ? "var(--cc-maroon)" : "var(--cc-gold)",
                          color: item.fromSelf ? "var(--cc-gold)" : "var(--cc-dark)",
                          borderRadius: item.fromSelf ? "15px 15px 9px 15px" : "15px 15px 15px 9px",
                          border: "1.1px solid var(--cc-maroon)",
                          padding: "10px 17px 8px 14px",
                          fontSize: "1.02em",
                          minWidth: 30,
                          maxWidth: 405,
                          fontWeight: 500,
                          boxShadow: "0 1px 5px rgba(128,0,0,0.06)",
                          textAlign: "left"
                        }}>
                          {item.message}
                          <span style={{
                            display: "block",
                            marginTop: 4,
                            fontSize: "0.84em",
                            color: item.fromSelf ? "#ffe25f" : "var(--cc-maroon)",
                            fontWeight: 400,
                            textAlign: "right"
                          }}>
                            {formatTime(item.time)}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                  {/* Empty message stub */}
                  {activeContact.chat.length === 0 && (
                    <div style={{ color: "var(--text-secondary)", opacity: 0.87 }}>No messages yet. Say hello!</div>
                  )}
                </div>
              ) : (
                <div style={{ margin: "auto", fontSize: "1.1em", color: "var(--cc-maroon)" }}>
                  Select a contact to start chatting
                </div>
              )}
            </section>
            {/* Message Input */}
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSend();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                borderTop: "1px solid var(--cc-grey-border)",
                padding: "11px 16px",
                background: "#f9f6fa"
              }}
              autoComplete="off"
            >
              <input
                type="text"
                value={messageInput}
                placeholder="Type your message..."
                onChange={e => setMessageInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: "9px 15px",
                  borderRadius: 7,
                  border: "1.5px solid var(--cc-grey-border)",
                  fontSize: "1.07em",
                  fontFamily: "inherit"
                }}
                aria-label="Message"
              />
              <button
                type="submit"
                className="btn btn-accent"
                style={{
                  fontWeight: 700,
                  fontSize: "1.08em",
                  minWidth: 64,
                  opacity: messageInput.trim() ? 1 : 0.55,
                  background: messageInput.trim() ? "var(--cc-gold)" : "#ffeaa8",
                  color: "var(--cc-dark)",
                  cursor: messageInput.trim() ? "pointer" : "not-allowed"
                }}
                disabled={!messageInput.trim()}
              >
                Send
              </button>
            </form>
          </main>
        </div>
      </div>
    </section>
  );
}

export default MessagingSystem;
