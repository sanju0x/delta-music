import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/commands", label: "Commands" },
  { to: "/owners", label: "Team" },
  { to: "/partners", label: "Partners" },
];

export default function Navbar() {
  const [pinned, setPinned] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className={`navbar ${pinned ? "pinned" : ""}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="nav-logo">
          <svg className="nav-logo-icon" viewBox="0 0 36 36" fill="none">
            <polygon points="6,5 30,18 6,31" fill="url(#ng)" />
            <circle cx="25" cy="11" r="3.5" fill="#63b3ed" opacity="0.65" />
            <defs>
              <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#63b3ed" />
                <stop offset="100%" stopColor="#4299e1" />
              </linearGradient>
            </defs>
          </svg>
          <span className="nav-logo-text">DELTA <em>MUSIC</em></span>
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={`nav-link ${pathname === to ? "active" : ""}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="https://discord.com/oauth2/authorize"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-nav"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            Invite
          </a>
          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
