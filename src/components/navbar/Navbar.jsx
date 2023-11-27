import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { mainNavLinks } from "../../assets/data/navLinks/mainNavLinks";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const [dropdown, setDropdown] = useState([]);

  const onMouseEnterhandler = (dropDownId) => {
    setDropdown((prev) => {
      let arr = [...prev];
      arr[dropDownId] = true;
      return arr;
    });
  };

  const onMouseLeavehandler = (dropDownId) => {
    setDropdown((prev) => {
      let arr = [...prev];
      arr[dropDownId] = false;
      return arr;
    });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="company-logo" />
        </Link>
      </div>

      <ul className="nav-links">
        {mainNavLinks.map((item) => {
          //
          if (!item.children) {
            return (
              <li key={item.id}>
                <NavLink to={item.path}>{item.name}</NavLink>
                <IoIosArrowDown className="dropdown-icon" />
              </li>
            );
          }

          //
          return (
            <li
              onMouseEnter={() => onMouseEnterhandler(item.id)}
              onMouseLeave={() => onMouseLeavehandler(item.id)}
              key={item.id}
            >
              <div className="item">
                <NavLink to={item.path}>{item.name}</NavLink>
                <IoIosArrowDown className="dropdown-icon" />
              </div>

              {dropdown[item.id] && (
                <ul className="dropdown-menu">
                  {item.children.map((item) => (
                    <li key={item.id}>
                      <NavLink to={item.path}>
                        {item.name}

                        <div className="icon-box">
                          <GoArrowUpRight className="upright-arrow-icon" />
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
