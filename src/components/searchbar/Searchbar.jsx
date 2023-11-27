import React from "react";
import "./searchbar.scss";
import { GoArrowUpRight } from "react-icons/go";
import { RiHomeFill } from "react-icons/ri";

const Searchbar = () => {
  return (
    <form className="searchbar">
      <div className="input-box">
        <RiHomeFill className="house-icon" />
        <input type="text" placeholder="Enter ZIP Code" />
      </div>

      <select name="states">
        <option selected disabled>Browse By State</option>
        <option value="xyz">Xyz</option>
        <option value="xyz">Xyz</option>
        <option value="xyz">Xyz</option>
        <option value="xyz">Xyz</option>
      </select>

      <button type="submit">
        <GoArrowUpRight className="upright-arrow-icon" />
      </button>
    </form>
  );
};

export default Searchbar;
