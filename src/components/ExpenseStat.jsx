import React from "react";
import Chart from "react-apexcharts";
import ExpensePie from "./ExpensePie";

function ExpenseStat() {
  return (
    <div className="flex flex-col gap-4.5">
      <h1 className="font-semibold text-[22px] text-primary2">
        Expense Statistics
      </h1>

      <div className="max-w-full border border-[#DFEAF2] bg-white rounded-[25px] py-7 px-8.25 flex justify-center items-center flex-col gap-5.5">

        <ExpensePie />

      </div>
    </div>
  );
}

export default ExpenseStat;
