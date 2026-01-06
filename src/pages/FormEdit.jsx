import React from 'react'
import profile from '../assets/icon/Mask Group.png'
import pencil from '../assets/icon/pencil-alt 1.png'

function FormEdit() {

    return (
        <div className="p-3 bg-white rounded-xl">
            <form action="" className='flex gap-13.25'>
                {/* Profile Section */}
                <div className='relative w-max mb-8'>
                    <img src={profile} alt="profile" className="w-33 h-33 rounded-full object-cover" />
                    <button 
                        type="button"
                        className='cursor-pointer absolute top-20 right-0 w-8 h-8 bg-[#1814F3] rounded-full flex items-center justify-center hover:bg-[#1410cf] transition-colors'
                    >
                        <img src={pencil} alt="pencil" className='w-4 h-4'/>
                    </button>
                </div>

                {/* Input Grid Section */}
                <div className='flex flex-col gap-5.5'>
                    {/* Your Name */}
                    <div className="flex flex-col gap-2 w-100.5">
                        <label className="text-[#232323] text-sm font-medium">Your Name</label>
                        <input 
                        type="text" 
                        placeholder="Charlene Reed" 
                        className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#232323] text-sm font-medium">Email</label>
                        <input 
                        type="email" 
                        placeholder="charlenereed@gmail.com" 
                        className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>


                    {/* Date of Birth */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#232323] text-sm font-medium">Date of Birth</label>
                        <select className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none bg-white appearance-none">
                            <option>25 January 1990</option>
                        </select>
                    </div>

                    {/* Permanent Address */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#232323] text-sm font-medium">Permanent Address</label>
                        <input 
                        type="text" 
                        placeholder="San Jose, California, USA" 
                        className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* Postal Code */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#232323] text-sm font-medium">Postal Code</label>
                        <input 
                        type="text" 
                        placeholder="45962" 
                        className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                </div>
                <div className='flex flex-col gap-5.5'>
                    {/* User Name */}
                    <div className="flex flex-col gap-2 w-100.5">
                        <label className="text-[#232323] text-sm font-medium">User Name</label>
                        <input 
                        type="text" 
                        placeholder="Charlene Reed" 
                        className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    
                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#232323] text-sm font-medium">Password</label>
                        <input 
                        type="password" 
                        placeholder="**********" 
                        className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* Present Address */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#232323] text-sm font-medium">Present Address</label>
                        <input 
                        type="text" 
                        placeholder="San Jose, California, USA" 
                        className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* City */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#232323] text-sm font-medium">City</label>
                        <input 
                        type="text" 
                        placeholder="San Jose" 
                        className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#232323] text-sm font-medium">Country</label>
                        <input 
                        type="text" 
                        placeholder="USA" 
                        className="px-4 py-3 rounded-xl border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                        />
                    </div>

                    <div className='w-full flex justify-end'>
                        <button 
                            type="submit" 
                            className='mt-3 bg-[#1814F3] text-white px-12 py-3 rounded-[15px] text-[18px] font-medium hover:bg-[#1410cf] transition-all w-full md:w-auto'
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