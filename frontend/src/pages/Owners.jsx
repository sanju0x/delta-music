import { useEffect, useState } from "react";
import { getOwners } from "../utils/api";
import "./Owners.css";

const badgeColor = { Owner: "cyan", "Co-Owner": "blue", Developer: "violet", Admin: "green" };

export default function Owners() {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOwners()
      .then((res) => setOwners(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="owners-page">
      <div className="page-hero">
        <div className="wrap">
          <span className="section-label fade-up">The team</span>
          <h1 className="section-title fade-up">Meet the people<br /><span>behind the bot.</span></h1>
          <p className="hero-sub fade-up">A small, dedicated team obsessed with building the best Discord music experience.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          {loading ? (
            <div className="loader"><div className="spinner" /><span>Loading team...</span></div>
          ) : (
            <div className="owners-grid">
              {owners.map((owner, i) => (
                <div key={owner.id} className={`owner-card card ${i === 0 ? "owner-featured" : ""}`}>
                  <div className="owner-avatar-wrap">
                    <img src={owner.avatar} alt={owner.name} className="owner-avatar" />
                    <div className="avatar-ring" />
                  </div>
                  <div className="owner-info">
                    <div className="owner-name-row">
                      <h3>{owner.name}</h3>
                      <span className={`badge badge-${badgeColor[owner.badge] || "cyan"}`}>{owner.badge}</span>
                    </div>
                    <p className="owner-role">{owner.role}</p>
                    <p className="owner-bio">{owner.bio}</p>
                    <div className="owner-socials">
                      {owner.socials?.github && (
                        <a href={owner.socials.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {owner.socials?.discord && (
                        <a href={owner.socials.discord} target="_blank" rel="noreferrer" className="social-btn" aria-label="Discord">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                          </svg>
                        </a>
                      )}
                      {owner.socials?.twitter && (
                        <a href={owner.socials.twitter} target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      )}
                      {owner.socials?.website && (
                        <a href={owner.socials.website} target="_blank" rel="noreferrer" className="social-btn" aria-label="Website">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section join-section">
        <div className="wrap">
          <div className="join-box card">
            <h2>Join the <span style={{ color: "var(--cyan)" }}>team?</span></h2>
            <p>We're always looking for passionate developers, designers, and moderators to help grow DELTA MUSIC.</p>
            <a href="https://discord.gg" target="_blank" rel="noreferrer" className="btn btn-primary">Apply on Discord</a>
          </div>
        </div>
      </section>
    </div>
  );
}
