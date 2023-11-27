import React, { useEffect, useState } from "react";
import "./providers-section.scss";
import { providerslogos } from "../../assets/data/providers-logos";
import BrandLogoCard from "../brand-logo-card/BrandLogoCard";
import { BsCheck2 } from "react-icons/bs";

const ProvidersSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeButton, setActiveButton] = useState("tv-providers");

  useEffect(() => {
    if (isLoaded) {
      setIsLoaded(false);
    }
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [activeButton]);

  const [data, setData] = useState(providerslogos.filter(item => item.id==="tv-providers"));

  let allProvidersHandler = (id) => {
    setActiveButton(id);

    const timeout = setTimeout(() => {
      setData(providerslogos);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  };

  let clickHandler = (id) => {
    setActiveButton(id);

    const timeout = setTimeout(() => {
      let filteredData = providerslogos.filter((item) => item.id === id);
      setData(filteredData);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <div className="section providers-section">
      <div className="head">
        <h2 className="sect-heading">
          Find top <span>internet and tV</span> providers
        </h2>

        <p className="sect-desc">
          We’ve got the deets on every major TV and internet provider in the US.
          Read some of our expert reviews to see which one is right for you.
        </p>
      </div>

      <div className="providers-section-main">
        <div className="tabs">
          <button
            onClick={() => clickHandler("tv-providers")}
            className={`${activeButton === "tv-providers" ? "active-btn" : ""}`}
          >
            <div className="icon-box">
              <BsCheck2 className="check-icon" />
            </div>
            <p>TV Service Providers</p>
          </button>

          <button
            onClick={() => clickHandler("internet-providers")}
            className={`${
              activeButton === "internet-providers" ? "active-btn" : ""
            }`}
          >
            <div className="icon-box">
              <BsCheck2 className="check-icon" />
            </div>
            <p>Internet Service Providers</p>
          </button>

          <button
            onClick={() => clickHandler("stream-providers")}
            className={`${
              activeButton === "stream-providers" ? "active-btn" : ""
            }`}
          >
            <div className="icon-box">
              <BsCheck2 className="check-icon" />
            </div>
            <p>Streaming Service Providers</p>
          </button>

          <button
            onClick={() => allProvidersHandler("all-providers")}
            className={`${
              activeButton === "all-providers" ? "active-btn" : ""
            }`}
          >
            <div className="icon-box">
              <BsCheck2 className="check-icon" />
            </div>
            <p>All Service Providers</p>
          </button>
        </div>

        <div className={`cards ${isLoaded === true ? "animate" : ""}`}>
          {data.map((item, index) => (
            <BrandLogoCard
              key={index}
              img={item.img}
              linkPath={item.linkPath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProvidersSection;
