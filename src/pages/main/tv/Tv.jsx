import React from "react";
import "./tv.scss";
import Searchbar from "../../../components/searchbar/Searchbar";
import { bestOffersTemporary } from "../../../assets/data/bestOffersTemporary";
import { PackageCard } from "../../../components/package-card/PackageCard";
import BrandLogoCard from "../../../components/brand-logo-card/BrandLogoCard";
import dish from "../../../assets/images/brand-logos/dish-network.svg";
import directTv from "../../../assets/images/brand-logos/directtv.svg";
import spectrum from "../../../assets/images/brand-logos/spectrum.svg";
import xfinity from "../../../assets/images/brand-logos/xfinity.svg";
import cox from "../../../assets/images/brand-logos/cox.svg";
import verizon from "../../../assets/images/brand-logos/verizon.svg";
import optimum from "../../../assets/images/brand-logos/optimum.svg";
import astound from "../../../assets/images/brand-logos/astound.svg";
import netflix from "../../../assets/images/brand-logos/netflix.svg";
import youtube from "../../../assets/images/brand-logos/youtube.svg";
import hulu from "../../../assets/images/brand-logos/hulu.svg";
import philo from "../../../assets/images/brand-logos/philo.svg";
import googleFiber from "../../../assets/images/brand-logos/google-fiber.svg";
import peacock from "../../../assets/images/brand-logos/peacock.svg";
import BlogCard from "../../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../../assets/data/blogsTemporary";
import CTA from "../../../components/cta-section/CTA";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Newsletter from "../../../components/newsletter/Newsletter";
import ComparisonSlider from "../../../components/comparison-slider/ComparisonSlider";

