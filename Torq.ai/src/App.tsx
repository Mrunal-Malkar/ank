
import { Outlet } from 'react-router-dom'
import './App.css'
import { NavbarDemo } from './components/navbar'

function App() {

  return (
    <div className='w-screen flex flex-col justify-center items-start bg-black text-white'>
      <NavbarDemo/>
      <Outlet />
    </div>
  )
}

export default App
