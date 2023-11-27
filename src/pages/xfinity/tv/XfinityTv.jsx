import React, { useState } from "react";
import "./xfinity-tv.scss";
import InnerPagesHero from "../../../components/inner-pages-hero/InnerPagesHero";
import xfintyTvHeroBg from "../../../assets/images/xfinity-tv-hero-bg.jpg";
import SubNav from "../../../components/sub-nav/SubNav";
import { xfinityNavLinks } from "../../../assets/data/navLinks/xfinityNavLinks";
import StickyHeader from "../../../components/sticky-header/StickyHeader";
import { PackageCard } from "../../../components/package-card/PackageCard";
import { bestOffersTemporary } from "../../../assets/data/bestOffersTemporary";
import { Link } from "react-router-dom";
import PackageTable from "../../../components/package-table/PackageTable";
import CTA from "../../../components/cta-section/CTA";
import xfinityBundlesAndDeals from "../../../assets/images/xfinity-bundles-and-deals.jpg";
import xfinityEquipments from "../../../assets/images/xfinity-equipments.jpg";
import quotations from "../../../assets/images/quotations.svg";
import Newsletter from "../../../components/newsletter/Newsletter";

const XfinityTv = () => {
  const [accordion, setAccordion] = useState(null);
  const [faq, setFaq] = useState(null);

 let packageTableData = [
    {
      head: [
        "Top packages",
        "Price",
        "Channels",
        "Popular channels",
        "column name",
        "Internet speed",
        "Details",
      ],
      
      body: [
          
        {
          content: [
            "1.",
            "Popular TV",
            "$50.00/mo.",
            "125+",
            "AMC, Comedy Central, Disney Channel",
            "$0.40",
            "N/A",
          ],
          linkPath: "#",
        },
  
        {
          content: [
            "2.",
            "Ultimate TV",
            "$68.50/mo.",
            "185+",
            "IFC, Disney XD, Nat Geo Wild",
            "$0.37",
            "N/A",
          ],
          linkPath: "#",
        },
  
        {
          content: [
            "3.",
            "Gigabit Extra Internet + Ultimate TV",
            "$130.00/mo.",
            "185+",
            "Cooking Channel, Cartoon Network, MLB Network",
            "$0.70",
            "1,200 Mbps",
          ],
          linkPath: "#",
        },
  
      ],
    },
  ];

  const heroContent = {
    img: xfintyTvHeroBg,
    heading: "Xfinity TV Packages, Plans, And Prices",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor facilisis vel nunc faucibus elementum. Tortor dui massa lacus sem scelerisque morbi sit dui. Ut et diam dui aliquam vitae aliquam",
    points: [
      "Up to 185+ channels including Golf, ESPN, TBS, and Bravo",
      "Save up to $40/mo. bundling w/ internet and phone",
      "Xfinity streaming app for on-the-go viewing",
    ],
    buttonName: "View plans",
    buttonPath: "#",
    price: "TV packages starting at $20.00/mo.",
  };

  let accordionHandler = (i) => {
    if (faq === i) {
      return setFaq(null);
    }

    setFaq(i);
  };

  return (
    <div className="xfinity-tv">
      <SubNav links={xfinityNavLinks} />
      <InnerPagesHero data={heroContent} />
      <StickyHeader />

      <div className="section best-tv-service-offers">
        <div className="head">
          <h2 className="sect-heading">
            Best <span>TV Service</span> Offers
          </h2>
          <p className="sect-desc">
            Unlock a world of savings with our carefully curated selection of
            the best TV service offers. We've scoured the market to bring you
            exclusive deals and packages that deliver exceptional value without
            compromising on quality. Explore these unbeatable offers and elevate
            your home entertainment and online experiences while keeping your
            budget in check.
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

        <div className="accordion">
          <div className="item">
            <h3 className="title" onClick={() => setAccordion(!accordion)}>
              <span>{accordion === true ? "-" : "+"}</span> Which Xfinity region
              i’m in?
            </h3>

            <div className={`faq-content custom-table ${accordion === true ? "show" : ""}`}>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>West region</th>
                    <th>Northeast region</th>
                    <th>Central region</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Astond Broadband</td>
                    <td>285+</td>
                    <td>Cable</td>
                  </tr>

                  <tr>
                    <td>2.</td>
                    <td>Cox</td>
                    <td>250+</td>
                    <td>Cable</td>
                  </tr>

                  <tr>
                    <td>3.</td>
                    <td>DIRECTTV</td>
                    <td>330+</td>
                    <td>Satellite</td>
                  </tr>

                  <tr>
                    <td>4.</td>
                    <td>DISH</td>
                    <td>290+</td>
                    <td>Satellite</td>
                  </tr>

                  <tr>
                    <td>5.</td>
                    <td>Mediacom</td>
                    <td>170+</td>
                    <td>Cable</td>
                  </tr>

                  <tr>
                    <td>6.</td>
                    <td>Optimum</td>
                    <td>420+</td>
                    <td>Cable</td>
                  </tr>

                  <tr>
                    <td>7.</td>
                    <td>Spectrum</td>
                    <td>125+</td>
                    <td>Cable</td>
                  </tr>

                  <tr>
                    <td>8.</td>
                    <td>Sparklight (Cable One)</td>
                    <td>Up to 100</td>
                    <td>Cable</td>
                  </tr>

                  <tr>
                    <td>9.</td>
                    <td>Verizon Fios</td>
                    <td>425+</td>
                    <td>Fiber</td>
                  </tr>

                  <tr>
                    <td>10.</td>
                    <td>Xfinity</td>
                    <td>260+</td>
                    <td>Cable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="section top-xfinity-tv-packages">
        <div className="head">
          <h2 className="sect-heading">
            Top <span>Xfinity</span> TV packages
          </h2>
          <p className="sect-desc">
            Saying a brand is good, or a brand sucks is one thing. But comparing
            their deets head to head will give you a clearer picture of your
            options.
          </p>
        </div>

        <div className="package-table-container west-region">
          <h4>Xfinity TV: West region</h4>
          <PackageTable item={packageTableData} />
        </div>

        <div className="package-table-container central-region">
          <h4>Xfinity TV: Central region</h4>
          <PackageTable item={packageTableData} />
        </div>

        <div className="package-table-container northeast-region">
          <h4>Xfinity TV: Northeast region</h4>
          <PackageTable item={packageTableData} />
        </div>
      </div>

      <CTA
        heading={"Ready to start watching your favorite shows?"}
        desc={
          "Xfinity TV plans vary by region. Enter your zip code below to see which packages are available in your area."
        }
      />

      <div className="section xfinity-bundles">
        <div className="watch-card">
          <img src={xfinityBundlesAndDeals} alt="thumbnail" />

          <div className="watch-card-content">
            <h4 className="title">
              Save up to $60 per month with Xfinity bundles <br /> and deals
            </h4>
            <p className="desc">
              You showed up to save money, and we’re here for it. When you pick
              the right Xfinity bundle, you’ll get exactly what you deserve—a
              great deal. We’ve researched prices and compiled pricing
              comparison tables for
              <span>
                <Link>Xfinity TV bundle deals in your area.</Link>
              </span>
              <br />
              In addition to your budget-friendly bundling options, please go
              crazy with all of
              <span>
                <Link> Xfinity’s current deals and promotions.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="section more-channels">
        <div className="head">
          <h2 className="sect-heading">
            Get <span>more channels</span> with Xfinity channel lineups
          </h2>
          <p className="sect-desc">
            Get up to 185+ channels, including 30 of the most-watched channels
            in the US¹. That’s around 80 more channels than streaming services
            like YouTube TV. Check out
            <span>
              <Link to={"#"}>Xfinity’s full channel lineup</Link>
            </span>
            here. <br /> Keep in mind the exact number of channels varies by
            your location. Enter your address to find out what channels are
            available to you.
          </p>
        </div>

        <div className="custom-table more-channels-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Xfinity TV plan</th>
                <th>Popular channels</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Choice TV</td>
                <td>NBC, ABC, FOX</td>
              </tr>

              <tr>
                <td>2.</td>
                <td>Popular TV</td>
                <td>AMC, Cartoon Network, Disney Channel</td>
              </tr>

              <tr>
                <td>3.</td>
                <td>Ultimate TV</td>
                <td>IFC, Disney XD, Nat Geo Wild</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section xfinity-tv-equipments">
        <div className="head">
          <h2 className="sect-heading">
            Experience <span>top user-rated</span> Xfinity TV equipment and
            services
          </h2>

          <p className="sect-desc">
            From the advanced X1 to its award-winning voice remote, Xfinity has
            some of the best TV equipment on the market. But what do Xfinity’s
            actual customers think? Check out our annual
            <span>
              <Link to={"#"}> TV customer satisfaction survey </Link>
            </span>
            to see how Xfinity TV equipment compares to the competition. <br />
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive
            <span>
              <Link to={"#"}> Xfinity equipment guide. </Link>
            </span>
          </p>
        </div>

        <div className="sideimg-card">
          <img src={xfinityEquipments} alt="thumbnail" />

          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>

              <ul>
                <li>User-friendly interface</li>
                <li>Award-winning voice remote</li>
                <li>Record up to 5 shows while watching another</li>
              </ul>

              <p>
                For more on the X1, read our in-depth
                <span>
                  <Link>Xfinity X1 review</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="sideimg-card">
          <img src={xfinityEquipments} alt="thumbnail" />

          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>

              <ul>
                <li>User-friendly interface</li>
                <li>Award-winning voice remote</li>
                <li>Record up to 5 shows while watching another</li>
              </ul>

              <p>
                For more on the X1, read our in-depth
                <span>
                  <Link>Xfinity X1 review</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="sideimg-card">
          <img src={xfinityEquipments} alt="thumbnail" />

          <div className="sideimg-card-content">
            <h4 className="title">Xfinity X1 DVR</h4>
            <div className="desc">
              <p>
                You showed up to save money, and we’re here for it. When you
                pick the right Xfinity bundle, you’ll get exactly what you
                deserve—a great deal. We’ve researched prices and compiled
                pricing comparison tables for
              </p>

              <ul>
                <li>User-friendly interface</li>
                <li>Award-winning voice remote</li>
                <li>Record up to 5 shows while watching another</li>
              </ul>

              <p>
                For more on the X1, read our in-depth
                <span>
                  <Link>Xfinity X1 review</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section xfinity-tv-faq">
        <div className="head">
          <h2 className="sect-heading">
            Xfinity <span>TV</span> FAQ
          </h2>

          <p className="sect-desc">
            TL;DR? Xfinity kills it. For more detailed info on all Xfinity
            equipment and services, see our comprehensive Xfinity equipment
            guide.
          </p>
        </div>

        <div className="faq-wrapper">
          <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(1)}>
                <span>{faq === 1 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 1 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(2)}>
                <span>{faq === 2 ? "-" : "+"}</span> What is the cheapest
                Xfinity TV package?
              </h3>

              <div className={`faq-content ${faq === 2 ? "show" : ""}`}>
                <p>
                  The cheapest Xfinity TV package is{" "}
                  <span className="bold"> Choice TV</span>, a basic cable
                  package that offers 10+ channels for $20.00–$25.00/mo.
                </p>
                <p>
                  The cheapest regular cable package is{" "}
                  <span className="bold"> Popular TV</span> ($50.00–$60.00/mo.,
                  125+ channels).
                </p>
                <p>
                  Looking for more ways to cut monthly costs? We like the way
                  you think! View Xfinity’s{" "}
                  <span className="link">
                    <Link to={"#"}>current deals and promotions</Link>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(3)}>
                <span>{faq === 3 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 3 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(4)}>
                <span>{faq === 4 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 4 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion">
            <div className="item">
              <h3 className="title" onClick={() => accordionHandler(5)}>
                <span>{faq === 5 ? "-" : "+"}</span> What are Xfinity tV
                packages?
              </h3>

              <div className={`faq-content ${faq === 5 ? "show" : ""}`}>
                <p>
                  Xfinity TV packages by Comcast come through a cable connection
                  with up to 185+ channels. Most packages also include 20 hours
                  of DVR storage via the X1 DVR box, plus the Xfinity Stream
                  app.
                </p>
                <ul>
                  <li>
                    <span className="bold">Choice TV: </span>
                    $20.00–$25.00/mo., 10+ channels
                  </li>
                  <li>
                    <span className="bold">Popular TV: </span>
                    $50.00–$60.00/mo., 125+ channels
                  </li>
                  <li>
                    <span className="bold">Ultimate TV: </span>
                    $68.50–$80.00/mo., 185+ channels
                  </li>
                </ul>

                <p>
                  Check to see what Xfinity TV packages are available in your
                  area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="endnote tv-endnote">
        <div className="endnote-container">
          <img className="quotation-img" src={quotations} alt="quotations" />
          <h4>Endnote:</h4>
          <p>
            1. Variety, “
            <span className="link">
              <Link to={"#"}>
                Most-Watched Television Networks: Ranking 2019’s Winners and
                Losers
              </Link>
            </span>
            ,” December 2019. Accessed June 15, 2022.
          </p>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default XfinityTv;
