import React from "react";
import "./sticky-header.scss";
import { Link } from "react-router-dom";

const StickyHeader = () => {
  return (
    <div className="sticky-header">
      <p>
        Get Xfinity now
        <span>
          <Link> Call 1-855-399-1542</Link>
        </span>
      </p>
      <Link>Order Online</Link>
    </div>
  );
};

export default StickyHeader;
