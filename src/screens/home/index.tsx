import React from "react";
import Hero from "components/Home/hero";
import PropertySection from "components/Home/property";
import FeatureSection from "components/Home/feature";
const HomeScreen = () => {
  return (
    <>
      <Hero />
      <PropertySection />
      <FeatureSection />
    </>
  );
};

export default HomeScreen;
