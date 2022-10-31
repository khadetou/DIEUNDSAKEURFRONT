import { ApexOptions } from "apexcharts";
export const series = [
  {
    name: "timeline",
    data: [
      {
        x: "Mon",
        y: [0, 10],
      },
      {
        x: "Tue",
        y: [18, 10],
      },
      {
        x: "Wed",
        y: [20, 15],
      },
      {
        x: "Thu",
        y: [20, 30],
      },
    ],
  },
  {
    data: [
      {
        x: "Mon",
        y: [12, 20],
      },
      {
        x: "Tue",
        y: [25, 20],
      },
      {
        x: "Wed",
        y: [10, 14],
      },
      {
        x: "Thu",
        y: [5, 10],
      },
    ],
  },
];
export const options: ApexOptions = {
  tooltip: {
    enabled: true,
    custom: undefined,
  },
  chart: {
    id: "timeline",
    height: 365,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      rangeBarGroupRows: true,
    },
  },
  colors: ["#f34451", "#89c826"],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

let el = {};
