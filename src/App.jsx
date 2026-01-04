import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/sidebar'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <div className='flex'>
      <div className='w-[18%] h-screen border border-gray-100 bg-[#ffffff]'>
        <SideBar />
      </div>
      <div className='bg-[#F5F7FA] w-[88%] h-screen'>
        <Dashboard />
      </div>
 
    </div>
  )
}

export default App
