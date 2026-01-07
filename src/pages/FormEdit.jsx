import React from 'react'
import profile from '../assets/icon/Mask Group.png'
import pencil from '../assets/icon/pencil-alt 1.png'

function FormEdit() {

    return (
        <div className="p-2 sm:p-3 bg-white rounded-xl w-full">
            <form action="" className='flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-13.25'>
                {/* Profile Section */}
                <div className='relative mb-4 sm:mb-6 lg:mb-8 mx-auto lg:mx-0 flex-shrink-0'>
                    <img src={profile} alt="profile" className="w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 xl:w-36 xl:h-36 rounded-full object-cover" />
                    <button 
                        type="button"
                        className='cursor-pointer absolute top-16 sm:top-18 md:top-20 xl:top-28 right-0 w-7 h-7 sm:w-7.5 sm:h-7.5 lg:w-8 lg:h-8 bg-[#1814F3] rounded-full flex items-center justify-center hover:bg-[#1410cf] transition-colors'
                    >
                        <img src={pencil} alt="pencil" className='w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4'/>
                    </button>
                </div>

                {/* Input Grid Section */}
                <div className='flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-5.5 w-full lg:w-[50%] xl:w-full'>
                    {/* Your Name */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">Your Name</label>
                        <input 
                        type="text" 
                        placeholder="Charlene Reed" 
                        className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">Email</label>
                        <input 
                        type="email" 
                        placeholder="charlenereed@gmail.com" 
                        className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>


                    {/* Date of Birth */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">Date of Birth</label>
                        <select className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none bg-white appearance-none">
                            <option>25 January 1990</option>
                        </select>
                    </div>

                    {/* Permanent Address */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">Permanent Address</label>
                        <input 
                        type="text" 
                        placeholder="San Jose, California, USA" 
                        className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* Postal Code */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">Postal Code</label>
                        <input 
                        type="text" 
                        placeholder="45962" 
                        className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                </div>
                <div className='flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-5.5 w-full lg:w-[30%] xl:w-full'>
                    {/* User Name */}
                    <div className="flex flex-col gap-1.5 sm:gap-2 w-full ">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">User Name</label>
                        <input 
                        type="text" 
                        placeholder="Charlene Reed" 
                        className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    
                    {/* Password */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">Password</label>
                        <input 
                        type="password" 
                        placeholder="**********" 
                        className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* Present Address */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">Present Address</label>
                        <input 
                        type="text" 
                        placeholder="San Jose, California, USA" 
                        className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* City */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">City</label>
                        <input 
                        type="text" 
                        placeholder="San Jose" 
                        className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[#232323] text-xs sm:text-sm font-medium">Country</label>
                        <input 
                        type="text" 
                        placeholder="USA" 
                        className="px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-primary3 text-xs sm:text-sm focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    <div className='w-full flex justify-end'>
                        <button 
                            type="submit" 
                            className='mt-2 sm:mt-3 bg-[#1814F3] text-white px-8 sm:px-10 lg:px-12 py-2 sm:py-2.5 lg:py-3 rounded-[12px] sm:rounded-[15px] text-sm sm:text-base lg:text-[18px] font-medium hover:bg-[#1410cf] transition-all w-full lg:w-auto'
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormEdit