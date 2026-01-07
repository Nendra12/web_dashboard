import React from "react";
import chip1 from "../assets/icon/chip_kartu.png";
import chip2 from "../assets/icon/chip_card2.png";
import circle from "../assets/icon/Group 17.png";
import circle2 from "../assets/icon/Group 17 (1).png";

function MyCards() {
  return (
    <>
      <div className="flex items-center justify-between w-full pb-3 sm:pb-4 lg:pb-5">
        <h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-[22px] text-primary2">
          My Cards
        </h1>
        <a
          href="#"
          className="font-semibold text-xs sm:text-sm md:text-base lg:text-[17px] text-primary2"
        >
          See All
        </a>
      </div>

      <div
        className="
          flex gap-3 sm:gap-4 overflow-x-auto pb-2
          snap-x snap-mandatory
          md:grid md:grid-cols-2 md:gap-5 md:overflow-x-visible md:snap-none md:pb-0
          lg:gap-7
          scrollbar-hide
        "
      >

        <div
          className="
            relative rounded-[18px] sm:rounded-[20px] lg:rounded-[25px]
            bg-gradient-to-r from-[#4C49ED] to-[#0A06F4]
            flex flex-col
            p-4 sm:p-5 lg:p-6
            gap-3 sm:gap-4 lg:gap-5
            h-[170px] sm:h-[200px] lg:h-[235px]
            snap-center
            w-[85vw] max-w-[380px] shrink-0
            md:w-auto md:max-w-none md:shrink
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] sm:text-[12px] font-normal text-white font-family-base">
                Balance
              </p>
              <p className="text-base sm:text-lg lg:text-[20px] font-semibold text-white font-family-base">
                $5,756
              </p>
            </div>
            <img
              src={chip1}
              alt="chip1"
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
            />
          </div>

          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-[10px] sm:text-[11px] font-normal text-[#FFFFFF70] font-family-base">
                CARD HOLDER
              </p>
              <p className="text-sm sm:text-[14px] lg:text-[15px] font-semibold text-white font-family-base">
                Eddy Cusuma
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] sm:text-[11px] font-normal text-[#FFFFFF70] font-family-base">
                VALID THRU
              </p>
              <p className="text-sm sm:text-[14px] lg:text-[15px] font-semibold text-white font-family-base">
                12/22
              </p>
            </div>
          </div>

          <div
            className="
              absolute inset-x-0 bottom-0
              h-11 sm:h-13 lg:h-16
              px-4 sm:px-5 lg:px-6
              flex items-center
              bg-gradient-to-b from-[#ffffff28] to-[#ffffff00]
              rounded-b-[18px] sm:rounded-b-[20px] lg:rounded-b-[25px]
            "
          >
            <div className="flex w-full items-center justify-between gap-3">
              <p
                className="
                  font-semibold text-white font-family-base
                  text-[clamp(14px,3.2vw,22px)]
                  truncate
                "
              >
                3778 **** **** 1234
              </p>
              <img src={circle} alt="circle" className="w-10 sm:w-11" />
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="
            relative rounded-[18px] sm:rounded-[20px] lg:rounded-[25px]
            border border-[#DFEAF2] bg-white
            flex flex-col
            p-4 sm:p-5 lg:p-6
            gap-3 sm:gap-4 lg:gap-5
            h-[170px] sm:h-[200px] lg:h-[235px]
            snap-center
            w-[85vw] max-w-[380px] shrink-0
            md:w-auto md:max-w-none md:shrink
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] sm:text-[12px] font-normal text-primary3 font-family-base">
                Balance
              </p>
              <p className="text-base sm:text-lg lg:text-[20px] font-semibold text-primary2 font-family-base">
                $5,756
              </p>
            </div>
            <img
              src={chip2}
              alt="chip2"
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
            />
          </div>

          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-[10px] sm:text-[11px] font-normal text-primary3 font-family-base">
                CARD HOLDER
              </p>
              <p className="text-sm sm:text-[14px] lg:text-[15px] font-semibold text-primary2 font-family-base">
                Eddy Cusuma
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] sm:text-[11px] font-normal text-primary3 font-family-base">
                VALID THRU
              </p>
              <p className="text-sm sm:text-[14px] lg:text-[15px] font-semibold text-primary2 font-family-base">
                12/22
              </p>
            </div>
          </div>

          <div
            className="
              absolute inset-x-0 bottom-0
              h-11 sm:h-13 lg:h-16
              px-4 sm:px-5 lg:px-6
              flex items-center
              bg-gradient-to-b from-[#00000008] to-transparent
              rounded-b-[18px] sm:rounded-b-[20px] lg:rounded-b-[25px]
            "
          >
            <div className="flex w-full items-center justify-between gap-3">
              <p
                className="
                  font-semibold text-primary2 font-family-base
                  text-[clamp(14px,3.2vw,22px)]
                  truncate
                "
              >
                3778 **** **** 1234
              </p>
              <img src={circle2} alt="circle2" className="w-10 sm:w-11" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCards;
