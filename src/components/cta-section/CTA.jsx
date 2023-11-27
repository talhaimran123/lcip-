import React from "react";
import "./cta.scss";
import Searchbar from "../searchbar/Searchbar";

const CTA = ({ heading, desc }) => {
  return (
    <div className="cta">
      <div className="cta-left">
        <h3 className="cta-heading">{heading}</h3>
        <p className="cta-desc">{desc}</p>
      </div>

      <div className="cta-right">
        <Searchbar />
      </div>
    </div>
  );
};

export default CTA;
