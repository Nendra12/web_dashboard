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
    <div className="w-full flex flex-col lg:mt-0">
        <div className='py-3 px-4 sm:py-4 sm:px-6 md:py-5 lg:py-6 md:px-8 lg:px-10 flex flex-col gap-4 sm:gap-5 md:gap-5 lg:gap-6 bg-white lg:mt-0'>
            {/* First Row - My Cards & Recent Transactions */}
            <div className='flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-7.5 lg:h-74'>
                <div className='w-full lg:w-[65%] h-auto lg:h-full flex flex-col'>
                    <MyCards />
                </div>
                <div className='w-full lg:w-[35%] flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-5 h-auto lg:h-full'>
                    <RecentT />
                </div>
            </div>
            {/* Second Row - Weekly Activity & Expense Statistics */}
            <div className='flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-7.5 h-auto'>
                <div className='w-full lg:w-[65%] flex flex-col'>
                    <WeeklyActv />
                </div>
                <div className='w-full lg:w-[35%] flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-5'>
                    <ExpenseStat />
                </div>
            </div>
            {/* Third Row - Quick Transfer & Balance History */}
            <div className='flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-7.5 h-auto lg:h-80'>
                <div className='w-full lg:w-[40%] flex flex-col'>
                   <QuickTf />
                </div>
                <div className='w-full lg:w-[60%] flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-5'>
                   <BalanceHistory />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard