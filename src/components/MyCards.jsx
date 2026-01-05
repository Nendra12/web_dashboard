import React from 'react'
import chip1 from '../assets/icon/chip_kartu.png'
import chip2 from '../assets/icon/chip_card2.png'
import circle from '../assets/icon/Group 17.png'
import circle2 from '../assets/icon/Group 17 (1).png'

function MyCards() {
  return (
    <>
        <div className='flex justify-between w-full pb-5 items-center'>
            <h1 className='font-semibold text-[22px] text-primary2'>My Cards</h1>
            <a href='#' className='font-semibold text-[17px] text-primary2'>See All</a>
        </div>
        <div className='grid grid-cols-[49%_49%] justify-between h-full'>
            <div className='relative rounded-[25px] bg-linear-to-r from-[#4C49ED] to-[#0A06F4] flex flex-col p-6.5 gap-5'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[12px] font-normal text-[#FFFFFF] font-family-base'>Balance</p>
                        <p className='text-[20px] font-semibold text-[#FFFFFF] font-family-base'>$5,756</p>
                    </div>
                    <img src={chip1} alt="chip1" className='w-8.75 h-8.75'/>
                </div>
                <div className='flex justify-start gap-16.75'>
                    <div>
                        <p className='text-[12px] font-normal text-[#FFFFFF70] font-family-base'>CARD HOLDER</p>
                        <p className='text-[15px] font-semibold text-[#FFFFFF] font-family-base'>Eddy Cusuma</p>
                    </div>
                    <div>
                        <p className='text-[12px] font-normal text-[#ffffff70] font-family-base'>VALID THRU</p>
                        <p className='text-[15px] font-semibold text-[#FFFFFF] font-family-base'>12/22</p>
                    </div>
                </div>
                <div className='absolute bottom-0 right-0 h-16 w-full p-6.5 flex items-center bg-linear-to-b from-[#ffffff28] to-[#ffffff0] rounded-br-[25px] rounded-bl-[25px]'>
                    <div className='flex justify-between w-full'>
                        <p className='text-[22px] font-semibold text-[#FFFFFF] font-family-base'>3778 **** **** 1234</p>
                        <img src={circle} alt="circle" />
                    </div>
                </div>
            </div>
            <div className='border-[#DFEAF2] bg-[#FFFFFF] border relative rounded-[25px] flex flex-col p-6.5 gap-5'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[12px] font-normal text-primary3 font-family-base'>Balance</p>
                        <p className='text-[20px] font-semibold text-primary2 font-family-base'>$5,756</p>
                    </div>
                    <img src={chip2} alt="chip1" className='w-8.75 h-8.75'/>
                </div>
                <div className='flex justify-start gap-16.75'>
                    <div>
                        <p className='text-[12px] font-normal text-primary3 font-family-base'>CARD HOLDER</p>
                        <p className='text-[15px] font-semibold text-primary2 font-family-base'>Eddy Cusuma</p>
                    </div>
                    <div>
                        <p className='text-[12px] font-normal text-primary3 font-family-base'>VALID THRU</p>
                        <p className='text-[15px] font-semibold text-primary2 font-family-base'>12/22</p>
                    </div>
                </div>
                <div className='absolute bottom-0 right-0 h-16 w-full p-6.5 flex items-center bg-linear-to-b from-[#ffffff28] to-[#ffffff0] rounded-br-[25px] rounded-bl-[25px]'>
                    <div className='flex justify-between w-full'>
                        <p className='text-[22px] font-semibold text-primary2 font-family-base'>3778 **** **** 1234</p>
                        <img src={circle2} alt="circle" />
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default MyCards