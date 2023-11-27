import React, { useState } from "react";
import "./streaming.scss";
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

const Streaming = () => {
  const [accordion, setAccordion] = useState(null);

  let accordionHandler = (i) => {
    if (accordion === i) {
      return setAccordion(null);
    }

    setAccordion(i);
  };

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
    {
      img: cox,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: verizon,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: optimum,
      linkName: "Read Review",
      linkPath: "#",
    },
    {
      img: astound,
      linkName: "Read Review",
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

  return (
    <div className="streaming">
      <div className="streaming-hero">
        <h1>Your Guide To Live TV And On-Demand Streaming</h1>
        <p>
          We may be called CableTV.com, but we absolutely love our streaming TV.
          You might call streaming our dirty little secret. Streaming is cheap,
          convenient, and flexible. And with the breadth of streaming services
          available these days, streaming has pretty much anything any fan could
          ask for.
        </p>

        <div className="form">
          <p>Find Streaming Services providers in your area</p>
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

      <div className="section streaming-providers">
        <div className="head">
          <h2 className="sect-heading">
            We review every top on-demand <span>streaming service</span>
          </h2>
          <p className="sect-desc">
            If you don’t know already, streaming is much, much more than just
            Netflix and Hulu these days. There’s literally an on-demand
            streaming service for every type of fan. Check out one of our
            reviews, and see which on-demand streaming service is right for you.
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

      <div className="section live-streaming">
        <div className="head">
          <h2 className="sect-heading">
            We may be CableTV.com, but we know <span>live TV streaming</span>
          </h2>
          <p className="sect-desc">
            Live TV streaming services are the real, true-blue replacements for
            cable. You don’t have as many options as on-demand streaming
            services, and live TV streaming services can be pretty pricey. But
            if you want live sports, news, and special events, live TV streaming
            is where it’s at, and we got the reviews to help you choose the
            right one.
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

      <div className="section best-streaming-services">
        <div className="head">
          <h2 className="sect-heading">
            You want the <span>best streaming service</span>, you got it
          </h2>
          <p className="sect-desc">
            At this point, some of our newer readers might be a little lost (so
            many logos and funny corporate names). That’s why our experts curate
            best-of lists and give out Editor’s Choice awards, so you don’t
            waste your time with streaming services that aren’t up to snuff.
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
          "Curious which streaming service providers are in your neighborhood?"
        }
        desc={
          "Enter your zip code below to find out what streaming providers are available in your area."
        }
      />

      <div className="section head-to-head-comparisons">
        <div className="head">
          <h2 className="sect-heading">
            Compare <span>streaming services</span> head to head
          </h2>
          <p className="sect-desc">
            Have you narrowed down your choices? Our experts also compare top
            streaming services head to head, so you can drill down a little bit
            more before you sign up.
          </p>
        </div>

        <ComparisonSlider />
      </div>

      <div className="section lot-of-services">
        <div className="head">
          <h2 className="sect-heading">
            There are a <span>lot of services</span> out there. We can help.
          </h2>
          <p className="sect-desc">
            Again, all the streaming choices can get overwhelming. Let our
            gentle, guiding arm lead you the whole way, from how to choose a
            streaming service to how to bundle more than one streaming service.
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

      <div className="section make-or-break">
        <div className="head">
          <h2 className="sect-heading">
            Streaming devices can <span>make or break</span> your experience
          </h2>
          <p className="sect-desc">
            Streaming devices are the engine that keep your streaming services
            running. You can go full-on muscle car (like Apple TV 4K) or settle
            for an economy hatchback (like Google Chromecast). No shade either
            way because the one you choose should depend on your needs and
            budget, not keeping up with the Joneses.
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

      <div className="section trust-us">
        <div className="head">
          <h2 className="sect-heading">
            We know the industry, so you can <span>trust us</span>
          </h2>
          <p className="sect-desc">
            It’s not enough to give our opinions. We want to hear from real
            customers and know how the technology actually works. Read up on
            what customers think and how it all works before you dive into the
            stream.
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

export default Streaming;
