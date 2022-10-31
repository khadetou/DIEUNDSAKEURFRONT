import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { options, series } from "./options";

const TimelineChart = () => {
  return (
    <div className="card-body pt-0">
      <div className="timeline-container">
        <Chart options={options} type="rangeBar" series={series} height={365} />
      </div>
    </div>
  );
};

export default TimelineChart;
