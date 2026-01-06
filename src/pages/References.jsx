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
        <form className='w-full flex flex-col gap-7'>

            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                    <label className="text-[#232323] text-[16px] font-medium">Currency</label>
                    <input 
                    type="text" 
                    defaultValue="USD" 
                    className="px-5 py-3 rounded-xl border text-[15px] border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-[#232323] text-[16px] font-medium">Time Zone</label>
                    <input 
                    type="text" 
                    defaultValue="(GMT-12:00) International Date Line West" 
                    className="px-5 py-3 rounded-xl text-[15px] border border-[#DFEAF2] text-primary3 focus:outline-none focus:border-[#1814F3]"
                    />
                </div>
            </div>

            <div className='space-y-4'>
                <h3 className="text-[#333B69] text-[17px] font-semibold mb-4">Notification</h3>
      
                <div className="flex items-center gap-4">
                    <ToggleButton 
                        isOn={notifications.digitalCurrency} 
                        onToggle={() => toggleNotification('digitalCurrency')} 
                    />
                    <span className="text-[#232323] text-sm">I send or receive digital currency</span>
                </div>

                <div className="flex items-center gap-4">
                    <ToggleButton 
                    isOn={notifications.merchantOrder} 
                    onToggle={() => toggleNotification('merchantOrder')} 
                    />
                    <span className="text-[#232323] text-sm">I receive merchant order</span>
                </div>

                <div className="flex items-center gap-4">
                    <ToggleButton 
                    isOn={notifications.recommendations} 
                    onToggle={() => toggleNotification('recommendations')} 
                    />
                    <span className="text-[#232323] text-sm">There are recommendation for my account</span>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button 
                    type="submit" 
                    className="bg-[#1814F3] cursor-pointer text-white px-16 py-3 rounded-[15px] text-[18px] font-medium hover:bg-[#1410cf] transition-all"
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