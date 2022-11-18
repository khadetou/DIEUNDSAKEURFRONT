import Header from "components/Header";
import SEO from "components/SEO";
import Hero from "components/SingleProperty/rents/hero";
import React from "react";

const SinglePropertyRent = () => {
  return (
    <>
      <SEO />
      <Header className={true} light={true} />
      <Hero />
    </>
  );
};

export default SinglePropertyRent;
