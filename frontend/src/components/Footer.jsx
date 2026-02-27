import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
              <polygon points="6,5 30,18 6,31" fill="url(#fg)" />
              <circle cx="25" cy="11" r="3.5" fill="#63b3ed" opacity="0.65" />
              <defs>
                <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#63b3ed" />
                  <stop offset="100%" stopColor="#4299e1" />
                </linearGradient>
              </defs>
            </svg>
            DELTA <span>MUSIC</span>
          </Link>
          <p>The most powerful Discord music bot. Crystal-clear audio, everywhere.</p>
          <div className="footer-status">
            <span className="dot" />
            All systems operational
          </div>
        </div>

        <nav className="footer-nav">
          <div className="footer-col">
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/features">Features</Link>
            <Link to="/commands">Commands</Link>
          </div>
          <div className="footer-col">
            <h4>Team</h4>
            <Link to="/owners">Owners</Link>
            <Link to="/partners">Partners</Link>
            <a href="https://discord.gg" target="_blank" rel="noreferrer">Support</a>
          </div>
          <div className="footer-col">
            <h4>Links</h4>
            <a href="https://discord.com/oauth2/authorize" target="_blank" rel="noreferrer">Invite Bot</a>
            <a href="https://discord.gg" target="_blank" rel="noreferrer">Discord</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="wrap footer-bottom-inner">
          <p>© {new Date().getFullYear()} DELTA MUSIC. All rights reserved.</p>
          <p>Built for the Discord community ♪</p>
        </div>
      </div>
    </footer>
  );
}
