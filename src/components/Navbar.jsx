import React from 'react'
import notification from '../assets/icon/002-notification-1.png'
import profile_image from '../assets/profile/profile.jpg'
import setting from '../assets/icon/settings 1.png'
import search from '../assets/icon/Group.png'

function Navbar() {
  return (
        <div className='flex h-15 justify-between items-center'>
            <div>
                <p className='font-semibold text-[28px]'>Overview</p>
            </div>
            <div className='flex gap-7.5 items-center'>
                <div className='w-63.75 h-12.5 bg-[#F5F7FA] flex justify-center rounded-[40px]  '>
                    <div className='py-2 px-4 flex items-center gap-3.75'>
                        <img src={search} alt="setting" className='w-5'/>
                        <input type="text" placeholder='Search for something' className='p-2 max-w-45 outline-none focus:outline-none active:outline-none overflow-hidden whitespace-nowrap text-[15px] text-[#718EBF] '/>
                    </div>
                </div>
                <button className='bg-[#F5F7FA] w-12.5 h-12.5 rounded-full cursor-pointer hover:bg-[#e8eef7] flex justify-center flex-col items-center'>
                    <img src={setting} alt="setting" className='w-6.25 '/>
                </button>
                <button className='bg-[#F5F7FA] w-12.5 h-12.5 rounded-full cursor-pointer hover:bg-[#e8eef7] flex justify-center flex-col items-center'>
                    <img src={notification} alt="notification" className='w-6.25 '/>
                </button>
                <a href="#" className='w-15 h-15 relative rounded-full overflow-hidden'>
                    <img src={profile_image} alt="profile" className='absolute top-0 -right-5 max-h-[92.31px] max-w-[138.46px] ' />
                </a>
            </div>
        </div>
  )
}

export default Navbar