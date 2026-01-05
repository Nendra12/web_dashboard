import React, {useState} from 'react'
import ceo from '../assets/profile/Mask Group.png'
import director from '../assets/profile/Mask Group (1).png'
import designer from '../assets/profile/Mask Group (2).png'
import arrow from '../assets/profile/Vector 1.png'  
import kirim from '../assets/profile/Group.png'  

function QuickTf() {
    const [val, setVal] = useState("525.50");
  return (
    <>
        <div className='pb-5'>
            <h1 className='font-semibold text-[22px] text-primary2'>Quick Transfer</h1>
        </div>
        <div className='border-[#DFEAF2] border bg-[#FFFFFF] relative justify-between rounded-[25px] flex flex-col p-6.25 gap-2.5 h-full'>
            <div className='flex items-center justify-between '>
                <div>
                    <img src={director} alt="ceo" className='mb-3'/>
                    <h1 className='font-extrabold text-[16px] text-[#232323]'>Livia Bator</h1>
                    <h1 className='font-extrabold text-[16px] text-primary3'>CEO</h1>
                </div>
                <div>
                    <img src={ceo} alt="director" className='mb-3'/>
                    <h1 className='font-extralight text-[16px] text-[#232323]'>Randy Press</h1>
                    <h1 className='font-extralight text-[16px] text-primary3'>Director</h1>
                </div>
                <div>
                    <img src={designer} alt="designer" className='mb-3'/>
                    <h1 className='font-extralight text-[16px] text-[#232323]'>Workman</h1>
                    <h1 className='font-extralight text-[16px] text-primary3'>Designer</h1>
                </div>
                <button className='w-12.5 h-12.5 rounded-full flex items-center hover:bg-[#E7E4E8CC] transition duration-300 cursor-pointer bg-[#ffffff] justify-center shadow-xl shadow-[#E7E4E8CC]'>
                    <img src={arrow} alt="arrow"/>
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-extralight text-[16px] text-primary3'>Write Amount</p>
                <div className='bg-[#EDF1F7] rounded-[50px] flex items-center justify-between h-12.5'>
                    <input type="number" className='p-5 max-w-30 outline-none focus:outline-none active:outline-none overflow-hidden whitespace-nowrap text-[15px] text-primary3' value={val} onChange={(e) => setVal(e.target.value)}/>
                    <button className='bg-[#1814F3] rounded-[50px] w-31.25 flex items-center justify-between h-full p-6 text-[#ffffff] cursor-pointer hover:bg-[#1412be]'>
                        Send
                        <img src={kirim} alt="kirim"/>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuickTf