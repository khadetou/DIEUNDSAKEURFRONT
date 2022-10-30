import PageBody from "components/pageBody";
import PageHeader from "components/pageheader";
import SEO from "components/SEO";
import React from "react";

const Dashboard = () => {
  return (
    <div className="page-wrapper">
      <SEO />
      <PageHeader />
      <PageBody />
    </div>
  );
};

export default Dashboard;
