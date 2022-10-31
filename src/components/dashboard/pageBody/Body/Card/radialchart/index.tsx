import dynamic from "next/dynamic";
import { options, series } from "./options";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadialChart = () => {
  return (
    <div className="expiring-chart">
      <Chart options={options} type="radialBar" series={series} height={420} />
    </div>
  );
};

export default RadialChart;
