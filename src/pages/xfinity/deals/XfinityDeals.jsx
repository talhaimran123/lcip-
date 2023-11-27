import React, { useState } from "react";
import "./xfinity-deals.scss";
import SubNav from "../../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../../assets/data/navLinks/xfinityNavLinks";
import InnerPagesHero from "../../../components/inner-pages-hero/InnerPagesHero";
import StickyHeader from "../../../components/sticky-header/StickyHeader";
import discountIcon from "../../../assets/images/discount-icon.svg";
import xfinityDealsHeroBg from "../../../assets/images/xfinity-deals-hero-bg.jpg";
import { PackageCard } from "../../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../../assets/data/bestOffersTemporary";
import { Link } from "react-router-dom";
import PackageTable from "../../../components/package-table/PackageTable";
import quotations from "../../../assets/images/quotations.svg";

const XfinityDeals = () => {
  const [faq, setFaq] = useState();

  const heroContent = {
    img: xfinityDealsHeroBg,
    heading: "Xfinity Deals And Promotions - October 2023",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam.",
    points: [
      "Get internet + streaming for $50/mo. when you add Xfinity Mobile",
      "Free Max, SHOWTIME, or Netflix",
      "Free Xfinity Wi-Fi hotspots",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "Internet deals starting at $19.99/mo.",
  };

  let packageTableData = [
    {
      head: ["Deal", "Introductory price", "Details"],

      body: [
        {
          content: [
            "1.",
            "Get Netflix, EPIX, and 150 hours of DVR storage",
            "$20.00/mo.",
          ],
          linkPath: "#",
        },

        {
          content: [
            "2.",
            "Get Max, EPIX, and 150 hours of DVR storage",
            "$20.00/mo.",
          ],
          linkPath: "#",
        },

        {
          content: [
            "3.",
            "Get Max, Netflix, SHOWTIME, EPIX, and 150 hours of DVR storage",
            "$40.00/mo.",
          ],
          linkPath: "#",
        },
      ],
    },
  ];

  return (
    <div className="xfinity-deals">
      <SubNav links={xfinityNavLinks} />
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="endnote limited-time-offer">
        <div className="endnote-container">
          <img src={discountIcon} alt="discount" />
          <h4>Limited-time offer:</h4>
          <p>
            Save up to $45 per month on Xfinity internet when you bundle Xfinity
            Mobile with your Xfinity plan.
          </p>
        </div>
      </div>

      <div className="section top-xfinity-deals">
        <div className="head">
          <h2 className="sect-heading">
            Top Xfinity <span>deals and promotions</span>
          </h2>
          <p className="sect-desc">
            <span>
              <Link to={"#"}>Xfinity</Link>
            </span>
            {""}
            is available almost everywhere in the US. In some areas, it’s the
            only cable TV and internet service you can get. That’s not
            necessarily a bad thing, as Xfinity’s new customers can choose from
            several excellent and relatively inexpensive plans and packages
            (and, let’s be honest, a few strikingly pricey ones). <br />
            Whether you’re going cheap or premium with your Xfinity service,
            we’ve rounded up several Xfinity bundles and promotions and other
            ways to save a few bucks on your monthly bill.
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

      <div className="section important-links">
        <div className="head">
          <h2 className="sect-heading">
            Jump to <span>important links</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Sit purus quis porttitor
            scelerisque sem tempor netus. Nisi diam pulvinar pharetra lacus in a
            pellentesque nunc consequat. Commodo elit dignissim vulputate
            cursus. Dictum in morbi vestibulum posuere placerat pellentesque
            eros congue molestie.
          </p>
        </div>

        <div className="all-links">
          <Link to={"#"}>Free Max, SHOWTIME, or Netflix</Link>
          <Link to={"#"}>Student discounts</Link>
          <Link to={"#"}>Military and veteran discounts</Link>
          <Link to={"#"}>Xfinity Mobile discount</Link>
          <Link to={"#"}>Affordable internet</Link>
          <Link to={"#"}>3-for-1 bundle</Link>
        </div>
      </div>

      <div className="section xfinity-with-max-showtime-netflix">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity with <span>Max, SHOWTIME, or Netflix</span>
          </h2>
          <p className="sect-desc">
            If you’re looking to splurge on an ultra-fast internet plan with
            channel-loaded TV service, some higher-end{" "}
            <span>
              <Link to={"#"}>Xfinity bundles</Link>
            </span>{" "}
            and plans come with free or discounted streaming service bundles.
            <br />
            For example, if you have Ultimate TV in Xfinity’s Northeast region,
            you can add discounted{" "}
            <span>
              <Link to={"#"}>Max</Link>
            </span>
            ,
            <span>
              <Link to={"#"}>SHOWTIME</Link>
            </span>{" "}
            ,{" "}
            <span>
              <Link to={"#"}>Netflix</Link>
            </span>{" "}
            streaming service bundles to your plan. Xfinity’s Ultimate TV plan
            comes with more than 185+ TV channels including NFL Network, NBA TV,
            and MLB Network.
          </p>
        </div>

        <div className="package-table-container west-region">
          <h4>
            Xfinity internet and TV bundles with included Max, SHOWTIME, or
            Netflix
          </h4>
          <PackageTable item={packageTableData} />
          <p className="below-table">
            Data effective as of post date. Offers and availability may vary by
            location and are subject to change.
          </p>
        </div>
      </div>

      <div className="section xfinity-deals">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>deals</span>
          </h2>
          <p className="sect-desc">
            Lorem ipsum dolor sit amet consectetur. Morbi cursus eget a ut elit.
            Viverra mi faucibus aliquam sapien commodo nec consectetur nibh
            lectus. Sed gravida blandit a risus aliquam orci elit faucibus.
            Aliquet eget elit congue aliquam cras blandit amet.
          </p>
        </div>

        <div className="endnote xfinity-for-students">
          <div className="endnote-container">
            <h4>Xfinity for students</h4>
            <p>
              Xfinity offers students attending select universities and colleges{" "}
              <span className="link">
                <Link>exclusive online deals</Link>
              </span>{" "}
              for TV and internet service (eligibility verification required).{" "}
              <br />
              For college students, the current deal offers you up to a $100
              Visa gift card when you sign a one-year contract for one of
              Xfinity’s qualifying internet plans. This deal is only available
              for students who live in off-campus housing—on-campus housing
              usually has its own internet plan that you’ll sublease. But act
              quickly, because this particular deal ends October 2.
            </p>

            <div className="inner-container">
              <img src={quotations} alt="quotations" />
              <p>
                Hey, it’s your fav writer,{" "}
                <span className="link">
                  <Link>Rachel Oaks,</Link>
                </span>{" "}
                with some words of hard-earned wisdom. Before you sign up for
                Xfinity as a student, make sure that you’re in the position to
                keep Xfinity for the full 12 months of the contract. If you
                break the contract, Xfinity charges costly early termination
                fees. <br />
                Back in college, some roommates bamboozled me into putting our
                shared internet under my name and then said roommates bailed the
                next month when they couldn’t pay the rent. I had to find a new
                place to live, and I got left with a hefty bill for eleven
                months’ worth of early termination fees. Make smarter choices
                than me.
              </p>
            </div>
          </div>
        </div>

        <div className="endnote xfinity-for-military">
          <div className="endnote-container">
            <h4>Xfinity for military members and veterans</h4>
            <p>
              If you’re a current member of the{" "}
              <span className="link">
                <Link to={"#"}>US military or a veteran</Link>
              </span>{" "}
              who’s signed up for Xfinity service within the past 90 days, you
              can receive a $50 prepaid Visa card (eligibility verification
              required).
            </p>
          </div>
        </div>

        <div className="endnote xfinity-mobile-deals">
          <div className="endnote-container">
            <h4>Xfinity Mobile deals</h4>
            <div>
              <p>Check out Xfinity Mobile’s best deals:</p>
              <ul>
                <li>Save on these phones when you join Xfinity Mobile:</li>
                <ul>
                  <li>$400 off an iPhone 15 or iPhone 15 Pro</li>
                  <li>
                    Save up to $830 on an iPhone 15 Pro with a qualifying
                    trade-in
                  </li>
                  <li>$100 on a Google Pixel 7a</li>
                </ul>
              </ul>
              <p>
                Get a free Unlimited Intro line and 400Mbps internet for $50/mo.
                for two years
              </p>
            </div>
          </div>
        </div>

        <div className="endnote xfinity-mobile-deals">
          <div className="endnote-container">
            <h4>Xfinity affordable internet</h4>
            <div>
              <p>
                Xfinity offers low-income households 50 Mbps download speeds for
                $9.95 a month (plus tax) or 100 Mbps download speeds for $29.95
                a month with Internet Essentials Plus from Comcast. Plus, you
                can combine this offer with the{" "}
                <span>
                  <Link to={"#"}>Affordable Connectivity Program (ACP)</Link>
                </span>{" "}
                to get your internet service for free. <br />
                While many internet providers offer similar assistance programs,
                Xfinity’s is one of the easiest to qualify for. If you’re
                already participating in one of these programs, you’re eligible
                for Internet Essentials:
              </p>
              <ul>
                <li>Federal Pell Grant</li>
                <li>National School Lunch Program or Head Start</li>
                <li>Low Income Home Energy Assistance Program</li>
                <li>Public housing assistance</li>
                <li>Supplemental Nutrition Assistance Program</li>
                <li>Supplemental Security Income</li>
                <li>Temporary Assistance for Needy Families</li>
                <li>Tribal assistance programs</li>
                <li>Veterans Administration Pension</li>
                <li>Women, Infants, and Children program</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="endnote xfinity-mobile-deals">
          <div className="endnote-container">
            <h4>3-for-1 bundle</h4>
            <div>
              <p>
                For a limited time, get 400 Mbps internet + equipment for only
                $50 a month when you add Xfinity Mobile to your plan. Not enough
                of a deal for you? This bundle also comes with these perks:
              </p>
              <ul>
                <li>Internet equipment included</li>
                <li>2-year price guarantee</li>
                <li>No term contract</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XfinityDeals;
