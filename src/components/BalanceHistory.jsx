import React from "react";
import Chart from "react-apexcharts";

export default function BalanceHistory() {
  const series = [
    {
      name: "Balance",
      data: [110, 330, 240, 480, 440, 780, 410, 210, 560, 400, 240, 640, 600],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'Inter, sans-serif', 
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#1A1FFF"], 
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.05,  
        stops: [0, 90, 100],
      },
    },
    colors: ["#2D60FF80F"],
    grid: {
        show: true,
        borderColor: "#E5EAF4",
        strokeDashArray: 4,
        position: "back",
        xaxis: {
            lines: { show: true }, 
        },
        yaxis: {
            lines: { show: true },
        },
    },

    xaxis: {
        categories: ["Jul", "Jul", "Aug", "Aug", "Sep", "Sep", "Oct", "Oct", "Nov", "Nov", "Dec", "Dec", "Jan"],
        tickPlacement: "on",
        tickAmount: 6,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
            style: {
            colors: "#718EBF",
            fontSize: "12px",
            },
        },
    },

    yaxis: {
      min: 0,
      max: 800,
      tickAmount: 4,
      labels: {
        style: {
          colors: "#718EBF", 
          fontSize: '12px',
        },
      },
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: true },
    markers: { size: 0 },
  };

  return (
    <div className="w-full">
      <h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-[22px] text-primary2">Balance History</h1>
      <div className="bg-white md:border md:border-[#DFEAF2] rounded-[25px] px-5 py-4">
        <Chart options={options} series={series} type="area" height={220} />
      </div>
    </div>
  );
}