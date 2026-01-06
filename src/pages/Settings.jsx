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
        <div className="container flex flex-col">
            <div className='bg-[#ffffff] w-full h-25 border-gray-100 py-5 px-10'>
                <Navbar />
            </div>
            <div className='py-6 px-10 flex flex-col gap-6 bg-[#F5F7FA]'>
                <div className='w-full bg-[#FFFFFF] rounded-[25px] py-9.25 px-7.5 '>
                    <div className='flex gap-18 border-b border-[#F4F5F7]'>
                        <div className='flex flex-col items-center gap-2 w-25'>
                            {
                                tab == 'edit'? (
                                    <>
                                        <button className='text-[#1814F3] font-medium text-[16px] cursor-pointer hover:text-[#1814F3]' id='edit' onClick={()=>handleTab('edit')}>Edit Profile</button>
                                        <div className='w-25 h-0.75 bg-[#1814F3] rounded-tl-[10px] rounded-tr-[10px]'></div>
                                    </>
                                ) : (
                                    <button className='text-primary3 font-medium text-[16px] cursor-pointer hover:text-[#1814F3]' id='edit' onClick={()=>handleTab('edit')}>Edit Profile</button>
                                )
                            }
                        </div>

                        <div className='flex flex-col items-center gap-2 w-25'>
                            {
                                tab == 'reference' ? (
                                    <>
                                        <button className='text-[#1814F3] font-medium text-[16px] cursor-pointer hover:text-[#1814F3]' id='reference' onClick={()=>handleTab('reference')}>Preferences</button>
                                        <div className='w-25 h-0.75 bg-[#1814F3] rounded-tl-[10px] rounded-tr-[10px]'></div>
                                    </>
                                ) : (
                                    <button className='text-primary3 font-medium text-[16px] cursor-pointer hover:text-[#1814F3]' id='reference' onClick={()=>handleTab('reference')}>Preferences</button>
                                )
                            }
                            
                        </div>

                        <div className='flex flex-col items-center gap-2 w-25'>
                            {
                                tab == 'security' ? (
                                    <>
                                        <button className='text-[#1814F3] font-medium text-[16px] cursor-pointer hover:text-[#1814F3]' id='security' onClick={()=>handleTab('security')}>Security</button>
                                        <div className='w-25 h-0.75 bg-[#1814F3] rounded-tl-[10px] rounded-tr-[10px]'></div>
                                    </>

                                ) : (
                                    <button className='text-primary3 font-medium text-[16px] cursor-pointer hover:text-[#1814F3]' id='security' onClick={()=>handleTab('security')}>Security</button>
                                )
                            }
                        </div>
                    </div>

                    <div className='flex mt-10'>
                        {content(tab)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Settings

