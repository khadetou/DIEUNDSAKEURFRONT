import PageBody from "components/pageBody";
import PageHeader from "components/pageheader";
import SEO from "components/SEO";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <div className="page-wrapper">
      <SEO />
      <PageHeader
        open={open}
        setOpen={setOpen}
        isTabletOrMobile={isTabletOrMobile}
      />
      <PageBody
        open={open}
        setOpen={setOpen}
        isTabletOrMobile={isTabletOrMobile}
      />
    </div>
  );
};

export default Dashboard;
