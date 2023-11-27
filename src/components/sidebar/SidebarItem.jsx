import React, { useState } from "react";
import "./sidebar-item.scss";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const SidebarItem = ({ item, key }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={`sidebar-item ${open ? "open" : ""}`} key={key}>
      <div className="sidebar-item-title">
        <NavLink to={item.path}>{item.name}</NavLink>
        <IoIosArrowDown className="drop-icon" onClick={() => setOpen(!open)} />
      </div>

      <ul className="sidebar-item-content">
        {item.children.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SidebarItem;
