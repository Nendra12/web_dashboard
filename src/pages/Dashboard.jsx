import React from 'react'
import Navbar from '../components/Navbar'

import RecentT from '../components/RecentT'
import MyCards from '../components/MyCards'
import WeeklyActv from '../components/WeeklyActv'
import ExpenseStat from '../components/ExpenseStat'



function Dashboard() {
  return (
    <div className="container flex flex-col">
        <div className='bg-[#ffffff] w-full h-25 border border-gray-100 py-5 px-10'>
            <Navbar />
        </div>
        <div className='py-6 px-10 flex flex-col gap-6'>
            <div className='flex gap-7.5 h-74'>
                <div className='w-[65%] h-full flex flex-col'>
                    <MyCards />
                </div>
                <div className='w-[35%] flex flex-col gap-5 h-full'>
                    <RecentT />
                </div>
            </div>
            <div className='flex gap-7.5 h-auto'>
                <div className='w-[65%] border flex flex-col'>
                    <WeeklyActv />
                </div>
                <div className='w-[35%] border flex flex-col gap-5'>
                    <ExpenseStat />
                </div>
            </div>
            <div className='flex gap-7.5 h-80'>
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard