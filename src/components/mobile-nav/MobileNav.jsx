import React, { useEffect, useState } from "react";
import "./mobile-nav.scss";
import { RiMenu2Fill } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import Sidebar from "../sidebar/Sidebar";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
    const[sidebar, setSidebar] = useState(false)
    const location = useLocation()

    useEffect(() => (
        setSidebar(false)
    ), [location.pathname])
  return (
    <div className="mobile-nav">
      <div className="icon-box" onClick={() => {setSidebar(true)}}>
        <RiMenu2Fill className="icon"/>
      </div>

      <Link to={'/'} className="logo">
        <img src={logo} alt="logo" />
      </Link>

      {
        sidebar && <Sidebar closeSidebar={setSidebar} />
      }
    </div>
  );
};

export default MobileNav;
