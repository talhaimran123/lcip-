import React from "react";
import "./package-card.scss";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import spectrum from "../../assets/images/brand-logos/spectrum.svg";

export const PackageCard = ({
  key,
  img,
  tagName,
  packageName,
  packagePoints,
  price,
  linkPath
}) => {
  return (
    <div className="package-card" key={key}>
      <div className="logo">
        <img src={img} alt="provider-logo" />
      </div>

      <div className="tag">
        <p>{tagName}</p>
      </div>

      <div>
        <h4 className="package-name">{packageName}</h4>

        <ul className="package-points">
          {packagePoints?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <Link to={linkPath}>
        <p>{price}</p>
        <div className="arrow-icon-box">
          <GoArrowUpRight className="upright-arrow-icon" />
        </div>
      </Link>
    </div>
  );
};
