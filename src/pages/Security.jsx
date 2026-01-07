import React, { useState } from 'react';
import PasswordInput from '../components/PasswordInput';

function Security() {
    const [twoFactor, setTwoFactor] = useState(true);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

  return (
        <form className="space-y-6 sm:space-y-8 lg:space-y-10 w-full p-2 sm:p-3">
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 lg:mb-6">
                <h3 className="text-[#333B69] text-sm sm:text-base lg:text-[17px] font-semibold">Two-factor Authentication</h3>
                <div className="flex items-center gap-3 sm:gap-4">
                    <button
                    type="button"
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={`relative w-12 h-6 flex items-center rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${
                        twoFactor ? 'bg-[#16DBCC]' : 'bg-[#E7EDF1]'
                    }`}
                    >
                    <span
                        className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 shadow-sm ${
                        twoFactor ? 'translate-x-6' : 'translate-x-1'
                        }`}
                    />
                    </button>
                    <span className="text-[#232323] text-xs sm:text-sm">Enable or disable two factor authentication</span>
                </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
                <h3 className="text-[#333B69] text-sm sm:text-base lg:text-[17px] font-semibold">Change Password</h3>
                
                <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 max-w-full lg:max-w-md">
                    <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
                    <label className="text-[#232323] text-sm sm:text-[15px] lg:text-[16px] font-medium" for='old pass'>Current Password</label>
                       <div className="relative w-full lg:w-130.5">
                            <input
                                type={showCurrentPassword ? "text" : "password"}
                                placeholder="**********"
                                name='old pass'
                                id='old pass'
                                className="w-full px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 pr-10 sm:pr-12 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-xs sm:text-sm lg:text-base text-primary3 focus:outline-none focus:border-[#1814F3]"
                            />

                            <button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-primary3 cursor-pointer"
                            >
                                {showCurrentPassword ? (
                                <i class="bi bi-eye-slash"></i>
                                ) : (
                                <i class="bi bi-eye"></i>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
                    <label className="text-[#232323] text-sm sm:text-[15px] lg:text-[16px] font-medium" for='new pass'>New Password</label>
                        <div className="relative w-full lg:w-130.5">
                            <input
                                type={showNewPassword ? "text" : "password"}
                                placeholder="**********"
                                name='new pass'
                                id='new pass'
                                className="w-full px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 pr-10 sm:pr-12 rounded-lg sm:rounded-xl border border-[#DFEAF2] text-xs sm:text-sm lg:text-base text-primary3 focus:outline-none focus:border-[#1814F3]"
                            />

                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-primary3 cursor-pointer text-sm sm:text-base"
                            >
                                {showNewPassword ? (
                                <i class="bi bi-eye-slash"></i>
                                ) : (
                                <i class="bi bi-eye"></i>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center md:justify-end">
                <button 
                    type="submit" 
                    className="bg-[#1814F3] text-white px-8 sm:px-12 lg:px-16 py-2 sm:py-2.5 lg:py-3 rounded-[12px] sm:rounded-[15px] text-sm sm:text-base lg:text-[18px] font-medium hover:bg-[#1410cf] transition-all cursor-pointer w-full lg:w-auto"
                >
                    Save
                </button>
            </div>
        </form>
  );
}

export default Security;