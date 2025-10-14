
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/ui/resizable-navbar'
import { Home } from 'lucide-react'
import { NavbarDemo } from './components/navbar'

function App() {

  return (
    <>
    <NavbarDemo/>
    <Outlet />
    </>
  )
}

export default App
