import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBot, getFeatures } from "../utils/api";
import "./Home.css";

function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

export default function Home() {
  const [bot, setBot] = useState(null);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    getBot().then((res) => setBot(res.data));
    getFeatures().then((res) => setFeatures(res.data.slice(0, 6)));
  }, []);

  const stats = bot?.stats || {};

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-grid" />
        </div>
        <div className="wrap hero-content">
          <div className="hero-badge fade-up">
            <span className="dot" />
            <span>Now serving {bot ? formatNumber(stats.servers) + " servers" : "18K+ servers"}</span>
          </div>
          <h1 className="hero-title fade-up">
            Sound<br />
            <span>Evolved.</span>
          </h1>
          <p className="hero-desc fade-up">
            DELTA MUSIC delivers crystal-clear audio, 30+ filters, and seamless<br className="br-hide" />
            multi-source playback to your Discord server — 24/7, zero compromise.
          </p>
          <div className="hero-actions fade-up">
            <a href="https://discord.com/oauth2/authorize" target="_blank" rel="noreferrer" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Add to Discord
            </a>
            <Link to="/commands" className="btn btn-ghost">View Commands</Link>
          </div>

          <div className="hero-sources fade-up">
            <span>Plays from</span>
            {["YouTube", "Spotify", "SoundCloud", "Apple Music", "Deezer"].map((s) => (
              <span key={s} className="source-chip">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="wrap">
          <div className="stats-grid">
            {[
              { label: "Servers", value: stats.servers || 18420, color: "cyan" },
              { label: "Users", value: stats.users || 312890, color: "blue" },
              { label: "Songs Played", value: stats.songsPlayed || 6104920, color: "violet" },
              { label: "Uptime", value: (stats.uptime || 99.97) + "%", raw: true, color: "green" },
            ].map(({ label, value, raw, color }) => (
              <div key={label} className={`stat-item stat-item--${color}`}>
                <strong>{raw ? value : formatNumber(value)}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section features-preview">
        <div className="wrap">
          <div className="section-header center">
            <span className="section-label">What we offer</span>
            <h2 className="section-title">Built different. <span>Sounds better.</span></h2>
            <p className="section-sub">Everything you need from a music bot, done right — with zero shortcuts.</p>
          </div>
          <div className="grid-3 features-grid">
            {features.map((f) => (
              <div key={f.id} className="feature-card card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
                {f.premium && <span className="badge badge-orange">Premium</span>}
                {f.isNew && <span className="badge badge-cyan">New</span>}
              </div>
            ))}
          </div>
          <div className="features-cta">
            <Link to="/features" className="btn btn-ghost">See All Features →</Link>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="wrap">
          <div className="cta-box">
            <div className="cta-glow" />
            <span className="section-label">Ready to start?</span>
            <h2>Add DELTA MUSIC to<br />your server today</h2>
            <p>Free forever. No credit card. No catch. Just great music.</p>
            <div className="cta-actions">
              <a href="https://discord.com/oauth2/authorize" target="_blank" rel="noreferrer" className="btn btn-primary">
                Invite for Free
              </a>
              <a href="https://discord.gg" target="_blank" rel="noreferrer" className="btn btn-ghost">
                Join Support Server
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
