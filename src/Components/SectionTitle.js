import React from "react";

function SectionTitle({ children, center = false }) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      <h2>{children}</h2>

      <div className="title-line">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default SectionTitle;
