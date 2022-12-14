import React from "react";
import Hero from "components/Home/hero";
import PropertySection from "components/Home/property";
import FeatureSection from "components/Home/feature";
import ForRent from "components/Home/forrent";
import NewOffer from "components/Home/Newoffer";
import Gallery from "components/Home/gallery";
import Banner from "components/Home/Banner";
import About from "components/Home/About";
import Testimonial from "components/Home/testimonial";
import Brands from "components/Home/brands";
import SEO from "components/SEO";
import Header from "components/Header";

const HomeScreen = () => {
  return (
    <>
      <SEO />
      <Header />
      <Hero />
      <PropertySection />
      <FeatureSection />
      <ForRent />
      <NewOffer />
      <Gallery />
      <Banner />
      <About />
      <Testimonial />
      <Brands />
    </>
  );
};

export default HomeScreen;
