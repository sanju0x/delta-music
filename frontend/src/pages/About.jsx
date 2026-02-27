import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBot } from "../utils/api";
import "./About.css";

export default function About() {
  const [bot, setBot] = useState(null);

  useEffect(() => {
    getBot().then((res) => setBot(res.data));
  }, []);

  return (
    <div className="about">
      <div className="page-hero">
        <div className="wrap">
          <span className="section-label fade-up">About DELTA MUSIC</span>
          <h1 className="section-title fade-up">The story behind<br /><span>the sound.</span></h1>
          <p className="hero-sub fade-up">
            Born from a passion for great music and exceptional Discord experiences. DELTA MUSIC is built by music lovers, for music lovers.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap about-layout">
          <div className="about-text">
            <span className="section-label">Who we are</span>
            <h2 className="section-title">More than a <span>music bot.</span></h2>
            <p>DELTA MUSIC started in 2022 as a small project to replace laggy, ad-riddled bots with something that actually works. What began as a weekend experiment turned into one of Discord's most trusted music bots.</p>
            <p>We obsess over audio quality, reliability, and user experience. Every feature is deliberate. Every update is meaningful. No bloat. No compromise.</p>
            <div className="about-tags">
              {["discord.js v14", "Node.js", "Lavalink", "AWS", "Redis", "FFmpeg"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="about-card card">
            <div className="about-card-header">
              <div className="bot-avatar">
                <svg viewBox="0 0 36 36" fill="none" width="40" height="40">
                  <polygon points="6,5 30,18 6,31" fill="url(#ag)" />
                  <circle cx="25" cy="11" r="3.5" fill="#63b3ed" opacity="0.7" />
                  <defs>
                    <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#63b3ed" />
                      <stop offset="100%" stopColor="#4299e1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h3>DELTA MUSIC</h3>
                <div className="bot-status">
                  <span className="dot" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            <div className="bot-meta">
              {[
                { label: "Version", value: bot?.version || "3.0.0" },
                { label: "Prefix", value: bot?.prefix || "/" },
                { label: "Library", value: bot?.library || "discord.js v14" },
                { label: "Hosting", value: bot?.hosting || "AWS Multi-Region" },
                { label: "Language", value: bot?.language || "JavaScript / Node.js" },
                { label: "Since", value: "January 2022" },
              ].map(({ label, value }) => (
                <div key={label} className="meta-row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sources-section">
        <div className="wrap">
          <div className="section-header center">
            <span className="section-label">Compatibility</span>
            <h2 className="section-title">Plays from <span>everywhere.</span></h2>
            <p className="section-sub">Six major platforms supported out of the box. One bot, unlimited music.</p>
          </div>
          <div className="sources-grid">
            {[
              { name: "YouTube", color: "#ff4444", desc: "Full search, playlists & live streams" },
              { name: "Spotify", color: "#1db954", desc: "Tracks, albums, playlists & liked songs" },
              { name: "SoundCloud", color: "#ff7700", desc: "Indie artists, mixes & free tracks" },
              { name: "Apple Music", color: "#fc3c44", desc: "Apple Music catalog & playlists" },
              { name: "Deezer", color: "#a238ff", desc: "HiFi quality, global catalog" },
              { name: "Tidal", color: "#00e5ff", desc: "Lossless & MQA quality audio" },
            ].map(({ name, color, desc }) => (
              <div key={name} className="source-card card">
                <div className="source-dot" style={{ background: color, boxShadow: `0 0 12px ${color}60` }} />
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-cta">
          <h2 className="section-title">Ready to experience it <span>yourself?</span></h2>
          <div className="cta-actions">
            <a href="https://discord.com/oauth2/authorize" target="_blank" rel="noreferrer" className="btn btn-primary">Add DELTA MUSIC</a>
            <Link to="/commands" className="btn btn-ghost">Browse Commands</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
