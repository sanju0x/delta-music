import { useEffect, useState } from "react";
import { getPartners } from "../utils/api";
import "./Partners.css";

const typeColor = { Bot: "cyan", Server: "blue", Service: "violet" };

export default function Partners() {
  const [partners, setPartners] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPartners(filter !== "All" ? { type: filter } : {})
      .then((res) => setPartners(res.data))
      .finally(() => setLoading(false));
  }, [filter]);

  const featured = partners.filter((p) => p.featured);
  const rest = partners.filter((p) => !p.featured);

  return (
    <div className="partners-page">
      <div className="page-hero">
        <div className="wrap">
          <span className="section-label fade-up">Partnerships</span>
          <h1 className="section-title fade-up">Our <span>partners.</span></h1>
          <p className="hero-sub fade-up">
            Trusted bots, communities, and services that share our vision for an exceptional Discord experience.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="partner-filters">
            {["All", "Bot", "Server", "Service"].map((t) => (
              <button
                key={t}
                className={`filter-tab ${filter === t ? "active" : ""}`}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loader"><div className="spinner" /><span>Loading partners...</span></div>
          ) : (
            <>
              {featured.length > 0 && filter === "All" && (
                <div className="featured-section">
                  <span className="section-label" style={{ marginBottom: "1.25rem", display: "block" }}>Featured</span>
                  <div className="featured-grid">
                    {featured.map((p) => (
                      <PartnerCard key={p.id} partner={p} featured />
                    ))}
                  </div>
                </div>
              )}

              {rest.length > 0 && (
                <div className="rest-section">
                  {featured.length > 0 && filter === "All" && (
                    <span className="section-label" style={{ marginBottom: "1.25rem", display: "block" }}>All Partners</span>
                  )}
                  <div className="grid-3">
                    {rest.map((p) => (
                      <PartnerCard key={p.id} partner={p} />
                    ))}
                  </div>
                </div>
              )}

              {partners.length === 0 && (
                <div className="empty-state">
                  <span>🤝</span>
                  <p>No partners found for this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="section partner-apply">
        <div className="wrap">
          <div className="apply-box card">
            <div className="apply-icon">🤝</div>
            <h2>Become a <span>partner</span></h2>
            <p>Have a bot, server, or service that complements DELTA MUSIC? We'd love to collaborate.</p>
            <div className="apply-requirements">
              {["500+ server members or users", "Active & maintained", "Quality-focused", "Positive community reputation"].map((r) => (
                <div key={r} className="req-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {r}
                </div>
              ))}
            </div>
            <a href="https://discord.gg" target="_blank" rel="noreferrer" className="btn btn-primary">
              Apply on Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function PartnerCard({ partner, featured }) {
  return (
    <div className={`partner-card card ${featured ? "partner-featured" : ""}`}>
      <div className="partner-header">
        <img src={partner.logo} alt={partner.name} className="partner-logo" />
        <div>
          <div className="partner-name-row">
            <h3>{partner.name}</h3>
            {partner.verified && (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--cyan)" title="Verified">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            )}
          </div>
          <span className={`badge badge-${typeColor[partner.type] || "cyan"}`}>{partner.type}</span>
        </div>
      </div>
      <p className="partner-desc">{partner.description}</p>
      <div className="partner-footer">
        <span className="partner-members">{partner.members}</span>
        <a href={partner.inviteLink} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm-p">
          {partner.type === "Bot" ? "Invite" : partner.type === "Server" ? "Join" : "Visit"} →
        </a>
      </div>
    </div>
  );
}
