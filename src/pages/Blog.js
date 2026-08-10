import React from "react";
import { ArrowRight, PenLine } from "lucide-react";
import SectionTitle from "../Components/SectionTitle";

const posts = [
  {
    title: "How Supply Chains Are Going Digital",
    category: "Insights",
    date: "Mar 10, 2026",
    excerpt: "From AI forecasting to traceable logistics — the technologies redefining modern supply chains.",
  },
  {
    title: "The Future of AI in Healthcare",
    category: "Deep Dive",
    date: "Feb 22, 2026",
    excerpt: "How intelligent analytics are improving patient outcomes and lowering costs.",
  },
  {
    title: "Investing in Climate-Resilient Agriculture",
    category: "Insights",
    date: "Jan 30, 2026",
    excerpt: "Why we back agritech that protects yields, soil and farmer incomes.",
  },
  {
    title: "What Founders Look For in a Partner",
    category: "Perspectives",
    date: "Dec 18, 2025",
    excerpt: "Beyond the cheque — the value of long-term, hands-on partnership.",
  },
];

function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Insights & Stories</h1>
          <p>
            Ideas, research and perspectives from the Indicore Ventures team.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">

          <SectionTitle center>
            Latest Articles
          </SectionTitle>

          <p className="section-description">
            Placeholder articles — replace with real posts later.
          </p>

          <div className="blog-grid">

            {posts.map((post) => (
              <article className="article-card" key={post.title}>
                <div className="article-meta">
                  <span className="category">{post.category}</span>
                  <span className="article-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#blog" className="view-all">
                  Read More
                  <ArrowRight size={14} />
                </a>
              </article>
            ))}

          </div>

          <div className="subscribe-box">
            <div>
              <h3>Never miss an insight</h3>
              <p>Subscribe to our monthly newsletter — placeholder for a form.</p>
            </div>
            <a href="#contact" className="green-button">
              <PenLine size={15} />
              Subscribe
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default Blog;
