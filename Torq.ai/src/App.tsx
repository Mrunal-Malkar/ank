
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/ui/resizable-navbar'
import { Home } from 'lucide-react'
import { NavbarDemo } from './components/navbar'

function App() {

  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <NavbarDemo/>
      <Outlet />
    </div>
  )
}

export default App
