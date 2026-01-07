import React, {useState} from 'react'
import ceo from '../assets/profile/Mask Group.png'
import director from '../assets/profile/Mask Group (1).png'
import designer from '../assets/profile/Mask Group (2).png'
import arrow from '../assets/profile/Vector 1.png'  
import kirim from '../assets/profile/Group.png'  

function QuickTf() {
    const [val, setVal] = useState("525.50");
  return (
    <>
        <div className='pb-3 sm:pb-4 md:pb-5'>
            <h1 className='font-semibold text-lg sm:text-xl md:text-[22px] text-primary2'>Quick Transfer</h1>
        </div>
        <div className='md:border-[#DFEAF2] md:border bg-[#FFFFFF] relative justify-between rounded-[20px] md:rounded-[25px] flex flex-col p-4 sm:p-5 md:p-6.25 gap-4 sm:gap-3 md:gap-2.5 h-full'>
            <div className='flex items-center justify-between gap-2 sm:gap-3'>
                <div className='flex flex-col items-center sm:items-start '>
                    <img src={director} alt="ceo" className='mb-2 sm:mb-3 xl:w-16 xl:h-16 sm:w-20 sm:h-20 md:w-13 md:h-13'/>
                    <h1 className='font-extrabold text-xs sm:text-[12px] xl:text-[16px] text-[#232323] text-center sm:text-left'>Livia Bator</h1>
                    <h1 className='font-extrabold text-xs sm:text-[12px] xl:text-[16px] text-primary3 text-center sm:text-left'>CEO</h1>
                </div>
                <div className='flex flex-col items-center sm:items-start'>
                    <img src={ceo} alt="director" className='mb-2 sm:mb-3 xl:w-16 xl:h-16 sm:w-20 sm:h-20 md:w-13 md:h-13'/>
                    <h1 className='font-extralight text-xs sm:text-[12px] xl:text-[16px] text-[#232323] text-center sm:text-left'>Randy Press</h1>
                    <h1 className='font-extralight text-xs sm:text-[12px] xl:text-[16px] text-primary3 text-center sm:text-left'>Director</h1>
                </div>
                <div className='flex flex-col items-center sm:items-start'>
                    <img src={designer} alt="designer" className='mb-2 sm:mb-3 xl:w-16 xl:h-16 sm:w-20 sm:h-20 md:w-13 md:h-13'/>
                    <h1 className='font-extralight text-xs sm:text-[12px] xl:text-[16px] text-[#232323] text-center sm:text-left'>Workman</h1>
                    <h1 className='font-extralight text-xs sm:text-[12px] xl:text-[16px] text-primary3 text-center sm:text-left'>Designer</h1>
                </div>
                <button className='w-10 h-10 sm:w-11 sm:h-11 md:w-12.5 md:h-12.5 rounded-full flex items-center hover:bg-[#E7E4E8CC] transition duration-300 cursor-pointer bg-[#ffffff] justify-center shadow-lg md:shadow-xl shadow-[#E7E4E8CC] flex-shrink-0'>
                    <img src={arrow} alt="arrow" className='w-4 sm:w-5 md:w-auto'/>
                </button>
            </div>
            <div className='flex flex-row justify-between items-center gap-10 sm:gap-3 md:gap-4'>
                <p className='font-extralight text-sm sm:text-[12px] xl:text-[16px] text-primary3 whitespace-nowrap'>Write Amount</p>
                <div className='bg-[#EDF1F7] rounded-[50px] flex items-center justify-between h-10 sm:h-11 md:h-12.5 flex-1 sm:flex-none sm:w-auto'>
                    <input type="number" className='p-3 sm:p-4 md:p-5 max-w-20 sm:w-22 xl:max-w-30 outline-none focus:outline-none active:outline-none overflow-hidden whitespace-nowrap text-xs sm:text-sm md:text-[15px] text-primary3 bg-transparent' value={val} onChange={(e) => setVal(e.target.value)}/>
                    <button className='bg-[#1814F3] rounded-[50px] w-22 sm:w-24 xl:w-31.25 flex items-center justify-center gap-2 h-full px-3 sm:px-4 md:px-6 text-[#ffffff] cursor-pointer hover:bg-[#1412be] text-xs sm:text-sm md:text-base'>
                        <span>Send</span>
                        <img src={kirim} alt="kirim" className='w-4 sm:w-5 md:w-auto'/>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuickTf