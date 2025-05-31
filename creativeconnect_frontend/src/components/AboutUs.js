import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * AboutUs component for CreativeConnect
 * Modern, visually appealing "About Us" page matching maroon/white/accent branding.
 * Describes the platform's purpose, mission, and team with engaging layout and highlights.
 */
const AboutUs = () => (
  <section style={{ padding: "34px 0" }}>
    <div className="card"
      style={{
        background: "var(--cc-white)",
        boxShadow: "0 8px 30px #80000010, 0 2px 10px #ffd10418",
        maxWidth: 700,
        margin: "0 auto",
        border: "2.5px solid var(--cc-gold)",
        borderRadius: 24,
        padding: "44px 32px 40px 32px",
        textAlign: "center"
      }}
    >
      <div className="subtitle" style={{
        marginBottom: 6, color: "var(--cc-gold)", fontWeight: 700, fontSize: "1.12em", letterSpacing: ".01em"
      }}>
        Empowering Creative Connection
      </div>
      <h1 className="title"
        style={{
          color: "var(--cc-maroon)",
          marginBottom: 16,
          fontWeight: 900,
          fontSize: "2.25rem",
          letterSpacing: ".01em",
          textShadow: "0 2px 0 #ffd10442",
        }}
      >
        About CreativeConnect
      </h1>
      <div style={{
        color: "var(--text-secondary)",
        fontSize: "1.17em",
        margin: "0 auto 17px auto",
        maxWidth: 550,
        lineHeight: 1.6
      }}>
        <b style={{ color: "var(--cc-maroon)" }}>CreativeConnect</b> is the hub where artistry meets connection.<br />
        Our platform brings artists, crafters, and art lovers together to showcase originality, share journeys, and celebrate talent.
      </div>
      <div
        style={{
          margin: "24px 0 14px 0",
          padding: "19px 21px",
          borderRadius: 17,
          background: "linear-gradient(98deg,#fffbe2 67%,#ffeaa8 100%)",
          boxShadow: "0 2px 14px #ffd10422",
          color: "var(--cc-maroon)",
          fontWeight: 700,
          fontSize: "1.19em",
        }}>
        <span style={{ color: "var(--cc-maroon)", fontWeight: 800, fontSize: "1.21em" }}>
          Our Mission:
        </span>
        {" "}
        <span style={{ color: "var(--cc-gold)", fontWeight: 800 }}>
          To empower artists and crafters by showcasing their talents and connecting them with appreciative audiences globally.
        </span>
      </div>
      <div
        style={{
          background: "var(--cc-maroon)",
          color: "var(--cc-gold)",
          padding: "18px 25px",
          borderRadius: 15,
          margin: "24px 0 20px 0",
          fontWeight: 600,
          boxShadow: "0 3px 12px #80000033",
          letterSpacing: ".01em"
        }}
      >
        <span style={{ fontSize: "1.13em" }}>
          <span style={{ fontWeight: 900 }}>Our Vision:</span>{" "}
          A vibrant community where creativity and craftsmanship flourish together.
        </span>
      </div>
      <div style={{
        background: "#fffbe2",
        color: "var(--cc-maroon)",
        borderLeft: "7px solid var(--cc-gold)",
        borderRadius: "9px",
        fontSize: "1.11em",
        margin: "0 auto 17px auto",
        maxWidth: 520,
        padding: "18px 22px",
        lineHeight: 1.5,
        textAlign: "left",
        fontWeight: 600
      }}>
        <span style={{
          display: "inline-block",
          fontSize: "1.2em",
          verticalAlign: "middle",
          marginRight: "10px"
        }}>🎨</span>
        <b>Who We Are:</b> Founded by passionate creators,
        CreativeConnect is built for artists, by artists. Our team is made up of makers, dreamers, techies
        and curators who envision a world united and uplifted by creativity.
      </div>
      <div style={{
        margin: "33px 0 0 0",
        color: "var(--text-secondary)",
        fontWeight: 600,
        fontSize: "1.08em"
      }}>
        <span style={{
          background: "var(--cc-gold)",
          color: "var(--cc-maroon)",
          fontWeight: 800,
          padding: "2px 14px",
          borderRadius: 9,
          boxShadow: "0 1px 9px #ffd10416"
        }}>
          Join us in building a space where everyone’s creative spark is valued!
        </span>
      </div>
    </div>
  </section>
);

export default AboutUs;
