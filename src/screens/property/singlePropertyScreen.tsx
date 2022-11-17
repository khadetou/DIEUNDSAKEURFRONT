import Header from "components/Header";
import SEO from "components/SEO";
import Hero from "components/SingleProperty/hero";
import PropertyInfo from "components/SingleProperty/propertyinfos";

const SinglePropertyScreen = () => {
  return (
    <>
      <SEO />
      <Header className={true} />
      <Hero />
      <PropertyInfo />
    </>
  );
};

export default SinglePropertyScreen;
