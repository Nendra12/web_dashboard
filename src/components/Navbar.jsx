import React from 'react'
import notification from '../assets/icon/002-notification-1.png'
import profile_image from '../assets/profile/profile.jpg'
import setting from '../assets/icon/settings 1.png'
import search from '../assets/icon/Group.png'
import profile2 from '../assets/icon/Mask Group (1).png'

function Navbar({ toggleSidebar, navActive }) {
    let header = 'Overview'
    if (navActive == '1') {
        header = 'Overview'
    } else if (navActive == '2') {
        header = 'Loans'
    } else {
        header = 'Setting'
    }
  return (
        <div className='flex flex-col'>
            <div className='flex h-12 sm:h-14 md:h-15 justify-between items-center gap-2 sm:gap-4 md:px-0'>
                <button 
                    onClick={toggleSidebar}
                    className='md:hidden flex flex-col gap-1 sm:gap-1.5 w-6 h-6 sm:w-8 sm:h-8 justify-center z-10 flex-shrink-0'
                    aria-label="Toggle sidebar"
                >
                    <span className='w-5 sm:w-6 h-0.5 bg-gray-800 rounded'></span>
                    <span className='w-5 sm:w-6 h-0.5 bg-gray-800 rounded'></span>
                    <span className='w-5 sm:w-6 h-0.5 bg-gray-800 rounded'></span>
                </button>

                <div className='md:flex-none flex-1 md:text-left text-center'>
                    <p className='font-semibold md:text-2xl text-[#343C6A] text-[20px]'>{header}</p>
                </div>

                <div className='hidden md:flex gap-3 lg:gap-7.5 items-center'>
                    <div className='w-48 lg:w-63.75 h-10 lg:h-12.5 bg-[#F5F7FA] flex justify-center rounded-[40px]'>
                        <div className='py-1.5 md:py-2 md:px-4 flex items-center gap-2 lg:gap-3.75 w-full'>
                            <img src={search} alt="search" className='w-4 lg:w-5 flex-shrink-0'/>
                            <input 
                                type="text" 
                                placeholder='Search for something' 
                                className='p-1 lg:p-2 w-full outline-none focus:outline-none active:outline-none text-xs lg:text-[15px] text-[#8BA3CB] bg-[#F5F7FA]'
                            />
                        </div>
                    </div>
                    <button className='bg-[#F5F7FA] w-10 h-10 lg:w-12.5 lg:h-12.5 rounded-full cursor-pointer hover:bg-[#e8eef7] flex justify-center flex-col items-center flex-shrink-0'>
                        <img src={setting} alt="setting" className='w-5 lg:w-6.25'/>
                    </button>
                    <button className='bg-[#F5F7FA] w-10 h-10 lg:w-12.5 lg:h-12.5 rounded-full cursor-pointer hover:bg-[#e8eef7] flex justify-center flex-col items-center flex-shrink-0'>
                        <img src={notification} alt="notification" className='w-5 lg:w-6.25'/>
                    </button>
                    <a href="#" className='w-10 h-10 lg:w-15 lg:h-15 relative rounded-full overflow-hidden flex-shrink-0'>
                        <img src={profile_image} alt="profile" className='absolute top-0 -right-3 lg:-right-5 max-h-[60px] lg:max-h-[92.31px] max-w-[90px] lg:max-w-[138.46px]' />
                    </a>
                </div>

                <a href="#" className='md:hidden relative rounded-full overflow-hidden flex-shrink-0'>
                    <img src={profile2} alt="profile" />
                </a>
            </div>

            <div className='md:hidden flex justify-start mt-3 sm:mt-4'>
                <div className='w-full h-10 sm:h-11 bg-[#F5F7FA] flex rounded-[40px]'>
                    <div className='py-2 px-4 flex items-center gap-3 w-full'>
                        <img src={search} alt="search" className='w-4 sm:w-5 flex-shrink-0'/>
                        <input 
                            type="text" 
                            placeholder='Search for something' 
                            className='p-1 sm:p-2 w-full outline-none focus:outline-none active:outline-none text-sm sm:text-[15px] text-[#718EBF] bg-transparent'
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar