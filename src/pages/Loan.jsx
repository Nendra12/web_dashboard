import React from 'react'
import Navbar from '../components/Navbar'

import user from '../assets/icon/Group 299.png'
import bag from '../assets/icon/Group 290.png'
import bisnis from '../assets/icon/Group 293.png'
import tools from '../assets/icon/Group 296.png'
import ActiveLoans from '../components/ActiveLoans'

function Loan() {
  return (
    <div className="container flex flex-col">
        <div className='bg-[#ffffff] w-full h-25 border border-gray-100 py-5 px-10'>
            <Navbar />
        </div>
        <div className='py-6 px-10 flex flex-col gap-6 bg-[#F5F7FA]'>
            <div className='w-full flex h-30 justify-between'>
                <div className='bg-[#ffffff] w-63.75 rounded-[25px] h-full flex items-center justify-center gap-3.75'>
                    <img src={user} alt="user" />
                    <div>
                        <p className='font-extralight text-[16px] text-primary3'>Personal Loans</p>
                        <p className='font-semibold text-[20px] text-[#232323]'>$50.00</p>
                    </div>
                </div>
                <div className='bg-[#ffffff] w-63.75 rounded-[25px] h-full flex items-center justify-center gap-3.75'>
                    <img src={bag} alt="bag" />
                    <div>
                        <p className='font-extralight text-[16px] text-primary3'>Corporate Loans</p>
                        <p className='font-semibold text-[20px] text-[#232323]'>$100.000</p>
                    </div>
                </div>
                <div className='bg-[#ffffff] w-63.75 rounded-[25px] h-full flex items-center justify-center gap-3.75'>
                    <img src={bisnis} alt="bisnis" />
                    <div>
                        <p className='font-extralight text-[16px] text-primary3'>Business Loans</p>
                        <p className='font-semibold text-[20px] text-[#232323]'>$500.000</p>
                    </div>
                </div>
                <div className='bg-[#ffffff] w-63.75 rounded-[25px] h-full flex items-center justify-center gap-3.75'>
                    <img src={tools} alt="tools" />
                    <div>
                        <p className='font-extralight text-[16px] text-primary3'>Custom Loans</p>
                        <p className='font-semibold text-[20px] text-[#232323]'>Chose Money</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-7.5 h-auto pb-20.5'>
                <ActiveLoans />
            </div>
        </div>
    </div>
  )
}

export default Loan