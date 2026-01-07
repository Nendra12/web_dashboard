import React, {useState} from 'react'
import './App.css'

import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard'
import Loan from './pages/Loan'
import Settings from './pages/Settings'

function App() {
  const [navActive, setNavActive] = useState('1')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleClick = (e) => {
    setNavActive(e)
    setIsSidebarOpen(false) 
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  console.log(navActive)
  return (
    <div className='flex relative'>
      {isSidebarOpen && (
        <div 
          className='fixed inset-0 bg-black/70 bg-opacity-50 z-40 md:hidden'
          onClick={toggleSidebar}
        ></div>
      )}
      
      <div className={`fixed md:static w-[250px] md:w-[200px] xl:w-[18%] h-screen border border-gray-100 bg-[#ffffff] z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <SideBar handleClick={handleClick} navActive={navActive}/>
      </div>

      <div className='bg-[#F5F7FA] w-full md:w-[82%] h-screen'>
        <div className='bg-[#ffffff] w-full h-auto md:border  py-5 px-4 md:px-10 md:border-gray-100'>
          <Navbar toggleSidebar={toggleSidebar} navActive={navActive} />
        </div>
        { navActive == '1' && <Dashboard />}
        { navActive == '2' && <Loan />}
        { navActive == '3' && <Settings />}
      </div>
 
    </div>
  )
}

export default App