const Tv = () => {
  const tvProviders = [
    {
      img: dish,
      linkPath: "#",
    },
    {
      img: directTv,
      linkPath: "#",
    },
    {
      img: spectrum,
      linkPath: "#",
    },
    {
      img: xfinity,
      linkPath: "#",
    },
    {
      img: cox,
      linkPath: "#",
    },
    {
      img: verizon,
      linkPath: "#",
    },
    {
      img: optimum,
      linkPath: "#",
    },
    {
      img: astound,
      linkPath: "#",
    },
  ];

  const streamingServices = [
    {
      img: netflix,
      linkPath: "#",
    },
    {
      img: youtube,
      linkPath: "#",
    },
    {
      img: hulu,
      linkPath: "#",
    },
    {
      img: philo,
      linkPath: "#",
    },
    {
      img: googleFiber,
      linkPath: "#",
    },
    {
      img: peacock,
      linkPath: "#",
    },
  ];

  return (
    <div className="tv">
      <div className="tv-hero">
        <h1>Your guide to all things tV</h1>
        <p>
          Our TV experts spend thousands of hours a year researching and
          reviewing TV services and products. Why do we do it? To connect you to
          the best brands at the best prices. Also, we love watching tons of
          free TV. It's not all altruistic TBH. Scroll down to see a ton of our
          helpful content, and let's start watching!
        </p>

        <div className="form">
          <p>Find TV providers in your area</p>
          <Searchbar />
        </div>
      </div>

      <div className="best-internet-tv-offer">
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

      <div className="section tv-providers">
        <div className="head">
          <h2 className="sect-heading">
            We review <span>TV providers</span>, so you don’t have to
          </h2>
          <p className="sect-desc">
            TV is life here at CableTV.com, and knowing the pros and cons of
            each major TV provider is our lifeblood. Read some reviews, switch
            to a better provider … bada bing, bada boom!
          </p>
        </div>

        <div className="cards">
          {tvProviders.map((item, index) => (
            <BrandLogoCard
              key={index}
              img={item.img}
              linkPath={item.linkPath}
            />
          ))}
        </div>
      </div>

      <div className="section the-internet-for-deals">
        <div className="head">
          <h2 className="sect-heading">
            Our TV experts scour the <span>internet for deals</span>
          </h2>
          <p className="sect-desc">
            Good TV doesn’t come cheap. Or does it? We regularly update our
            content with the latest pricing and deals to help you with your
            budget.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              shortDesc={item.shortDesc}
              writerImg={item.writerImg}
              writerName={item.writerName}
              postDate={item.postDate}
            />
          ))}
        </div>
      </div>

      <CTA
        heading={"Curious which TV service providers are in your neighborhood?"}
        desc={
          "Enter your zip code below to find out what TV providers are available in your area."
        }
      />

      <div className="section comparing-tv-providers">
        <div className="head">
          <h2 className="sect-heading">
            <span>Comparing TV providers</span> has never been easier
          </h2>
          <p className="sect-desc">
            Saying a brand is good, or a brand sucks is one thing. But comparing
            their deets head to head will give you a clearer picture of your
            options.
          </p>
        </div>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Service Provider</th>
                <th>Max Channel Count</th>
                <th>Tech Type</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Astond Broadband</td>
                <td>285+</td>
                <td>Cable</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>2.</td>
                <td>Cox</td>
                <td>250+</td>
                <td>Cable</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>3.</td>
                <td>DIRECTTV</td>
                <td>330+</td>
                <td>Satellite</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>4.</td>
                <td>DISH</td>
                <td>290+</td>
                <td>Satellite</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>5.</td>
                <td>Mediacom</td>
                <td>170+</td>
                <td>Cable</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>6.</td>
                <td>Optimum</td>
                <td>420+</td>
                <td>Cable</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>7.</td>
                <td>Spectrum</td>
                <td>125+</td>
                <td>Cable</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>8.</td>
                <td>Sparklight (Cable One)</td>
                <td>Up to 100</td>
                <td>Cable</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>9.</td>
                <td>Verizon Fios</td>
                <td>425+</td>
                <td>Fiber</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>

              <tr>
                <td>10.</td>
                <td>Xfinity</td>
                <td>260+</td>
                <td>Cable</td>
                <td>
                  <Link to={"#"}>View Plans</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section channel-lineup">
        <div className="head">
          <h2 className="sect-heading">
            Every <span>channel lineup</span> is unique like a snowflake
          </h2>
          <p className="sect-desc">
            It’s well known that TV providers like to play God with our
            entertainment, and a lot of plans won’t have your favorite channels,
            shows, and movies. That’s why it’s important to know your channel
            lineup before you buy.
          </p>
        </div>

        <div className="all-links">
          <Link to={"#"}>Cox Channel Lineup</Link>
          <Link to={"#"}>Optimum Channel Lineup</Link>
          <Link to={"#"}>Verizon Fios Channel Lineup</Link>
          <Link to={"#"}>Direct Channel Lineup</Link>
          <Link to={"#"}>Sparklight Channel Lineup</Link>
          <Link to={"#"}>Xfinity Channel Lineup</Link>
          <Link to={"#"}>Cox Channel Lineup</Link>
          <Link to={"#"}>Spectrum Channel Lineup</Link>
        </div>
      </div>

      <div className="section head-to-head-comparisons">
        <div className="head">
          <h2 className="sect-heading">
            No-holds-barred, <span>head-to-head</span> comparisons
          </h2>
          <p className="sect-desc">
            We know that there are only so many TV providers available in your
            area. We put national brands in head-to-head matchups with their
            direct competitors (and don’t pull any punches), so you get the line
            on your best bet for TV in your neighborhood.
          </p>
        </div>

        <ComparisonSlider />
      </div>

      <div className="section streaming-services">
        <div className="head">
          <h2 className="sect-heading">
            We love reviewing <span>streaming services</span>, too
          </h2>
          <p className="sect-desc">
            We’ve seen it in the cards: streaming is the future of TV. Okay, so
            it doesn’t take a genius to figure that out at this point. In fact,
            most of us over here at CableTV.com choose live TV streaming over
            traditional cable. Read our reviews and see why.
          </p>
        </div>

        <div className="cards">
          {streamingServices.map((item, index) => (
            <BrandLogoCard
              key={index}
              img={item.img}
              linkPath={item.linkPath}
            />
          ))}
        </div>

        <Link to={"#"}>
          learn more
          <span>
            <AiOutlineArrowRight className="right-arrow-icon" />
          </span>
        </Link>
      </div>

      <div className="section latest-tv-gadgets">
        <div className="head">
          <h2 className="sect-heading">
            We nerd out on the <span>latest TV gadgets</span>
          </h2>
          <p className="sect-desc">
            What good is an amazing TV package without the right equipment?
            Whether you’re looking to upgrade your saggy plasma TV or move
            primetime out to your patio, we got you.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map((item, index) => (
            <BlogCard
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              shortDesc={item.shortDesc}
              writerImg={item.writerImg}
              writerName={item.writerName}
              postDate={item.postDate}
            />
          ))}
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Tv;
