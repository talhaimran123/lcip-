import React, { useState } from "react";
import "./internet.scss";
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
import BlogCard from "../../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../../assets/data/blogsTemporary";
import CTA from "../../../components/cta-section/CTA";
import Newsletter from "../../../components/newsletter/Newsletter";
import ComparisonSlider from "../../../components/comparison-slider/ComparisonSlider";
import { Link } from "react-router-dom";

const Internet = () => {
  const [accordion, setAccordion] = useState(null);

  const internetProviders = [
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

  const accordionData = [
    {
      title: " more on-demand streaming services",
      content: [
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
        {
          name: "Link Name Here",
          path: "#",
        },
      ],
    },
  ];

  let accordionHandler = (i) => {
    if (accordion === i) {
      return setAccordion(null);
    }

    setAccordion(i);
  };

  return (
    <div className="internet">
      <div className="internet-hero">
        <h1>Your Guide To Internet Services And Equipment</h1>
        <p>
          We have a crush on the internet. Actually, it's a little more than a
          crush . . . it's an obsession. That's why CableTV.com gathers price,
          speed, and availability data on the most prominent internet service
          providers (ISPs) out there, so you can choose your provider
          confidently.
        </p>

        <div className="form">
          <p>Find Internet providers in your area</p>
          <Searchbar />
        </div>
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

      <div className="section internet-providers">
        <div className="head">
          <h2 className="sect-heading">
            Get the scoop on <span>internet providers</span> before you sign up
          </h2>
          <p className="sect-desc">
            TBH, most internet service providers (ISPs) don’t have the best
            reputation. But don’t let that stop you from reading up and avoiding
            the headaches that come from making a snap decision.
          </p>
        </div>

        <div className="cards">
          {internetProviders.map((item, index) => (
            <BrandLogoCard
              key={index}
              img={item.img}
              linkPath={item.linkPath}
            />
          ))}
        </div>

        <div className="accordion">
          {accordionData.map((item, index) => (
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(index)}>
                <span>{accordion === index ? "-" : "+"}</span> {item.title}
              </h3>
              <ol
                type="1"
                className={
                  accordion === index ? "accordion-ol show" : "accordion-ol"
                }
              >
                {item.content.map((item, index) => (
                  <li>
                    {" "}
                    <Link to={item.path}>{item.name}</Link>{" "}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <div className="section best-isp-deals">
        <div className="head">
          <h2 className="sect-heading">
            Save hundreds of dollars a year with the <span>best ISP deals</span>
          </h2>
          <p className="sect-desc">
            Whether you end up bundling services or signing up for a smoking
            introductory rate, we can help you save some serious cash on your
            next ISP.
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

      <div className="section head-to-head-comparisons">
        <div className="head">
          <h2 className="sect-heading">
            Compare <span>top internet providers</span> head to head
          </h2>
          <p className="sect-desc">
            Our experts match up popular internet providers head to head and
            show no mercy. Check out how ISPs in your area square up against one
            another.
          </p>
        </div>

        <ComparisonSlider />
      </div>

      <div className="section cheap-internet-options">
        <div className="head">
          <h2 className="sect-heading">
            We love reviewing <span>Cheap internet options</span> are kinda our
            thing
          </h2>
          <p className="sect-desc">
            On a budget? See if you qualify for low-income internet discounts,
            special offers, and more with our handy guides and reviews.
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
        heading={
          "Curious which internet service providers are in your neighborhood?"
        }
        desc={
          "Enter your zip code below to find out what internet providers are available in your area."
        }
      />

      <div className="section need-for-speed">
        <div className="head">
          <h2 className="sect-heading">
            You’ve got a <span>need for speed</span>, we get it
          </h2>
          <p className="sect-desc">
            This one goes out to all our gamers, streamers, and content
            creators. When you’ve got the need, don’t skimp on the speed.
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

      <div className="section fast-and-reliable">
        <div className="head">
          <h2 className="sect-heading">
            Rural internet can be <span>fast and reliable</span>
          </h2>
          <p className="sect-desc">
            A lot of our lovely readers call wide-open fields and secluded
            mountains home. Who wouldn’t want to? The good news is that rural
            internet is getting faster and more reliable every year.
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

      <div className="section modems-and-routers">
        <div className="head">
          <h2 className="sect-heading">
            We geek out over <span>modems and routers</span>
          </h2>
          <p className="sect-desc">
            Your internet is only as fast as your tech. Don’t get caught in the
            slow lane with a crappy modem or Wi-Fi router with the help of our
            expert guides.
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

      <div className="section top-vpns">
        <div className="head">
          <h2 className="sect-heading">
            Stay secure with <span>top VPNs</span>
          </h2>
          <p className="sect-desc">
            Russian bots! Malware! Government surveillance! Ain’t nobody got
            time for that. Check out our VPN content to stay safe and secure
            online.
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

export default Internet;
