import { useState, useEffect } from "react";
import { getFeatures } from "../utils/api";
import "./Features.css";

const categoryList = ["All", "Audio", "Playback", "Playlists", "Control", "Reliability", "Extras"];

export default function Features() {
  const [features, setFeatures] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getFeatures(active !== "All" ? { category: active } : {})
      .then((res) => setFeatures(res.data))
      .finally(() => setLoading(false));
  }, [active]);

  return (
    <div className="features-page">
      <div className="page-hero">
        <div className="wrap">
          <span className="section-label fade-up">Why DELTA MUSIC</span>
          <h1 className="section-title fade-up">Features that <span>set us apart.</span></h1>
          <p className="hero-sub fade-up">
            Every feature is built with intention. No filler, no bloat — just the things that make music better.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="filter-tabs">
            {categoryList.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loader"><div className="spinner" /><span>Loading features...</span></div>
          ) : (
            <div className="features-grid grid-3">
              {features.map((f, i) => (
                <div key={f.id} className="feat-card card" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="feat-top">
                    <span className="feat-icon">{f.icon}</span>
                    <div className="feat-badges">
                      {f.premium && <span className="badge badge-violet">Premium</span>}
                      {f.isNew && <span className="badge badge-cyan">New</span>}
                    </div>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                  <span className="feat-cat">{f.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section premium-section">
        <div className="wrap">
          <div className="premium-box">
            <div className="premium-glow" />
            <span className="section-label">Go further</span>
            <h2 className="section-title">Unlock <span>Premium.</span></h2>
            <p>Real-time lyrics, 10-band equalizer, and exclusive audio filters for power users who demand the best.</p>
            <a href="https://discord.gg" target="_blank" rel="noreferrer" className="btn btn-primary">
              Learn About Premium
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
