import React, { useState } from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * Modernized BehindTheScenes component for CreativeConnect
 * Features:
 * - Behind-the-scenes story feed with artist/media filtering
 * - Media carousel per story (images/videos)
 * - Like/react to each story with count
 * - Comment system for each story (inline or mock data)
 * - Stylish, responsive, on-brand design
 */

// Demo media for carousel & varied mock data
const mockStories = [
  {
    id: 1,
    creator: "Sienna Carter",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      },
    ],
    timestamp: "2 minutes ago",
    description: "First glaze layer drying! I love how the colors are coming alive. Can't wait to fire this piece tonight. #ceramicprocess",
    artist: "Sienna Carter",
    medium: "Ceramics",
    comments: [
      { user: "Alex Morgan", avatar: "https://randomuser.me/api/portraits/men/19.jpg", text: "Looks amazing! Can't wait to see the result." },
    ],
    likes: 7,
    userLiked: false,
  },
  {
    id: 2,
    creator: "Jonas Feld",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      },
      {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60"
      },
    ],
    timestamp: "10 minutes ago",
    description: "Nature walk inspiration for my next pottery collection 🌿. Snapped some mossy textures to try in today's session.",
    artist: "Jonas Feld",
    medium: "Pottery",
    comments: [
      { user: "Rita Okoye", avatar: "https://randomuser.me/api/portraits/women/32.jpg", text: "Love how you bring nature into everything you do!" }
    ],
    likes: 5,
    userLiked: false,
  },
  {
    id: 3,
    creator: "Claire Ko",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1526178613658-3f1622045574?auto=format&fit=crop&w=600&q=80",
      }
    ],
    timestamp: "22 minutes ago",
    description: "Mixing custom shades for a 'wildflower' illustration. Mixing paint is half the magic! Here’s my setup before I start sketching.",
    artist: "Claire Ko",
    medium: "Illustration",
    comments: [],
    likes: 9,
    userLiked: false,
  },
  {
    id: 4,
    creator: "Rita Okoye",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      }
    ],
    timestamp: "32 minutes ago",
    description: "Weaving in golden thread for accent—see the shimmer? Each basket I make gets a unique touch inspired by my grandmother’s tradition.",
    artist: "Rita Okoye",
    medium: "Weaving",
    comments: [
      { user: "Eli Nguyen", avatar: "https://randomuser.me/api/portraits/men/14.jpg", text: "That golden thread is a beautiful accent, very unique!" }
    ],
    likes: 4,
    userLiked: false,
  },
  {
    id: 5,
    creator: "Eli Nguyen",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      }
    ],
    timestamp: "40 minutes ago",
    description: "Behind the scenes of the 'Fused Glass Pendant'—assembling tiny fragments before firing at 1400°F. #glassart #creativeprocess",
    artist: "Eli Nguyen",
    medium: "Glass Art",
    comments: [],
    likes: 2,
    userLiked: false,
  },
];

// Extract unique artists and mediums for filter dropdowns
const getUnique = (arr, key) => Array.from(new Set(arr.map(i => i[key])));

