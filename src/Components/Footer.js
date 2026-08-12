import React from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import "../App.css";

const LinkedInIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);

const XIcon = (props) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93z" />
  </svg>
);

const YouTubeIcon = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.55 12 3.55 12 3.55s-7.51 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.87.5 9.38.5 9.38.5s7.51 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
  </svg>
);

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span>INDI</span>
            <span className="logo-green">CORE</span>
          </div>

          <div className="footer-logo-sub">VENTURES LLP</div>

          <p>
            Investing in a smarter, healthier and more sustainable future.
          </p>

          <div className="social-icons">
            <a href="#linkedin" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="#twitter" aria-label="X / Twitter">
              <XIcon />
            </a>
            <a href="#mail" aria-label="Email">
              <Mail size={16} />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>

          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/people">People</Link>
          <Link to="/labs">Labs</Link>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h4>Explore</h4>

          <Link to="/#portfolio">Portfolio</Link>
          <Link to="/#investors">Investors</Link>
          <Link to="/blog">Blog</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Get in Touch</h4>

          <p>
            Partnership and deal-flow enquiries are always welcome.
          </p>

          <a className="footer-mail" href="mailto:hello@indicore.vc">
            hello@indicore.vc
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>
            © 2026 Indicore Ventures LLP. All rights reserved.
          </span>

          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
