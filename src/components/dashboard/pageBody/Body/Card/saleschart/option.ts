// sale chart
// import { ApexOptions } from "apexcharts";

export const series = [
  {
    name: "serie-1",
    data: [5, 12, 15, 18, 16, 20, 16, 13, 10, 6],
  },
];
export const options = {
  chart: {
    id: "simple-bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ["#f34451"],
  plotOptions: {
    bar: {
      columnWidth: "40%",
      distributed: true,
      borderRadius: 7,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
    ],
    labels: {
      style: {
        fontSize: "12px",
        fontFamily: "Roboto, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 200,
        },
      },
    },
  ],
};
