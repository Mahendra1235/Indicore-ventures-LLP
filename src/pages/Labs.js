import React from "react";
import { FlaskConical, Truck, HeartPulse, Leaf, Share2, Rocket } from "lucide-react";
import SectionTitle from "../Components/SectionTitle";

const tracks = [
  {
    icon: <Truck />,
    title: "Supply Chain Innovation",
    text: "Resilient, digitised and sustainable supply chains of tomorrow.",
  },
  {
    icon: <HeartPulse />,
    title: "HealthTech",
    text: "Solutions that improve access, outcomes and affordability.",
  },
  {
    icon: <Leaf />,
    title: "AgriTech",
    text: "Digital farming tools for a food-secure and greener future.",
  },
  {
    icon: <Share2 />,
    title: "Enterprise SaaS",
    text: "Next-generation software powering smarter enterprises.",
  },
];

function Labs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Indicore Labs</h1>
          <p>
            Our innovation lab — incubating ideas, experiments and young teams.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">

          <SectionTitle center>
            What We Work On
          </SectionTitle>

          <p className="section-description">
            Placeholder lab focus areas — refine the programme details later.
          </p>

          <div className="track-grid">

            {tracks.map((track) => (
              <div className="track-card" key={track.title}>
                <div className="focus-icon">{track.icon}</div>
                <h3>{track.title}</h3>
                <p>{track.text}</p>
              </div>
            ))}

          </div>

          <div className="lab-banner">

            <div className="lab-banner-icon">
              <FlaskConical />
            </div>

            <div>
              <h3>Have a bold idea?</h3>
              <p>
                We fund early-stage experiments and help founders validate,
                build and scale them. Get in touch to pitch the lab.
              </p>
            </div>

            <a href="#contact" className="green-button">
              Pitch the Lab
              <Rocket size={16} />
            </a>

          </div>

        </div>
      </section>
    </>
  );
}

export default Labs;
