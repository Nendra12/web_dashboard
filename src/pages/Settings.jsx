import React, {useState} from 'react'
import Navbar from '../components/Navbar'

import FormEdit from './FormEdit'
import References from './References';
import Security from './Security';


function Settings() {
    const [tab, setTab] = useState('edit');

    const handleTab = (e) => {
        setTab(e)
    }

    const content = (tab) => {
        if (tab == 'edit') {
            return  <FormEdit />
        } else if (tab == 'reference') {
            return <References />
        } else {
            return <Security />
        }
    }

    return (
        <div className="w-full flex flex-col">
            <div className='py-3 px-4 sm:py-4 sm:px-6 md:py-5 lg:py-6 md:px-8 lg:px-10 flex flex-col gap-4 sm:gap-5 lg:gap-6 bg-[#F5F7FA]'>
                <div className='w-full bg-[#FFFFFF] rounded-xl md:rounded-[20px] lg:rounded-[25px] py-4 sm:py-6 md:py-7 lg:py-9.25 px-3 sm:px-5 md:px-6 lg:px-7.5'>
                    <div className='flex gap-14 md:gap-18 border-b border-[#F4F5F7]'>
                        <div className='flex flex-col items-center gap-2 w-25'>
                            {
                                tab == 'edit'? (
                                    <>
                                        <button className='text-[#1814F3] font-medium text-xs sm:text-sm md:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#1814F3] whitespace-nowrap' id='edit' onClick={()=>handleTab('edit')}>Edit Profile</button>
                                        <div className='w-full lg:w-25 h-0.5 sm:h-0.75 bg-[#1814F3] rounded-tl-[10px] rounded-tr-[10px]'></div>
                                    </>
                                ) : (
                                    <button className='text-primary3 font-medium text-xs sm:text-sm md:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#1814F3] whitespace-nowrap' id='edit' onClick={()=>handleTab('edit')}>Edit Profile</button>
                                )
                            }
                        </div>

                        <div className='flex flex-col items-center gap-2 w-25'>
                            {
                                tab == 'reference' ? (
                                    <>
                                        <button className='text-[#1814F3] font-medium text-xs sm:text-sm md:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#1814F3] whitespace-nowrap' id='reference' onClick={()=>handleTab('reference')}>Preferences</button>
                                        <div className='w-full lg:w-25 h-0.5 sm:h-0.75 bg-[#1814F3] rounded-tl-[10px] rounded-tr-[10px]'></div>
                                    </>
                                ) : (
                                    <button className='text-primary3 font-medium text-xs sm:text-sm md:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#1814F3] whitespace-nowrap' id='reference' onClick={()=>handleTab('reference')}>Preferences</button>
                                )
                            }
                            
                        </div>

                        <div className='flex flex-col items-center gap-2 w-25'>
                            {
                                tab == 'security' ? (
                                    <>
                                        <button className='text-[#1814F3] font-medium text-xs sm:text-sm md:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#1814F3] whitespace-nowrap' id='security' onClick={()=>handleTab('security')}>Security</button>
                                        <div className='w-full lg:w-25 h-0.5 sm:h-0.75 bg-[#1814F3] rounded-tl-[10px] rounded-tr-[10px]'></div>
                                    </>

                                ) : (
                                    <button className='text-primary3 font-medium text-xs sm:text-sm md:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#1814F3] whitespace-nowrap' id='security' onClick={()=>handleTab('security')}>Security</button>
                                )
                            }
                        </div>
                    </div>

                    <div className='flex mt-4 sm:mt-6 md:mt-8 lg:mt-10'>
                        {content(tab)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Settings

