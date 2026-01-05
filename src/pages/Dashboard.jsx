import React from 'react'
import Navbar from '../components/Navbar'

import RecentT from '../components/RecentT'
import MyCards from '../components/MyCards'
import WeeklyActv from '../components/WeeklyActv'
import ExpenseStat from '../components/ExpenseStat'
import QuickTf from '../components/QuickTf'
import BalanceHistory from '../components/BalanceHistory'



function Dashboard() {
  return (
    <div className="container flex flex-col">
        <div className='bg-[#ffffff] w-full h-25 border border-gray-100 py-5 px-10'>
            <Navbar />
        </div>
        <div className='py-6 px-10 flex flex-col gap-6 bg-[#F5F7FA]'>
            <div className='flex gap-7.5 h-74'>
                <div className='w-[65%] h-full flex flex-col'>
                    <MyCards />
                </div>
                <div className='w-[35%] flex flex-col gap-5 h-full'>
                    <RecentT />
                </div>
            </div>
            <div className='flex gap-7.5 h-auto'>
                <div className='w-[65%] flex flex-col'>
                    <WeeklyActv />
                </div>
                <div className='w-[35%] flex flex-col gap-5'>
                    <ExpenseStat />
                </div>
            </div>
            <div className='flex gap-7.5 h-80'>
                <div className='w-[40%] flex flex-col'>
                   <QuickTf />
                </div>
                <div className='w-[60%] flex flex-col gap-5'>
                   <BalanceHistory />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard