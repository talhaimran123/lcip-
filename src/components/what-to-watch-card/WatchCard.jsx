import React from "react";
import { Link } from "react-router-dom";
import "./watch-card.scss"

const WatchCard = ({ key, img, title, desc }) => {
  return (
    <div className="watch-card" key={key}>
      <img src={img} alt="thumbnail" />

      <div className="watch-card-content">
        <h4 className="title">
          {title.before}
          {title.links.map((item, index) => (
            <span key={index}>
              <Link to={item.path}>{item.name}</Link>
            </span>
          ))}
          {title.after}
        </h4>
        <p className="desc">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WatchCard;
