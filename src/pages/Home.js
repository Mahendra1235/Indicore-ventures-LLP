import React from "react";
import {
  ArrowRight,
  Rocket,
  TrendingUp,
  Globe2,
  Users,
  Truck,
  Share2,
  HeartPulse,
  Leaf,
  Handshake,
  Network,
} from "lucide-react";

import SectionTitle from "../Components/SectionTitle";

function Home() {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-container">

          <div className="hero-content">

            <h1>
              Backing <span>Visionaries.</span>
              <br />
              Building <strong>Tomorrow.</strong>
            </h1>

            <p>
              We partner with founders to create enduring
              <br />
              value through innovation, expertise and capital.
            </p>

            <a href="#about" className="green-button">
              Discover Our Approach
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS SECTION
      ===================================================== */}

      <section className="stats-section">

        <div className="stats-card">

          <div className="stat-item">

            <div className="stat-icon">
              <Rocket />
            </div>

            <h3>10+</h3>

            <p>
              Portfolio Companies
            </p>

          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">

            <div className="stat-icon">
              <TrendingUp />
            </div>

            <h3>5+</h3>

            <p>
              Active Investments
            </p>

          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">

            <div className="stat-icon">
              <Globe2 />
            </div>

            <h3>3</h3>

            <p>
              Global Impact Areas
            </p>

          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">

            <div className="stat-icon">
              <Users />
            </div>

            <h3>100+</h3>

            <p>
              Offers & Partnerships
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INVESTMENT FOCUS
      ===================================================== */}

      <section
        className="investment-section"
        id="investors"
      >

        <div className="container">

          <SectionTitle center>
            Our Investment Focus
          </SectionTitle>

          <p className="section-description">
            We invest in innovative companies creating sustainable impact
            across key industries.
          </p>

          <div className="focus-grid">

            <div className="focus-card">

              <div className="focus-icon">
                <Truck />
              </div>

              <h3>
                Supply Chain
              </h3>

              <p>
                Smarter, more resilient
                <br />
                and sustainable supply chains.
              </p>

            </div>

            <div className="focus-card">

              <div className="focus-icon">
                <Share2 />
              </div>

              <h3>
                Enterprise SaaS
              </h3>

              <p>
                Next-gen software for
                <br />
                a smarter enterprise.
              </p>

            </div>

            <div className="focus-card">

              <div className="focus-icon">
                <HeartPulse />
              </div>

              <h3>
                Healthcare
              </h3>

              <p>
                Innovative solutions
                <br />
                for better health outcomes.
              </p>

            </div>

            <div className="focus-card">

              <div className="focus-icon">
                <Leaf />
              </div>

              <h3>
                Agriculture
              </h3>

              <p>
                Digital and sustainable
                <br />
                farming for a better tomorrow.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY WORK WITH US
      ===================================================== */}

      <section className="why-section">

        <div className="why-background"></div>

        <div className="container why-container">

          <div className="why-content">

            <SectionTitle>
              Why Work With Us
            </SectionTitle>

            <div className="why-grid">

              <div className="why-item">

                <div className="why-icon">
                  <Users />
                </div>

                <div>
                  <h4>
                    Deep Industry Expertise
                  </h4>
                  <p>
                    Hands-on support from experienced operators
                  </p>
                </div>

              </div>

              <div className="why-item">

                <div className="why-icon">
                  <Handshake />
                </div>

                <div>
                  <h4>
                    Long-Term Partnership
                  </h4>
                  <p>
                    Aligned for sustainable growth
                  </p>
                </div>

              </div>

              <div className="why-item">

                <div className="why-icon">
                  <Network />
                </div>

                <div>
                  <h4>
                    Access to Networks
                  </h4>
                  <p>
                    Connects to global opportunities
                  </p>
                </div>

              </div>

              <div className="why-item">

                <div className="why-icon">
                  <Leaf />
                </div>

                <div>
                  <h4>
                    Impact Driven
                  </h4>
                  <p>
                    Creating value for businesses & society
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <section
        className="portfolio-section"
        id="portfolio"
      >

        <div className="container">

          <div className="portfolio-heading">

            <div>
              <SectionTitle>
                Our Portfolio
              </SectionTitle>

              <p>
                Transforming ideas into industry leaders.
              </p>
            </div>

            <a
              href="#portfolio"
              className="view-all"
            >
              View All
              <ArrowRight size={15} />
            </a>

          </div>

          <div className="portfolio-grid">

            <div className="portfolio-card">

              <div className="company-logo capgrid-logo">

                <div className="fake-globe">
                  ◉
                </div>

                <span>
                  CapGrid
                </span>

              </div>

              <div className="category">
                Supply Chain
              </div>

              <p>
                Digital platform for smarter
                <br />
                supply chain management.
              </p>

            </div>

            <div className="portfolio-card">

              <div className="company-logo health-logo">

                <div className="health-cross">
                  +
                </div>

                <span>
                  HealthOrch
                </span>

              </div>

              <div className="category">
                Healthcare
              </div>

              <p>
                AI-powered healthcare
                <br />
                analytics for better outcomes.
              </p>

            </div>

            <div className="portfolio-card">

              <div className="company-logo agri-logo">

                <div className="leaf-logo">
                  <Leaf />
                </div>

                <span>
                  AgriSense
                </span>

              </div>

              <div className="category">
                Agriculture
              </div>

              <p>
                IoT & data-driven solutions
                <br />
                for modern agriculture.
              </p>

            </div>

            <div className="portfolio-card">

              <div className="company-logo flexi-logo">

                <div className="cloud-logo">
                  ☁
                </div>

                <span>
                  FlexiSaaS
                </span>

              </div>

              <div className="category">
                Enterprise SaaS
              </div>

              <p>
                Next-gen SaaS for growing
                <br />
                businesses.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <section
        className="about-section"
        id="about"
      >

        <div className="about-image"></div>

        <div className="container about-container">

          <div className="about-content">

            <SectionTitle>
              About Indicore Ventures
            </SectionTitle>

            <p>
              Indicore Ventures LLP is a forward-looking investment
              firm focused on partnering with exceptional founders
              to build visionary companies. We bring together capital,
              insight and networks to drive long-term, sustainable growth.
            </p>

            <a
              href="#about"
              className="green-button"
            >
              Learn More
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta-wrapper">

        <div className="cta">

          <div className="cta-content">

            <h2>
              Let's Build Something{" "}
              <span>
                Extraordinary
              </span>
            </h2>

            <p>
              Partner with us to turn bold ideas into lasting impact.
            </p>

          </div>

          <a
            href="#contact"
            className="green-button"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>

        </div>

      </section>
    </>
  );
}

export default Home;
