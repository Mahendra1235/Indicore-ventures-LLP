import React, { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import "../App.css";

function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="app">
      <Header />

      <Outlet />

      <footer
        className="footer"
        id="contact"
      >
        <div className="footer-container">

          {/* Footer Logo */}
          <div className="footer-brand">

            <div className="footer-logo">
              <span>
                INDI
              </span>
              <span className="logo-green">
                CORE
              </span>
            </div>

            <div className="footer-logo-sub">
              VENTURES LLP
            </div>

            <div className="footer-line">
              <span></span>
              <span></span>
            </div>

            <p>
              Investing in a smarter, healthier
              <br />
              and more sustainable future.
            </p>

            <div className="social-icons">
              <a href="#linkedin">
                in
              </a>
              <a href="#twitter">
                X
              </a>
              <a href="#mail">
                M
              </a>
              <a href="#youtube">
                ▶
              </a>
            </div>

          </div>

          {/* Footer Links */}
          <div className="footer-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/#about">
              About
            </Link>

            <Link to="/#portfolio">
              Portfolio
            </Link>

            <Link to="/people">
              People
            </Link>

            <Link to="/labs">
              Labs
            </Link>

            <Link to="/#investors">
              Investors
            </Link>

            <Link to="/blog">
              Blog
            </Link>

          </div>

          {/* Copyright */}
          <div className="copyright">
            © 2024 Indicore Ventures LLP. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Layout;
