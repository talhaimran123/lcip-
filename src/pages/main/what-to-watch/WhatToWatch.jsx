import React from "react";
import "./what-to-watch.scss";
import { PackageCard } from "../../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../../assets/data/bestOffersTemporary";
import dish from "../../../assets/images/brand-logos/dish-network.svg";
import directTv from "../../../assets/images/brand-logos/directtv.svg";
import spectrum from "../../../assets/images/brand-logos/spectrum.svg";
import xfinity from "../../../assets/images/brand-logos/xfinity.svg";
import BrandLogoCard from "../../../components/brand-logo-card/BrandLogoCard";
import { watchCardsTemporary } from "../../../assets/data/watchCardsTemporary";
import WatchCards from "../../../components/what-to-watch-card/WatchCard";
import { Link } from "react-router-dom";
import CTA from "../../../components/cta-section/CTA";
import Newsletter from "../../../components/newsletter/Newsletter";

const WhatToWatch = () => {
  const streamingProviders = [
    {
      img: dish,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: directTv,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: spectrum,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: xfinity,
      linkName: "Read Review",
      linkPath: "#",
    },
  ];

  return (
    <div className="what-to-watch">
      <div className="what-to-watch-hero">
        <h1>What to watch this week | October 2-8</h1>
        <p>
          CableTV.com’s consummate viewing recommendations for shows, movies,
          sports, and more on TV this weekend.
        </p>
      </div>

      <div className="section best-internet-tv-offer">
        <div className="cards">
          {bestOffersTemporary.map((item, index) => (
            <PackageCard
              key={index}
              img={item.img}
              tagName={item.tagName}
              packageName={item.packageName}
              packagePoints={item.packagePoints}
              price={item.price}
              linkPath={item.linkPath}
            />
          ))}
        </div>
      </div>

      <div className="section streaming-providers">
        <div className="head">
          <h2 className="sect-heading">
            Jump to your <span>preferred streaming service</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Eget lobortis volutpat enim
            feugiat volutpat euismod. In dolor arcu maecenas elementum ornare
            proin id velit vehicula. Lacus lectus quis fermentum et. Orci
            posuere luctus erat tellus venenatis pellentesque blandit at.
          </p>
        </div>

        <div className="cards">
          {streamingProviders.map((item, index) => (
            <BrandLogoCard
              key={index}
              img={item.img}
              linkName={item.linkName}
              linkPath={item.linkPath}
            />
          ))}
        </div>
      </div>

      <div className="section whats-premiering">
        <div className="head">
          <h2 className="sect-heading">
            <span>What’s premiering</span> this week
          </h2>
          <p className="sect-desc">
            TV is life here at CableTV.com, and knowing the pros and cons of
            each major TV provider is our lifeblood. Read some reviews, switch
            to a better provider … bada bing, bada boom!
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map(
            (item, index) =>
              index === 0 && (
                <WatchCards
                  key={index}
                  img={item.thumbnail}
                  title={item.title}
                  desc={item.desc}
                />
              )
          )}

          <Link to={"#"}>what to watch on peacock</Link>

          {watchCardsTemporary.map(
            (item, index) =>
              index === 1 && (
                <WatchCards
                  key={index}
                  img={item.thumbnail}
                  title={item.title}
                  desc={item.desc}
                />
              )
          )}

          <Link to={"#"}>best streaming services for sports</Link>
        </div>
      </div>

      <CTA
        heading={"Get more live sports and breaking news"}
        desc={
          "Enter your zip code below to see top TV providers in your neighborhood"
        }
      />

      <div className="section watch-on-netflix">
        <div className="head">
          <h2 className="sect-heading">
            What to watch on <span>Netflix</span> this week
          </h2>
          <p className="sect-desc">
            TV is life here at CableTV.com, and knowing the pros and cons of
            each major TV provider is our lifeblood. Read some reviews, switch
            to a better provider … bada bing, bada boom!
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link to={"#"}>what to watch on netflix</Link>
        </div>
      </div>

      <div className="section watch-on-max">
        <div className="head">
          <h2 className="sect-heading">
            What to watch on <span>Max</span> this week
          </h2>
          <p className="sect-desc">
            TV is life here at CableTV.com, and knowing the pros and cons of
            each major TV provider is our lifeblood. Read some reviews, switch
            to a better provider … bada bing, bada boom!
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link to={"#"}>What to watch on Max</Link>
        </div>
      </div>

      <CTA
        heading={"Does your streaming quality suck?"}
        desc={"Find a faster internet provider near you now"}
      />

      <div className="section watch-on-peacock">
        <div className="head">
          <h2 className="sect-heading">
            What to watch on <span>Peacock</span> this week
          </h2>
          <p className="sect-desc">
            TV is life here at CableTV.com, and knowing the pros and cons of
            each major TV provider is our lifeblood. Read some reviews, switch
            to a better provider … bada bing, bada boom!
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link to={"#"}>what to watch on peacock</Link>
        </div>
      </div>

      <div className="section watch-on-prime-video">
        <div className="head">
          <h2 className="sect-heading">
            What to watch on <span>Amazon Prime Video</span> this week
          </h2>
          <p className="sect-desc">
            TV is life here at CableTV.com, and knowing the pros and cons of
            each major TV provider is our lifeblood. Read some reviews, switch
            to a better provider … bada bing, bada boom!
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link to={"#"}>what to watch on Amazon Prime Video</Link>
        </div>
      </div>

      <div className="section related-articles">
        <div className="head">
          <h2 className="sect-heading">
            Related <span>articles</span>
          </h2>
          <p className="sect-desc">
            It’s well known that TV providers like to play God with our
            entertainment, and a lot of plans won’t have your favorite channels,
            shows, and movies. That’s why it’s important to know your channel
            lineup before you buy.
          </p>
        </div>

        <div className="all-links">
          <Link to={"#"}>What to Watch on Max</Link>
          <Link to={"#"}>Movies to Watch on Disney+</Link>
          <Link to={"#"}>What to Watch on Paramount+</Link>
          <Link to={"#"}>What to Watch on Hulu</Link>
          <Link to={"#"}>What to Watch on Paramount+</Link>
          <Link to={"#"}>What to Watch on Apple TV+</Link>
          <Link to={"#"}>What to Watch on Amazon Prime Video</Link>
          <Link to={"#"}>What to Watch on Sling TV</Link>
          <Link to={"#"}>What to Watch on Netflix</Link>
        </div>
      </div>

      <div className="section w2w-wildcards">
        <div className="head">
          <h2 className="sect-heading">
            <span>W2W wildcards</span> of the week
          </h2>
          <p className="sect-desc">
            TV is life here at CableTV.com, and knowing the pros and cons of
            each major TV provider is our lifeblood. Read some reviews, switch
            to a better provider … bada bing, bada boom!
          </p>
        </div>

        <div className="what-to-watch-cards">
          {watchCardsTemporary.map((item, index) => (
            <WatchCards
              key={index}
              img={item.thumbnail}
              title={item.title}
              desc={item.desc}
            />
          ))}

          <Link to={"#"}>Find out more</Link>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default WhatToWatch;
