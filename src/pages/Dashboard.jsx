import React from 'react'
import Navbar from '../components/Navbar'

function Dashboard() {
  return (
    <div className="container flex flex-col">
        <div className='bg-[#ffffff] w-full h-25 border border-gray-100 py-5 px-10'>
            <Navbar />
        </div>
        <div className='py-6 px-10'>
            <div className='flex gap-7.5 h-70.5'>
                <div className='w-[70%] h-full border'>
                    
                    <h1>My Cards</h1>
                    <div className='flex gap-7.5 h-full'>
                        <div className='border w-[350px] h-full'></div>
                        <div className='border w-[350px] h-full'></div>
                    </div>
                </div>
                <div className='w-[30%] border'></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard