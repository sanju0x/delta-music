import { useState, useEffect } from "react";
import { getCommands } from "../utils/api";
import "./Commands.css";

const categoryColors = {
  Music: "cyan",
  Playlist: "blue",
  Filter: "violet",
  Utility: "green",
  Admin: "orange",
};

export default function Commands() {
  const [commands, setCommands] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCommands({ category: active !== "All" ? active : undefined, search: search || undefined })
      .then((res) => {
        setCommands(res.data);
        if (res.categories) setCategories(res.categories);
      })
      .finally(() => setLoading(false));
  }, [active, search]);

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <div className="commands-page">
      <div className="page-hero">
        <div className="wrap">
          <span className="section-label fade-up">Documentation</span>
          <h1 className="section-title fade-up">Commands</h1>
          <p className="hero-sub fade-up">
            {commands.length || "30"}+ slash commands to control every aspect of your music experience.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="cmd-controls">
            <div className="search-wrap">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search commands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="cmd-search"
              />
            </div>
            <div className="category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`cat-tab ${active === cat ? "active" : ""} ${cat !== "All" ? `cat-${categoryColors[cat] || "cyan"}` : ""}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="loader"><div className="spinner" /><span>Loading commands...</span></div>
          ) : commands.length === 0 ? (
            <div className="empty-state">
              <span>🔍</span>
              <p>No commands found. Try a different search.</p>
            </div>
          ) : (
            <div className="cmd-list">
              {commands.map((cmd) => (
                <div key={cmd.id} className={`cmd-item ${expanded === cmd.id ? "expanded" : ""}`}>
                  <button className="cmd-header" onClick={() => toggle(cmd.id)}>
                    <div className="cmd-main">
                      <span className="cmd-name">{cmd.name}</span>
                      <span className={`badge badge-${categoryColors[cmd.category] || "cyan"}`}>{cmd.category}</span>
                      {cmd.djOnly && <span className="badge badge-orange">DJ</span>}
                      {cmd.premium && <span className="badge badge-violet">Premium</span>}
                    </div>
                    <span className="cmd-desc">{cmd.description}</span>
                    <svg
                      className={`chevron ${expanded === cmd.id ? "open" : ""}`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {expanded === cmd.id && (
                    <div className="cmd-body">
                      <div className="cmd-detail">
                        <label>Usage</label>
                        <code>{cmd.usage}</code>
                      </div>
                      {cmd.aliases?.length > 0 && (
                        <div className="cmd-detail">
                          <label>Aliases</label>
                          <div className="alias-list">
                            {cmd.aliases.map((a) => <code key={a}>{a}</code>)}
                          </div>
                        </div>
                      )}
                      {cmd.examples?.length > 0 && (
                        <div className="cmd-detail">
                          <label>Examples</label>
                          <div className="example-list">
                            {cmd.examples.map((e) => <code key={e}>{e}</code>)}
                          </div>
                        </div>
                      )}
                      <div className="cmd-meta-row">
                        <span className="meta-chip">Cooldown: {cmd.cooldown}s</span>
                        {cmd.djOnly && <span className="meta-chip meta-chip--warn">DJ Role Required</span>}
                        {cmd.premium && <span className="meta-chip meta-chip--premium">Premium Only</span>}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
