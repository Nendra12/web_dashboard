import React from "react";
import Chart from "react-apexcharts";

export default function ExpensePie() {
  const chartRef = React.useRef(null);

  const series = [25.6, 32.0, 23.8, 9.9, 8.7]; // contoh sesuai gambar
  const labels = ["Blue", "Green (32%)", "Orange", "Red", "Purple"];

  const options = {
    chart: {
      type: "donut",
      events: {
        mounted: (chart) => {
          // pilih slice "32%" (index 1)
          chart.toggleDataPointSelection(0, 1);
        },
      },
    },

    labels,

    plotOptions: {
      pie: {
        expandOnClick: true, // klik/selected akan "ketarik keluar"
        donut: {
          size: "65%",
        },
      },
    },

    // biar saat selected keliatan lebih “naik”
    states: {
      active: {
        filter: { type: "none" }, // jangan gelapin yang lain
      },
    },

    stroke: {
      width: 4,
      colors: ["#fff"],
    },

    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(1)}%`,
    },

    legend: {
      position: "bottom",
    },
  };

  return (
    <div className="max-w-full border bg-white rounded-[25px] py-7 px-8.25">
      <Chart ref={chartRef} options={options} series={series} type="donut" width="100%" />
    </div>
  );
}
