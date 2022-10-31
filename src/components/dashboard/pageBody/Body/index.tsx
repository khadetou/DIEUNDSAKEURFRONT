import React from "react";
import Asignees from "./Card/asignees";
import BehanceProjects from "./Card/behance-projects";
import CommingSoon from "./Card/comming-soon";
import LastMonth from "./Card/last-month";
import MonthlyNewp from "./Card/monthly-newp";
import MyProperties from "./Card/my-properties";
import ProjectTimeline from "./Card/project-timeline";
import PropertyCard from "./Card/property-card";
import Reports from "./Card/reports";
import SalesDetail from "./Card/sales-detail";
import SoldOut from "./Card/sold-out";
import TotalProjects from "./Card/total-projects";
import TopBody from "./top-body";

const Body = () => (
  <div className="page-body">
    <TopBody />
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-4 large-12">
          <div className="row">
            <PropertyCard />
            <LastMonth />
          </div>
        </div>
        <SalesDetail />
        <TotalProjects />
        <BehanceProjects />
        <CommingSoon />
        <MonthlyNewp />
        <ProjectTimeline />
        <Asignees />
        <MyProperties />
        <Reports />
        <SoldOut />
      </div>
    </div>
  </div>
);

export default Body;
