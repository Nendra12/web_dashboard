import React from 'react'
import bar from '../assets/transaction/Group 41.png'

function WeeklyActv() {
  return (
    <div className='flex flex-col gap-4.5'>
        <h1 className='font-semibold text-[22px] text-primary2'>Weekly Activity</h1>
        <div className='max-w-full h-auto border bg-[#FFFFFF] rounded-[25px] py-7 px-8.25 flex flex-col gap-5.5'>
            <div className='flex justify-end gap-7.5'>
                <div className='flex items-center gap-2.5'>
                    <div className='w-3.75 h-3.75 bg-[#16DBCC] rounded-full'></div>
                    <p className='font-normal text-[15px] text-primary3'>Diposit</p>
                </div>
                <div className='flex items-center gap-2.5'>
                    <div className='w-3.75 h-3.75 bg-[#FF82AC] rounded-full'></div>
                    <p className='font-normal text-[15px] text-primary3'>Withdraw</p>
                </div>
            </div>
            <img src={bar} alt="bar charts" className='w-auto'/>
        </div>
    </div>
  )
}

export default WeeklyActv