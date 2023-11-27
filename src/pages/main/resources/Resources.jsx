import React from "react";
import "./resources.scss";
import CTA from "../../../components/cta-section/CTA";
import BlogCard from "../../../components/blog-card/BlogCard";
import { blogsTemporary } from "../../../assets/data/blogsTemporary";
import img from "../../../assets/images/resources-slider-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Newsletter from "../../../components/newsletter/Newsletter";

const Resources = () => {
  return (
    <div className="resources">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="resources-slider"
      >
        <SwiperSlide>
          <img src={img} alt="slide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2023: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2023: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2023: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2023: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2023: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2023: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <CTA
        heading={"Find Internet Providers Near You"}
        desc={
          "Enter your zip code below to find out what Internet providers are available in your area."
        }
      />

      <div className="section premiering">
        <div className="head">
          <h2 className="sect-heading">
            What’s <span>premiering</span> this week
          </h2>
          <p className="sect-desc">
            TV is life here at CableTV.com, and knowing the pros and cons of
            each major TV provider is our lifeblood. Read some reviews, switch
            to a better provider … bada bing, bada boom!
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

export default Resources;
