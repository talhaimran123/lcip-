import React from "react";
import "./home.scss";
import Hero from "../../../components/hero/Hero";
import ProvidersSection from "../../../components/providers-section-home/ProvidersSection";
import verizon from "../../../assets/images/brand-logos/verizon.svg";
import spectrum from "../../../assets/images/brand-logos/spectrum.svg";
import netflix from "../../../assets/images/brand-logos/netflix.svg";
import xfinity from "../../../assets/images/brand-logos/xfinity.svg";
import hulu from "../../../assets/images/brand-logos/hulu.svg";
import dish from "../../../assets/images/brand-logos/dish-network.svg";
import InfoCard from "../../../components/info-card-home/InfoCard";
import { infoCards } from "../../../assets/data/infoCards";
import { Link } from "react-router-dom";
import { PackageCard } from "../../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../../assets/data/bestOffersTemporary";
import BlogCard from "../../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../../assets/data/blogsTemporary";
import { AiOutlineArrowRight } from "react-icons/ai";
import Newsletter from "../../../components/newsletter/Newsletter";

const Home = () => {
  return (
    <div className="home">
      <Hero />

      <div className="logos-strip">
        <Link to={"#"} className="logos-strip-img">
          <img src={verizon} alt="verizon-logo" />
        </Link>
        <Link to={"#"} className="logo-strip-img">
          <img src={spectrum} alt="spectrum-logo" />
        </Link>
        <Link to={"#"} className="logo-strip-img">
          <img src={netflix} alt="netflix-logo" />
        </Link>
        <Link to={"#"} className="logo-strip-img">
          <img src={xfinity} alt="xfinity-logo" />
        </Link>
        <Link to={"#"} className="logo-strip-img">
          <img src={hulu} alt="hulu-logo" />
        </Link>
        <Link to={"#"} className="logo-strip-img">
          <img src={dish} alt="dish-logo" />
        </Link>
      </div>

      <div className="info-cards-section section">
        <div className="head">
          <h2 className="sect-heading">
            Let’s hook you up with the best <span>TV and Internet</span>
          </h2>
          <p className="sect-desc">
            Here at CableTV.com, we make the search for TV and internet in your
            area easy so you can fast-forward to the fun part—having TV and
            internet.
          </p>
        </div>

        <div className="cards">
          {infoCards.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              desc={item.desc}
              buttonText={item.buttonText}
              buttonLink={item.buttonLink}
            />
          ))}
        </div>
      </div>

      <ProvidersSection />

      <div className="section best-internet-tv-offer">
        <div className="head">
          <h2 className="sect-heading">
            Best <span>Internet and TV Service</span> Offers
          </h2>
          <p className="sect-desc">
            Unlock a world of savings with our carefully curated selection of
            the best Internet and TV service offers. We've scoured the market to
            bring you exclusive deals and packages that deliver exceptional
            value without compromising on quality. Explore these unbeatable
            offers and elevate your home entertainment and online experiences
            while keeping your budget in check.
          </p>
        </div>

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

      <div className="section we-research">
        <div className="head">
          <h2 className="sect-heading">
            We <span>research</span> so you don’t have to
          </h2>
          <p className="sect-desc">
            No one here expects you to know everything about TV and
            internet—that’s our job. So let our team of experts guide you to the
            best services and products out there.
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

        <Link to={"#"}>
          See more comparisons{" "}
          <span>
            <AiOutlineArrowRight className="right-arrow-icon" />
          </span>
        </Link>
      </div>

      <div className="section editors-choice">
        <div className="head">
          <h2 className="sect-heading">
            Our <span>Editor’s Choice</span> Awards Connect You To The Best Of
            Best
          </h2>
          <p className="sect-desc">
            Unveiling the best of the best, our Editor's Choice Awards celebrate
            excellence and guide you to exceptional choices.
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

        <Link to={"#"}>
          See more ‘Best Of’ Guide
          <span>
            <AiOutlineArrowRight className="right-arrow-icon" />
          </span>
        </Link>
      </div>

      <div className="section quick-answers">
        <div className="head">
          <h2 className="sect-heading">
            Get <span>quick answers</span> without the stress
          </h2>
          <p className="sect-desc">
            Certain questions are easy to answer if you’ve got the right tool
            for the job. Spare yourself the elbow grease—our toolbox is ready
            for you, neighbor.
          </p>
        </div>

        <div className="cards">
          {blogsTemporary.map(
            (item, index) =>
              index === 0 ||
              (1 && (
                <BlogCard
                  key={index}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  shortDesc={item.shortDesc}
                  writerImg={item.writerImg}
                  writerName={item.writerName}
                  postDate={item.postDate}
                />
              ))
          )}
        </div>
      </div>

      <div className="section start-watching">
        <div className="head">
          <h2 className="sect-heading">
            Let’s start <span>watching!</span>
          </h2>
          <p className="sect-desc">
            Super fans, rejoice! Our TV guides help you watch the entertainment
            you’re passionate about, whether that’s pro football, live news, or
            streaming originals.
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

        <Link to={"#"}>
          What to watch this week?
          <span>
            <AiOutlineArrowRight className="right-arrow-icon" />
          </span>
        </Link>
      </div>

      <Newsletter />
    </div>
  );
};

export default Home;
