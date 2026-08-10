import React from "react";
import { Users, Target, GraduationCap, Lightbulb } from "lucide-react";
import SectionTitle from "../Components/SectionTitle";

const team = [
  {
    name: "Aarav Mehta",
    role: "Founder & Managing Partner",
    bio: "Two decades of experience scaling ventures across emerging markets.",
  },
  {
    name: "Priya Sharma",
    role: "Partner, Investments",
    bio: "Leads deal sourcing and diligence for the supply chain and agritech sectors.",
  },
  {
    name: "Rahul Iyer",
    role: "Partner, Technology",
    bio: "Former CTO turned investor, backing enterprise SaaS and healthtech teams.",
  },
  {
    name: "Ananya Gupta",
    role: "Head of Operations",
    bio: "Builds the platforms and networks our portfolio companies rely on.",
  },
];

function People() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our People</h1>
          <p>
            The operators, investors and builders behind Indicore Ventures.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">

          <SectionTitle center>
            Meet the Team
          </SectionTitle>

          <p className="section-description">
            Placeholder team members — update names, roles and photos later.
          </p>

          <div className="team-grid">

            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-avatar">
                  <Users />
                </div>
                <h3>{member.name}</h3>
                <div className="category">{member.role}</div>
                <p>{member.bio}</p>
                <a href="#linkedin" className="team-link">
                  LinkedIn
                </a>
              </div>
            ))}

          </div>

          <div className="values-row">

            <div className="value-pill">
              <Target />
              <div>
                <h4>Our Mission</h4>
                <p>Backing founders building enduring, impactful companies.</p>
              </div>
            </div>

            <div className="value-pill">
              <GraduationCap />
              <div>
                <h4>Our Team</h4>
                <p>Experienced operators with deep domain networks.</p>
              </div>
            </div>

            <div className="value-pill">
              <Lightbulb />
              <div>
                <h4>Our Edge</h4>
                <p>Capital plus hands-on operational partnership.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default People;
