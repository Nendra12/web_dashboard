import React from 'react'
import wallet from '../assets/transaction/Group 313.png'
import paypal from '../assets/transaction/Group 314.png'
import coin from '../assets/transaction/Group 315.png'

function RecentT() {
  return (
    <>
        <p className='font-semibold text-[22px] text-primary2'>Recent Transaction</p>
        <div className='border-[#DFEAF2] border relative rounded-[25px] flex flex-col p-6.5 gap-2.5 h-full'>
            <div className='flex gap-3.5 justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img src={wallet} alt="wallet" />
                    <div>
                        <p className='font-medium text-[16px] text-[#232323]'>Deposit from my Card</p>
                        <p className='font-normal text-[15px] text-primary3'>28 January 2021</p>
                    </div>
                </div>
                <p className='font-medium text-[16px] text-[#FF4B4A]'>-$850</p>
            </div>
            <div className='flex gap-3.5 justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img src={paypal} alt="paypal" />
                    <div>
                        <p className='font-medium text-[16px] text-[#232323]'>Deposit Paypal</p>
                        <p className='font-normal text-[15px] text-primary3'>25 January 2021</p>
                    </div>
                </div>
                <p className='font-medium text-[16px] text-[#41D4A8]'>+$2,500</p>
            </div>
            <div className='flex gap-3.5 justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img src={coin} alt="coin" />
                    <div>
                        <p className='font-medium text-[16px] text-[#232323]'>Jemi Wilson</p>
                        <p className='font-normal text-[15px] text-primary3'>21 January 2021</p>
                    </div>
                </div>
                <p className='font-medium text-[16px] text-[#41D4A8]'>+$5,400</p>
            </div>
        </div>
    </>
  )
}

export default RecentT