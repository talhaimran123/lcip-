import React from "react";
import "./info-card.scss";
import { GoArrowUpRight } from "react-icons/go";
import {Link} from "react-router-dom";

const InfoCard = ({index, icon, heading, desc, buttonText, buttonLink}) => {
  return (
    <div className="info-card" key={index}>
      <div className="head">
        <div className="head-icon-box">
          {icon}
        </div>
        <h3>{heading}</h3>
      </div>
      <p>
        {desc}
      </p>
      <Link to={buttonLink}>
        <p>{buttonText}</p>
        <div className="arrow-icon-box">
          <GoArrowUpRight className="upright-arrow-icon" />
        </div>
      </Link>
    </div>
  );
};

export default InfoCard;
