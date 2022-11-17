import React from "react";
import Hero from "components/Home/hero";
import PropertySection from "components/Home/property";
import FeatureSection from "components/Home/feature";
import ForRent from "components/Home/forrent";
const HomeScreen = () => {
  return (
    <>
      <Hero />
      <PropertySection />
      <FeatureSection />
      <ForRent />
    </>
  );
};

export default HomeScreen;
