import React from 'react'
import creditCard from '../assets/icon/credit-card.png'
import SideBarMenuList from './SideBarMenuList'


function SideBar() {
  return (
    <>
        <div className='h-25 flex items-center '>
            <div className='flex items-center gap-2.25 pl-11 w-full'>
                <img src={creditCard} alt="credit-card" className='h-9 w-9'/>
                <h1 className='font-mont font-black text-primary2 text-[25px]'>Bankku.</h1>
            </div>
        </div>
        <div className='flex flex-col items-center mt-3.25 w-52.75'>
            <SideBarMenuList/>
        </div>
    </>
  )
}

export default SideBar