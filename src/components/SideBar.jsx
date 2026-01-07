import React from 'react'
import creditCard from '../assets/icon/credit-card.png'
import SideBarMenuList from './SideBarMenuList'


function SideBar({ handleClick, navActive }) {
  const handleVal = (e) => {
    handleClick(e)
  }
  return (
    <>
        <div className='h-25 flex items-center '>
            <div className='flex items-center gap-2.25 pl-11 md:pl-7 xl:pl-11 w-full'>
                <img src={creditCard} alt="credit-card" className='h-9 w-9 md:h-7 md:w-7 xl:h-9 xl:w-9'/>
                <h1 className='font-mont font-black text-primary2 text-[22px]'>Bankku.</h1>
            </div>
        </div>
        <div className='flex flex-col items-center mt-3.25 w-auto'>
            <SideBarMenuList  handleVal={handleVal} navActive={navActive}/>
        </div>
    </>
  )
}

export default SideBar