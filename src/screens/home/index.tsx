import React from "react";
import Hero from "components/Home/hero";
import PropertySection from "components/Home/property";
import FeatureSection from "components/Home/feature";
import ForRent from "components/Home/forrent";
import NewOffer from "components/Home/Newoffer";
import Gallery from "components/Home/gallery";
const HomeScreen = () => {
  return (
    <>
      <Hero />
      <PropertySection />
      <FeatureSection />
      <ForRent />
      <NewOffer />
      <Gallery />
    </>
  );
};

export default HomeScreen;
