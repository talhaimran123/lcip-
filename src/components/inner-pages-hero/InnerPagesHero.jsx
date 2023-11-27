import React from "react";
import "./inner-pages-hero.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const InnerPagesHero = ({ data }) => {
  const { img, heading, desc, points, buttonName, buttonPath, price } = data;

  return (
    <div className="inner-pages-hero">
      <img src={img} alt="packages & pricing" className="bg-img" />

      <div className="inner-pages-hero-content">
        <h1 className="heading">{heading}</h1>

        <p className="desc">{desc}</p>

        <ul className="points">
          {points.map((item, index) => (
            <li key={index}>
              <BsFillCheckCircleFill className="tick-icon" />
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <Link to={buttonPath}>{buttonName}</Link>

        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default InnerPagesHero;
