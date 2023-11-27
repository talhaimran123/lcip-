import React from "react";
import "./comparison-slider.scss";
import img from "../../assets/images/spectrum-directtv.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const ComparisonSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 170,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{clickable:true}}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="comparison-slider"
    >
      <SwiperSlide>
        <img src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img} alt="slide" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ComparisonSlider;
