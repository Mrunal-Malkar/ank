import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Live from './pages/live.jsx';
import Home from './pages/home.tsx';

const router=createBrowserRouter([
  {
    path:"/",element:<App/>,
    children:[
      {index:true,path:"/",element:<Home/>},
      {path:"live",element:<Live/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
