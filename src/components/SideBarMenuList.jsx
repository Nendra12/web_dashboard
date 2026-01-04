import React from 'react'
import './sideBarMenuList.css'
import home from '../assets/icon/home 2.png'
import transfer from '../assets/icon/transfer 1.png'
import user from '../assets/icon/user 3 1.png'
import investment from '../assets/icon/economic-investment 1.png'
import creditCard  from '../assets/icon/credit-card 1.png'
import services from '../assets/icon/service 1.png'
import loan from '../assets/icon/loan 1.png'
import econometrics from '../assets/icon/econometrics 1.png'
import setting from '../assets/icon/settings solid 1.png'

function SideBarMenuList() {
  return (
    <>

        <div className='relative flex items-center w-full gap-11 h-15 home active'>
            <div className='absolute left-0 w-1.5 h-full bg-active1 rounded-r-[10px]'></div>
            <a href="#"  className='flex items-center gap-6.5 pl-11 w-full'>
                <div
                    className="w-6 h-6 bg-active1"
                    style={{
                        WebkitMaskImage: `url(${home})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${home})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                    }}
                ></div>
                <span className='text-active1 text-[18px] font-medium'>Dashboard</span>
            </a>
        </div>
        
        <div className='relative flex items-center w-full gap-11 h-15 home active'>
            <div className='absolute left-0 w-1.5 h-full hidden bg-white rounded-r-[10px]'></div>
            <a href="#"  className='flex items-center gap-6.5 pl-11 w-full'>
                <div
                    className="w-6 h-6 bg-[#B1B1B1]"
                    style={{
                        WebkitMaskImage: `url(${transfer})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${transfer})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                    }}
                ></div>
                <span className='text-[#B1B1B1] text-[18px] font-medium'>Transactions</span>
            </a>
        </div>

        <div className='relative flex items-center w-full gap-11 h-15 home active'>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] rounded-r-[10px]'></div>
            <a href="#"  className='flex items-center gap-6.5 pl-11 w-full'>
                <div
                    className="w-6 h-6 bg-[#B1B1B1]"
                    style={{
                        WebkitMaskImage: `url(${user})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${user})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                    }}
                ></div>
                <span className='text-[#B1B1B1] text-[18px] font-medium'>Accounts</span>
            </a>
        </div>

        <div className='relative flex items-center w-full gap-11 h-15 home active'>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] rounded-r-[10px]'></div>
            <a href="#"  className='flex items-center gap-6.5 pl-11 w-full'>
                <div
                    className="w-6 h-6 bg-[#B1B1B1]"
                    style={{
                        WebkitMaskImage: `url(${investment})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${investment})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                    }}
                ></div>
                <span className='text-[#B1B1B1] text-[18px] font-medium'>Investments</span>
            </a>
        </div>

        <div className='relative flex items-center w-full gap-11 h-15 home active'>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] rounded-r-[10px]'></div>
            <a href="#"  className='flex items-center gap-6.5 pl-11 w-full'>
                <div
                    className="w-6 h-6 bg-[#B1B1B1]"
                    style={{
                        WebkitMaskImage: `url(${creditCard})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${creditCard})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                    }}
                ></div>
                <span className='text-[#B1B1B1] text-[18px] font-medium'>Credit Cards</span>
            </a>
        </div>

        <div className='relative flex items-center w-full gap-11 h-15 home active'>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] rounded-r-[10px]'></div>
            <a href="#"  className='flex items-center gap-6.5 pl-11 w-full'>
                <div
                    className="w-6 h-6 bg-[#B1B1B1]"
                    style={{
                        WebkitMaskImage: `url(${loan})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${loan})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                    }}
                ></div>
                <span className='text-[#B1B1B1] text-[18px] font-medium'>Loans</span>
            </a>
        </div>

        <div className='relative flex items-center w-full gap-11 h-15 home active'>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] rounded-r-[10px]'></div>
            <a href="#"  className='flex items-center gap-6.5 pl-11 w-full'>
                <div
                    className="w-6 h-6 bg-[#B1B1B1]"
                    style={{
                        WebkitMaskImage: `url(${services})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${services})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                    }}
                ></div>
                <span className='text-[#B1B1B1] text-[18px] font-medium'>Services</span>
            </a>
        </div>
        
        <div className='relative flex items-center w-full gap-11 h-15 home active'>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] rounded-r-[10px]'></div>
            <a href="#"  className='flex items-center gap-6.5 pl-11 w-full'>
                <div
                    className="w-6 h-6 bg-[#B1B1B1]"
                    style={{
                        WebkitMaskImage: `url(${econometrics})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${econometrics})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                    }}
                ></div>
                <span className='text-[#B1B1B1] text-[18px] font-medium'>My Privileges</span>
            </a>
        </div>
        
        <div className='relative flex items-center w-full gap-11 h-15 home active'>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] rounded-r-[10px]'></div>
            <a href="#"  className='flex items-center gap-6.5 pl-11 w-full'>
                <div
                    className="w-6 h-6 bg-[#B1B1B1]"
                    style={{
                        WebkitMaskImage: `url(${setting})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${setting})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                    }}
                ></div>
                <span className='text-[#B1B1B1] text-[18px] font-medium'>Setting</span>
            </a>
        </div>
    </>
  )
}

export default SideBarMenuList