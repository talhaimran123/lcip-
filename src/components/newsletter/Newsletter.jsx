import React from "react";
import "./newsletter.scss";
import Searchbar from "../searchbar/Searchbar";

const Newsletter = () => {
  return (
    <div className="section newsletter">
      <div className="newsletter-box">
        <div className="head">
          <h2 className="sect-heading">Don't miss an update</h2>
          <p className="sect-desc">
            Stay updated on the latest products and services anytime anywhere.
          </p>
        </div>

        <div className="form">
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
