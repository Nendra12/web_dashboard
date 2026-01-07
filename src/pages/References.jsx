import React, { useState } from 'react';

function References() {
  const [notifications, setNotifications] = useState({
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
        <form className='w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 p-2 sm:p-3'>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
                    <label className="text-[#232323] text-sm sm:text-[15px] lg:text-[16px] font-medium">Currency</label>
                    <input 
                    type="text" 
                    defaultValue="USD" 
                    className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border text-xs sm:text-sm lg:text-[15px] border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
                    <label className="text-[#232323] text-sm sm:text-[15px] lg:text-[16px] font-medium">Time Zone</label>
                    <input 
                    type="text" 
                    defaultValue="(GMT-12:00) International Date Line West" 
                    className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-[15px] border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                    />
                </div>
            </div>

            <div className='space-y-3 sm:space-y-4'>
                <h3 className="text-[#333B69] text-sm sm:text-base lg:text-[17px] font-semibold mb-3 sm:mb-4">Notification</h3>
      
                <div className="flex items-center gap-3 sm:gap-4">
                    <ToggleButton 
                        isOn={notifications.digitalCurrency} 
                        onToggle={() => toggleNotification('digitalCurrency')} 
                    />
                    <span className="text-[#232323] text-xs sm:text-sm">I send or receive digital currency</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                    <ToggleButton 
                    isOn={notifications.merchantOrder} 
                    onToggle={() => toggleNotification('merchantOrder')} 
                    />
                    <span className="text-[#232323] text-xs sm:text-sm">I receive merchant order</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                    <ToggleButton 
                    isOn={notifications.recommendations} 
                    onToggle={() => toggleNotification('recommendations')} 
                    />
                    <span className="text-[#232323] text-xs sm:text-sm">There are recommendation for my account</span>
                </div>
            </div>

            <div className="flex justify-center md:justify-end pt-3 sm:pt-4 lg:pt-4">
                <button 
                    type="submit" 
                    className="bg-[#1814F3] cursor-pointer text-white px-8 sm:px-12 lg:px-16 py-2 sm:py-2.5 lg:py-3 rounded-[12px] sm:rounded-[15px] text-sm sm:text-base lg:text-[18px] font-medium hover:bg-[#1410cf] transition-all w-full lg:w-auto"
                >
                    Save
                </button>
            </div>
        </form>
  );
}

function ToggleButton({ isOn, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative w-12 h-6 flex items-center rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${
        isOn ? 'bg-[#16DBCC]' : 'bg-[#E7EDF1]'
      }`}
    >
      <span
        className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 shadow-sm ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

export default References;