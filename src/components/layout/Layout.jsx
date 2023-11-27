import React, { Suspense, useEffect } from "react";
import Routers from "../../routers/Routers";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import MobileNav from "../mobile-nav/MobileNav";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div>
      <Navbar />
      <MobileNav/>
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
