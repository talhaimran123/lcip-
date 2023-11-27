import React from "react";
import { NavLink } from "react-router-dom";
import "./sub-nav.scss";
import { BsCheck2 } from "react-icons/bs";

const SubNav = ({ links }) => {
  return (
    <div className="sub-nav">
      {links.map((item, index) => (
        <NavLink key={index} to={item.path}>
          <div className="icon-box">
            <BsCheck2 className="check-icon" />
          </div>
          <p>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SubNav;
