import React from "react";
import Chart from "react-apexcharts";

export default function WeeklyActivityBar() {
  const series = [
    {
        name: "Withdraw",
        data: [480, 350, 330, 480, 150, 390, 400],
    },
    {
      name: "Deposit",
      data: [240, 120, 260, 380, 240, 240, 340],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "Inter, sans-serif",
    },

    plotOptions: {
    bar: {
        horizontal: false,
        columnWidth: "40%",         
        borderRadius: 5,          
        borderRadiusApplication: "around",
    },
    },

    dataLabels: { enabled: false },

    stroke: {
      show: true,
      width: 6,                 
      colors: ["transparent"],   
    },

    colors: ["#1814F3", "#16DBCC"], 

    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      markers: { radius: 100 },
      itemMargin: { horizontal: 20, vertical: 8 },
      fontSize: "14px",
      labels: { colors: "#718EBF" },
    },

    grid: {
      borderColor: "rgba(226,232,240,0.7)",
      strokeDashArray: 0,
      padding: { left: 10, right: 10, top: 8, bottom: 0 },
    },

    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: "#718EBF", fontSize: "12px" },
      },
    },

    yaxis: {
      min: 0,
      max: 500,
      tickAmount: 5, 
      labels: {
        style: { colors: "#718EBF", fontSize: "12px" },
      },
    },

    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  return (
    <>
        <div className="flex items-center justify-between pb-5">
            <h2 className="font-semibold text-[22px] text-[#343C6A]">
                Weekly Activity
            </h2>
        </div>
        <div className="bg-white border border-[#DFEAF2] rounded-[25px] px-5 py-4">

        <Chart options={options} series={series} type="bar" height={260} />
        </div>
    </>
  );
}
