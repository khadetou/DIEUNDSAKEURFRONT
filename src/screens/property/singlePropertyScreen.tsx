import Header from "components/Header";
import SEO from "components/SEO";
import Hero from "components/SingleProperty/hero";

const SinglePropertyScreen = () => {
  return (
    <>
      <SEO />
      <Header className={true} />
      <Hero />
    </>
  );
};

export default SinglePropertyScreen;
