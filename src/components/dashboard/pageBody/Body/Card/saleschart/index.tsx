import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { options, series } from "./option";

const SaleChart = () => {
  return (
    <div className="bar-sales">
      <Chart options={options} type="bar" series={series} height={350} />
    </div>
  );
};

export default SaleChart;
