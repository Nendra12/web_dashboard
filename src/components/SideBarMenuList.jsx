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

function SideBarMenuList({ handleVal, navActive }) {
  return (
    <>
        <div className={`relative flex items-center w-full gap-11 md:gap-0 xl:gap-11 h-15 group  home ${navActive == '1'? 'active' : undefined}`}>
            <div className='absolute left-0 w-1.5 h-full bg-active1 hidden rounded-r-[10px] group-[.active]:block'></div>
            <button  onClick={() => handleVal('1')} className='flex items-center xl:gap-6.5 md:gap-3.5 gap-6.5 xl:pl-11 md:pl-7 pl-11 w-full cursor-pointer'>
                <div
                    className="w-5 h-5 xl:w-6 xl:h-6 bg-[#B1B1B1] group-[.active]:bg-active1 group-hover:bg-active1"
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
                <span className='text-[#B1B1B1] group-[.active]:text-active1 group-hover:text-active1 text-[13px] xl:text-[18px] md:text-[15px] font-medium'>Dashboard</span>
            </button>
        </div>
        
        <div className={`relative flex items-center w-full gap-11 md:gap-0 xl:gap-11 h-15 group  home ${navActive == '4'? 'active' : undefined}`}>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] group-[.active]:bg-active1 rounded-r-[10px] group-[.active]:block'></div>
            <button  className='flex items-center  xl:gap-6.5 md:gap-3.5 gap-6.5 xl:pl-11 md:pl-7 pl-11 w-full cursor-pointer'>
                <div
                    className="w-5 h-5 xl:w-6 xl:h-6 bg-[#B1B1B1] group-[.active]:bg-active1 group-hover:bg-active1"
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
                <span className='text-[#B1B1B1] group-[.active]:text-active1 group-hover:text-active1 text-[13px] xl:text-[18px] md:text-[15px] font-medium'>Transactions</span>
            </button>
        </div>

        <div className={`relative flex items-center w-full gap-11 md:gap-0 xl:gap-11 h-15 group  home ${navActive == '4'? 'active' : undefined}`}>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] group-[.active]:bg-active1 rounded-r-[10px] group-[.active]:block'></div>
            <button  className='flex items-center  xl:gap-6.5 md:gap-3.5 gap-6.5 xl:pl-11 md:pl-7 pl-11 w-full cursor-pointer'>
                <div
                    className="w-5 h-5 xl:w-6 xl:h-6 bg-[#B1B1B1] group-[.active]:bg-active1 group-hover:bg-active1"
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
                <span className='text-[#B1B1B1] group-[.active]:text-active1 group-hover:text-active1 text-[13px] xl:text-[18px] md:text-[15px] font-medium'>Accounts</span>
            </button>
        </div>

        <div className={`relative flex items-center w-full gap-11 md:gap-0 xl:gap-11 h-15 group  home ${navActive == '4'? 'active' : undefined}`}>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] group-[.active]:bg-active1 rounded-r-[10px] group-[.active]:block'></div>
            <button  className='flex items-center  xl:gap-6.5 md:gap-3.5 gap-6.5 xl:pl-11 md:pl-7 pl-11 w-full cursor-pointer'>
                <div
                    className="w-5 h-5 xl:w-6 xl:h-6 bg-[#B1B1B1] group-[.active]:bg-active1 group-hover:bg-active1"
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
                <span className='text-[#B1B1B1] group-[.active]:text-active1 group-hover:text-active1 text-[13px] xl:text-[18px] md:text-[15px] font-medium'>Investments</span>
            </button>
        </div>

        <div className={`relative flex items-center w-full gap-11 md:gap-0 xl:gap-11 h-15 group  home ${navActive == '4'? 'active' : undefined}`}>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] group-[.active]:bg-active1 rounded-r-[10px] group-[.active]:block'></div>
            <button  className='flex items-center  xl:gap-6.5 md:gap-3.5 gap-6.5 xl:pl-11 md:pl-7 pl-11 w-full cursor-pointer'>
                <div
                    className="w-5 h-5 xl:w-6 xl:h-6 bg-[#B1B1B1] group-[.active]:bg-active1 group-hover:bg-active1"
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
                <span className='text-[#B1B1B1] group-[.active]:text-active1 group-hover:text-active1 text-[13px] xl:text-[18px] md:text-[15px] font-medium'>Credit Cards</span>
            </button>
        </div>

        <div className={`relative flex items-center w-full gap-11 md:gap-0 xl:gap-11 h-15 group  home ${navActive == '2'? 'active' : undefined}`}>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] group-[.active]:bg-active1 rounded-r-[10px] group-[.active]:block'></div>
            <button onClick={() => handleVal('2')} className='flex items-center  xl:gap-6.5 md:gap-3.5 gap-6.5 xl:pl-11 md:pl-7 pl-11 w-full cursor-pointer'>
                <div
                    className="w-5 h-5 xl:w-6 xl:h-6 bg-[#B1B1B1] group-[.active]:bg-active1 group-hover:bg-active1"
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
                <span className='text-[#B1B1B1] group-[.active]:text-active1 group-hover:text-active1 text-[13px] xl:text-[18px] md:text-[15px] font-medium'>Loans</span>
            </button>
        </div>

        <div className={`relative flex items-center w-full gap-11 md:gap-0 xl:gap-11 h-15 group  home ${navActive == '4'? 'active' : undefined}`}>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] group-[.active]:bg-active1 rounded-r-[10px] group-[.active]:block'></div>
            <button  className='flex items-center  xl:gap-6.5 md:gap-3.5 gap-6.5 xl:pl-11 md:pl-7 pl-11 w-full cursor-pointer'>
                <div
                    className="w-5 h-5 xl:w-6 xl:h-6 bg-[#B1B1B1] group-[.active]:bg-active1 group-hover:bg-active1"
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
                <span className='text-[#B1B1B1] group-[.active]:text-active1 group-hover:text-active1 text-[13px] xl:text-[18px] md:text-[15px] font-medium'>Services</span>
            </button>
        </div>
        
        <div className={`relative flex items-center w-full gap-11 md:gap-0 xl:gap-11 h-15 group  home ${navActive == '4'? 'active' : undefined}`}>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] group-[.active]:bg-active1 rounded-r-[10px] group-[.active]:block'></div>
            <button  className='flex items-center  xl:gap-6.5 md:gap-3.5 gap-6.5 xl:pl-11 md:pl-7 pl-11 w-full cursor-pointer'>
                <div
                    className="w-5 h-5 xl:w-6 xl:h-6 bg-[#B1B1B1] group-[.active]:bg-active1 group-hover:bg-active1"
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
                <span className='text-[#B1B1B1] group-[.active]:text-active1 group-hover:text-active1 text-[13px] xl:text-[18px] md:text-[15px] font-medium'>My Privileges</span>
            </button>
        </div>
        
        <div className={`relative flex items-center w-full gap-11 md:gap-0 xl:gap-11 h-15 group  home ${navActive == '3'? 'active' : undefined}`}>
            <div className='absolute left-0 w-1.5 h-full hidden bg-[#B1B1B1] group-[.active]:bg-active1 rounded-r-[10px] group-[.active]:block'></div>
            <button onClick={() => handleVal('3')}  className='flex items-center  xl:gap-6.5 md:gap-3.5 gap-6.5 xl:pl-11 md:pl-7 pl-11 w-full cursor-pointer'>
                <div
                    className="w-5 h-5 xl:w-6 xl:h-6 bg-[#B1B1B1] group-[.active]:bg-active1 group-hover:bg-active1"
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
                <span className='text-[#B1B1B1] group-[.active]:text-active1 group-hover:text-active1 text-[13px] xl:text-[18px] md:text-[15px] font-medium'>Setting</span>
            </button>
        </div>
    </>
  )
}

export default SideBarMenuList