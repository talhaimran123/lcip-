import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/main/home/Home";
import Tv from "../pages/main/tv/Tv";
import Internet from "../pages/main/internet/Internet";
import Streaming from "../pages/main/streaming/Streaming";
import Resources from "../pages/main/resources/Resources";
import WhatToWatch from "../pages/main/what-to-watch/WhatToWatch";
import XfinityReview from "../pages/xfinity/review/XfinityReview";
import XfinityInternet from "../pages/xfinity/internet/XfinityInternet";
import XfinityTv from "../pages/xfinity/tv/XfinityTv";
import XfinityDeals from "../pages/xfinity/deals/XfinityDeals";
import XfinityChannelLinup from "../pages/xfinity/channel-linup/XfinityChannelLinup";
import XfinityMobile from "../pages/xfinity/mobile/XfinityMobile";
import XfinityBundles from "../pages/xfinity/bundles/XfinityBundles";
import XfinityVoice from "../pages/xfinity/voice/XfinityVoice";
import XfinityAvailability from "../pages/xfinity/availability/XfinityAvailability";
import XfinityHiddenCosts from "../pages/xfinity/hidden-costs/XfinityHiddenCosts";
import XfinityCustomerService from "../pages/xfinity/customer-service/XfinityCustomerService";
import XfinityInternetReview from "../pages/xfinity/internet-review/XfinityInternetReview";
import XfinityTvReview from "../pages/xfinity/tv-review/XfinityTvReview";
import XfinityBundlesReview from "../pages/xfinity/bundles-review/XfinityBundlesReview";


const Routers = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/internet" element={<Internet />} />
      <Route path="/streaming" element={<Streaming />} />
      <Route path="/what-to-watch" element={<WhatToWatch />} />
      <Route path="/resources" element={<Resources />} />

      {/* Xfinity Pages */}
      <Route path="/xfinity" element={<XfinityReview />} />
      <Route path="/xfinity/internet" element={<XfinityInternet />} />
      <Route path="/xfinity/cable-tv" element={<XfinityTv />} />
      <Route path="/xfinity/promotions" element={<XfinityDeals />} />
      <Route path="/xfinity/channel-linup" element={<XfinityChannelLinup />} />
      <Route path="/xfinity/mobile" element={<XfinityMobile />} />
      <Route path="/xfinity/bundles" element={<XfinityBundles />} />
      <Route path="/xfinity/voice" element={<XfinityVoice />} />
      <Route path="/xfinity/availability" element={<XfinityAvailability />} />
      <Route path="/xfinity/hidden-costs" element={<XfinityHiddenCosts />} />
      <Route path="/xfinity/phone-number" element={<XfinityCustomerService />} />
      <Route path="/xfinity/internet-review" element={<XfinityInternetReview />} />
      <Route path="/xfinity/tv-review" element={<XfinityTvReview />} />
      <Route path="/xfinity/bundles-review" element={<XfinityBundlesReview />} />
      

    </Routes>
  );
};

export default Routers;
