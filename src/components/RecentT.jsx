import React from "react";
import wallet from "../assets/transaction/Group 313.png";
import paypal from "../assets/transaction/Group 314.png";
import coin from "../assets/transaction/Group 315.png";

function RecentT() {
  return (
    <>
      <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-[22px] text-primary2">
        Recent Transaction
      </p>

      <div
        className="
          border border-[#DFEAF2] bg-white
          rounded-[18px] sm:rounded-[20px] lg:rounded-[25px]
          p-4 sm:p-5 lg:p-5
          flex flex-col gap-4 xl:gap-6
        "
      >
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src={wallet}
              alt="wallet"
              className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
            />
            <div className="min-w-0">
              <p className="font-medium text-sm sm:text-[15px] xl:text-[16px] text-[#232323] truncate">
                Deposit from my Card
              </p>
              <p className="font-normal text-xs sm:text-[13px] xl:text-[15px] text-primary3">
                28 January 2021
              </p>
            </div>
          </div>

          <p className="font-medium text-sm sm:text-[15px] xl:text-[16px] text-[#FF4B4A] whitespace-nowrap">
            -$850
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src={paypal}
              alt="paypal"
              className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
            />
            <div className="min-w-0">
              <p className="font-medium text-sm sm:text-[15px] xl:text-[16px] text-[#232323] truncate">
                Deposit Paypal
              </p>
              <p className="font-normal text-xs sm:text-[13px] xl:text-[15px] text-primary3">
                25 January 2021
              </p>
            </div>
          </div>

          <p className="font-medium text-sm sm:text-[15px] xl:text-[16px] text-[#41D4A8] whitespace-nowrap">
            +$2,500
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src={coin}
              alt="coin"
              className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
            />
            <div className="min-w-0">
              <p className="font-medium text-sm sm:text-[15px] xl:text-[16px] text-[#232323] truncate">
                Jemi Wilson
              </p>
              <p className="font-normal text-xs sm:text-[13px] xl:text-[15px] text-primary3">
                21 January 2021
              </p>
            </div>
          </div>

          <p className="font-medium text-sm sm:text-[15px] xl:text-[16px] text-[#41D4A8] whitespace-nowrap">
            +$5,400
          </p>
        </div>
      </div>
    </>
  );
}

export default RecentT;
