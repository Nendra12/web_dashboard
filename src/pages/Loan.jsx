import React from 'react'
import Navbar from '../components/Navbar'

import user from '../assets/icon/Group 299.png'
import bag from '../assets/icon/Group 290.png'
import bisnis from '../assets/icon/Group 293.png'
import tools from '../assets/icon/Group 296.png'
import ActiveLoans from '../components/ActiveLoans'

function Loan() {
  return (
    <div className="w-full flex flex-col">
        <div className='py-3 px-4 sm:py-4 sm:px-6 md:py-5 lg:py-6 md:px-8 lg:px-10 flex flex-col gap-4 sm:gap-5 lg:gap-6 bg-[#F5F7FA]'>
            <div className='w-full flex h-auto lg:h-30 gap-3 sm:gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible scrollbar-hide snap-x snap-mandatory lg:snap-none pb-2 lg:pb-0 lg:grid lg:grid-cols-4'>
                <div className='bg-[#ffffff] min-w-[240px] sm:min-w-[300px] lg:min-w-0 lg:w-auto rounded-[18px] md:rounded-[20px] lg:rounded-[25px] h-24 sm:h-28 lg:h-full flex items-center justify-center gap-2 sm:gap-3 lg:gap-3.75 p-3 sm:p-4 md:p-5 snap-center lg:snap-align-none flex-shrink-0 lg:flex-shrink'>
                    <img src={user} alt="user" className='w-12 h-12 md:w-13 md:h-13 xl:w-16 xl:h-16'/>
                    <div>
                        <p className='font-extralight text-xs sm:text-[12px] xl:text-[16px] text-primary3'>Personal Loans</p>
                        <p className='font-semibold text-sm sm:text-[13px] xl:text-[20px] text-[#232323]'>$50.00</p>
                    </div>
                </div>
                <div className='bg-[#ffffff] min-w-[240px] sm:min-w-[300px] lg:min-w-0 lg:w-auto rounded-[18px] md:rounded-[20px] lg:rounded-[25px] h-24 sm:h-28 lg:h-full flex items-center justify-center gap-2 sm:gap-3 lg:gap-3.75 p-3 sm:p-4 md:p-5 snap-center lg:snap-align-none flex-shrink-0 lg:flex-shrink'>
                    <img src={bag} alt="bag" className='w-12 h-12 md:w-13 md:h-13 xl:w-16 xl:h-16'/>
                    <div>
                        <p className='font-extralight text-xs sm:text-[12px] xl:text-[16px] text-primary3'>Corporate Loans</p>
                        <p className='font-semibold text-sm sm:text-[13px] xl:text-[20px] text-[#232323]'>$100.000</p>
                    </div>
                </div>
                <div className='bg-[#ffffff] min-w-[240px] sm:min-w-[300px] lg:min-w-0 lg:w-auto rounded-[18px] md:rounded-[20px] lg:rounded-[25px] h-24 sm:h-28 lg:h-full flex items-center justify-center gap-2 sm:gap-3 lg:gap-3.75 p-3 sm:p-4 md:p-5 snap-center lg:snap-align-none flex-shrink-0 lg:flex-shrink'>
                    <img src={bisnis} alt="bisnis" className='w-12 h-12 md:w-13 md:h-13 xl:w-16 xl:h-16'/>
                    <div>
                        <p className='font-extralight text-xs sm:text-[12px] xl:text-[16px] text-primary3'>Business Loans</p>
                        <p className='font-semibold text-sm sm:text-[13px] xl:text-[20px] text-[#232323]'>$500.000</p>
                    </div>
                </div>
                <div className='bg-[#ffffff] min-w-[240px] sm:min-w-[300px] lg:min-w-0 lg:w-auto rounded-[18px] md:rounded-[20px] lg:rounded-[25px] h-24 sm:h-28 lg:h-full flex items-center justify-center gap-2 sm:gap-3 lg:gap-3.75 p-3 sm:p-4 md:p-5 snap-center lg:snap-align-none flex-shrink-0 lg:flex-shrink'>
                    <img src={tools} alt="tools" className='w-12 h-12 md:w-13 md:h-13 xl:w-16 xl:h-16'/>
                    <div>
                        <p className='font-extralight text-xs sm:text-[12px] xl:text-[16px] text-primary3'>Custom Loans</p>
                        <p className='font-semibold text-sm sm:text-[13px] xl:text-[20px] text-[#232323]'>Chose Money</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7.5 h-auto pb-8 sm:pb-12 md:pb-16 lg:pb-20.5'>
                <ActiveLoans />
            </div>
        </div>
    </div>
  )
}

export default Loan