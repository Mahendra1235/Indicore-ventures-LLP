import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../App.css";
import logo from "../assets/LOGO PNG.png";

function Header() {
  const navClassName = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <NavLink to="/" className="logo">
          <img src={logo} alt="Indicore Ventures" className="logo-img" />
        </NavLink>

        {/* Navigation */}
        <nav className="nav">
          <NavLink to="/" end className={navClassName}>
            Home
          </NavLink>

          <Link to="/#about">
            About
          </Link>

          <Link to="/#portfolio">
            Portfolio
          </Link>

          <NavLink to="/people" className={navClassName}>
            People
          </NavLink>

          <NavLink to="/labs" className={navClassName}>
            Labs
          </NavLink>

          <Link to="/#investors">
            Investors
          </Link>

          <NavLink to="/blog" className={navClassName}>
            Blog
          </NavLink>
        </nav>

        {/* Get in Touch */}
        <Link to="/#contact" className="header-button">
          Get in Touch
          <ArrowRight size={15} />
        </Link>

      </div>
    </header>
  );
}

export default Header;
