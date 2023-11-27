import React from "react";
import "./sidebar.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import SidebarItem from "./SidebarItem";
import { mainNavLinks } from "../../assets/data/navLinks/mainNavLinks";
import { Link } from "react-router-dom";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className={`sidebar`}>
      <div className="header">
        <FaLongArrowAltLeft
          className="icon"
          onClick={() => {
            closeSidebar(false);
          }}
        />

        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="links">
        {mainNavLinks.map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
