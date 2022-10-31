export const series = [76, 67, 90];
export const options = {
  chart: {
    height: 420,
    offsetY: 0,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -100,
      endAngle: 100,
      hollow: {
        margin: 5,
        size: "60%",
        background: "transparent",
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          fontSize: "30px",
          show: false,
        },
        total: {
          show: true,
          label: "Total",
          formatter: function (w: any) {
            return "75";
          },
        },
      },
    },
  },
  grid: {
    padding: {
      top: -10,
      bottom: 20,
    },
  },
  colors: ["#f34451", "#89c826", "#ffcc33"],
  labels: ["Vimeo", "Messenger", "LinkedIn"],
  responsive: [
    {
      breakpoint: 400,
      options: {
        chart: {
          height: 360,
        },
      },
    },
    {
      breakpoint: 340,
      options: {
        chart: {
          height: 320,
        },
      },
    },
  ],
};
