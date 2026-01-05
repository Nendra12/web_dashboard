import React from "react";
import Chart from "react-apexcharts";

function ExpenseStat() {

  const chartOptions = {
    chart: {
      type: "pie",
    },
    chartOptions: {
        pie: {
            customScale: 0.8,
            expandOnClick: false
        }
    },
    labels: ["Team A", "Team B", "Team C", "Team D"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartSeries = [30, 15, 35, 20];

  return (
    <div className="flex flex-col gap-4.5">
      <h1 className="font-semibold text-[22px] text-primary2">
        Expense Statistics
      </h1>

      <div className="max-w-full border bg-white rounded-[25px] py-7 px-8.25 flex flex-col gap-5.5">

        {/* PIE CHART */}
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="pie"
          width="100%"
        />

      </div>
    </div>
  );
}

export default ExpenseStat;