function StoryCarousel({ media }) {
  const [idx, setIdx] = useState(0);

  if (!media || media.length === 0) return null;

  const current = media[idx];

  function prev(e) {
    e.stopPropagation();
    setIdx(i => (i - 1 + media.length) % media.length);
  }
  function next(e) {
    e.stopPropagation();
    setIdx(i => (i + 1) % media.length);
  }

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 180, minHeight: 110, aspectRatio: "4/3" }}>
      <div
        style={{
          borderRadius: 12,
          background: "#f9f6fa",
          border: "1.7px solid var(--cc-grey-border)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 110
        }}
      >
        {current.type === "image" ? (
          <img
            src={current.url}
            alt="Behind the scenes"
            style={{
              width: "100%",
              height: 130,
              maxWidth: 180,
              objectFit: "cover",
              transition: "opacity .3s"
            }}
          />
        ) : (
          <video
            src={current.url}
            controls
            poster={current.thumbnail || undefined}
            style={{
              width: "100%",
              height: 130,
              maxWidth: 180,
              objectFit: "cover",
              background: "#222",
              border: "none"
            }}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {media.length > 1 && (
        <>
          <button
            onClick={prev}
            title="Previous"
            aria-label="Previous media"
            style={{
              position: "absolute",
              left: 3,
              top: "42%",
              background: "var(--cc-maroon)",
              color: "var(--cc-gold)",
              borderRadius: "100%",
              width: 23,
              height: 23,
              border: "none",
              fontWeight: 700,
              fontSize: "1.13em",
              boxShadow: "0 1px 5px #80000013",
              opacity: .85,
              cursor: "pointer",
              zIndex: 2,
              padding: 0,
            }}
          >&lt;</button>
          <button
            onClick={next}
            title="Next"
            aria-label="Next media"
            style={{
              position: "absolute",
              right: 3,
              top: "42%",
              background: "var(--cc-maroon)",
              color: "var(--cc-gold)",
              borderRadius: "100%",
              width: 23,
              height: 23,
              border: "none",
              fontWeight: 700,
              fontSize: "1.13em",
              boxShadow: "0 1px 5px #80000013",
              opacity: .85,
              cursor: "pointer",
              zIndex: 2,
              padding: 0,
            }}
          >&gt;</button>
          <div style={{
            position: "absolute",
            bottom: 5,
            right: 8,
            display: "flex",
            gap: 2,
            zIndex: 2
          }}>
            {media.map((_, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: i === idx ? "var(--cc-gold)" : "#ffeaa879",
                  margin: 1
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function BehindTheScenes() {
  // State for filter and stories (simulate feed interactivity)
  const [filterArtist, setFilterArtist] = useState("");
  const [filterMedium, setFilterMedium] = useState("");
  const [stories, setStories] = useState(mockStories);

  function handleLike(storyId) {
    setStories(stories =>
      stories.map(story =>
        story.id === storyId
          ? {
              ...story,
              likes: story.userLiked ? story.likes - 1 : story.likes + 1,
              userLiked: !story.userLiked
            }
          : story
      )
    );
  }

  function handleComment(storyId, text) {
    if (!text.trim()) return;
    setStories(stories =>
      stories.map(story =>
        story.id === storyId
          ? {
              ...story,
              comments: [
                ...story.comments,
                {
                  user: "You",
                  avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
                  text
                }
              ]
            }
          : story
      )
    );
  }

  // Filtering logic
  const filteredStories = stories.filter(s =>
    (!filterArtist || s.artist === filterArtist) &&
    (!filterMedium || s.medium === filterMedium)
  );

  // Filter dropdown options
  const artistOptions = getUnique(mockStories, "artist");
  const mediumOptions = getUnique(mockStories, "medium");

  return (
    <section style={{ padding: "28px 0" }}>
      <div className="card" style={{ background: "var(--cc-white)", boxShadow: "var(--card-shadow)", maxWidth: 900, margin: "0 auto" }}>
        <div className="subtitle" style={{ marginBottom: 8 }}>
          Behind-the-Scenes Stories
        </div>
        <h1 className="title" style={{ color: "var(--cc-maroon)", marginBottom: 13, letterSpacing: ".01em" }}>
          Journey Into Creation
        </h1>
        <div className="description" style={{ marginBottom: 22, color: "var(--text-secondary)", textAlign: "center" }}>
          Step into the creative process! Artists share live stories, photos, and moments from their studios and workbenches. Get inspired.
        </div>
        {/* Filters */}
        <div style={{
          display: "flex",
          gap: 17,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}>
          <span style={{ color: "var(--cc-maroon)", fontWeight: 600, fontSize: "1.01em" }}>
            Filter by:
          </span>
          <select
            value={filterArtist}
            onChange={e => setFilterArtist(e.target.value)}
            style={{
              padding: "8px 14px",
              borderRadius: 7,
              border: "1.3px solid var(--cc-maroon)",
              color: "var(--cc-maroon)",
              fontWeight: 700,
              fontFamily: "inherit"
            }}
            aria-label="Filter by artist"
          >
            <option value="">All Artists</option>
            {artistOptions.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          <select
            value={filterMedium}
            onChange={e => setFilterMedium(e.target.value)}
            style={{
              padding: "8px 14px",
              borderRadius: 7,
              border: "1.3px solid var(--cc-maroon)",
              color: "var(--cc-maroon)",
              fontWeight: 700,
              fontFamily: "inherit"
            }}
            aria-label="Filter by medium"
          >
            <option value="">All Media</option>
            {mediumOptions.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          {(filterArtist || filterMedium) && (
            <button
              onClick={() => { setFilterArtist(""); setFilterMedium(""); }}
              className="btn"
              style={{
                fontSize: "0.96em",
                background: "var(--cc-grey-bg)",
                color: "var(--cc-maroon)",
                border: "1.5px solid var(--cc-maroon)",
                borderRadius: 8,
                marginLeft: 10,
                fontWeight: 600
              }}
            >Reset</button>
          )}
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          maxWidth: 820,
          margin: "0 auto",
        }}>
          {filteredStories.length === 0 && (
            <div style={{ color: "var(--cc-maroon)", fontWeight: 700, padding: 25, textAlign: "center", background: "#fffbe2", borderRadius: 12 }}>
              No stories found for selected filter.
            </div>
          )}
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 0,
                padding: 0,
                margin: 0,
                border: "1.5px solid var(--cc-gold)",
                boxShadow: "var(--card-shadow)",
                background: "#fff",
                overflow: "hidden",
                borderRadius: 15,
                alignItems: "stretch",
                minHeight: 140,
                position: "relative"
              }}
            >
              {/* Media carousel (left) */}
              <div style={{
                flex: "0 0 180px",
                minWidth: 135,
                background: "#f9f6fa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: "1px solid var(--cc-grey-border)",
                position: "relative",
                padding: "18px 5px"
              }}>
                <StoryCarousel media={story.media} />
              </div>
              {/* Main (story desc, meta, actions) */}
              <div style={{ flex: 1, padding: "18px 22px 8px 18px", display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 4, gap: 8 }}>
                  <img
                    src={story.avatar}
                    alt={`Avatar of ${story.creator}`}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "100%",
                      border: "2.2px solid var(--cc-gold)",
                      objectFit: "cover",
                      marginRight: 3,
                      boxShadow: "0 2px 8px #ffeaa849",
                    }}
                  />
                  <span style={{ fontWeight: 700, color: "var(--cc-maroon)", fontSize: "1.09em", marginRight: 10 }}>
                    {story.creator}
                  </span>
                  <span style={{
                    background: "var(--cc-gold)",
                    color: "var(--cc-maroon)",
                    fontSize: ".98em",
                    fontWeight: 700,
                    borderRadius: 7,
                    padding: "1px 11px",
                  }}>
                    {story.medium}
                  </span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.97em", marginLeft: "auto" }}>
                    {story.timestamp}
                  </span>
                </div>
                <div style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.09em",
                  marginBottom: 9,
                  marginTop: 2,
                  lineHeight: 1.58,
                  fontWeight: 500,
                  letterSpacing: "0.01em"
                }}>
                  {story.description}
                </div>
                {/* Like/react & comment row */}
                <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 4 }}>
                  <button
                    onClick={() => handleLike(story.id)}
                    className="btn"
                    aria-pressed={story.userLiked}
                    title={story.userLiked ? "Unlike" : "Like"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      background: story.userLiked ? "var(--cc-maroon)" : "var(--cc-gold)",
                      color: story.userLiked ? "var(--cc-gold)" : "var(--cc-maroon)",
                      border: "1.5px solid var(--cc-maroon)",
                      borderRadius: 20,
                      fontSize: "1em",
                      fontWeight: 700,
                      boxShadow: story.userLiked ? "0 2px 8px #80000025" : "0 2px 7px #ffeaa850",
                      padding: "6px 18px 6px 14px",
                      transition: "background .13s, color .13s"
                    }}
                  >
                    <span role="img" aria-label="like">{story.userLiked ? "❤️" : "🤍"}</span>
                    {story.likes}
                  </button>
                  <span style={{
                    color: "var(--cc-maroon)",
                    fontSize: "0.96em",
                    fontWeight: 600
                  }}>
                    {story.comments.length} comment{story.comments.length !== 1 ? "s" : ""}
                  </span>
                </div>
                {/* Comments block */}
                <CommentSection story={story} onComment={txt => handleComment(story.id, txt)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
/** Inline, modern comment section per story */
function CommentSection({ story, onComment }) {
  const [input, setInput] = useState("");
  const [expanded, setExpanded] = useState(story.comments.length > 0);

  function submit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    onComment(input.trim());
    setInput("");
    setExpanded(true);
  }

  return (
    <div style={{ marginTop: 8, background: "#f9f6fa", borderRadius: 11, border: "1px solid var(--cc-grey-border)", padding: "9px 13px 9px 13px" }}>
      <div
        style={{ fontWeight: 700, color: "var(--cc-maroon)", fontSize: ".99em", cursor: "pointer", marginBottom: 3 }}
        onClick={() => setExpanded(e => !e)}
        aria-expanded={expanded}
        tabIndex={0}
        role="button"
      >
        💬 Comments {story.comments.length > 0 && (<span style={{ color: "var(--cc-gold)", fontWeight: 600 }}>({story.comments.length})</span>)}
        <span style={{ marginLeft: 5, fontSize: "1.22em" }}>{expanded ? "▲" : "▼"}</span>
      </div>
      {expanded && (
        <div style={{ marginTop: 7 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {story.comments.length === 0 && (
              <div style={{ color: "var(--text-secondary)", fontSize: ".98em" }}>No comments yet. Be the first!</div>
            )}
            {story.comments.map((c, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <img
                  src={c.avatar}
                  alt={c.user}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: "0 1px 3px #80000012",
                    border: "1px solid var(--cc-gold)",
                  }}
                />
                <span style={{ color: "var(--cc-maroon)", fontWeight: 700, fontSize: ".97em", marginRight: 5 }}>{c.user}</span>
                <span style={{ color: "var(--text-secondary)", fontWeight: 500, fontSize: "0.95em" }}>{c.text}</span>
              </div>
            ))}
          </div>
          {/* Add comment form */}
          <form onSubmit={submit} style={{ marginTop: 9, display: "flex", gap: 10 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              maxLength={140}
              placeholder="Add a comment..."
              style={{
                flex: 1,
                border: "1.2px solid var(--cc-maroon)",
                borderRadius: 8,
                padding: "6px 12px",
                fontSize: "1em",
                fontFamily: "inherit",
                background: "#fff"
              }}
              aria-label="Add a comment"
            />
            <button
              type="submit"
              className="btn btn-accent"
              style={{
                fontWeight: 700,
                fontSize: ".99em",
                borderRadius: 8,
                padding: "7px 17px",
                minWidth: 45
              }}
              disabled={!input.trim()}
            >
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default BehindTheScenes;
