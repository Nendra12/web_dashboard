import React, {useState} from 'react'
import './App.css'

import Navbar from './components/Navbar'
import SideBar from './components/sidebar'
import Dashboard from './pages/Dashboard'
import Loan from './pages/Loan'
import Settings from './pages/Settings'

function App() {
  const [navActive, setNavActive] = useState('1')

  const handleClick = (e) => [
    setNavActive(e)
  ]

  console.log(navActive)
  return (
    <div className='flex'>
      <div className='w-[18%] h-screen border border-gray-100 bg-[#ffffff]'>
        <SideBar handleClick={handleClick} navActive={navActive}/>
      </div>
      <div className='bg-[#F5F7FA] w-[88%] h-screen'>
        { navActive == '1' && <Dashboard />}
        { navActive == '2' && <Loan />}
        { navActive == '3' && <Settings />}
      </div>
 
    </div>
  )
}

export default App
