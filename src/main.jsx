import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Root/Main'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

// router
const router=createBrowserRouter([{
  path:'/',
  element:<Main></Main>,
  children:[{
    path:'/',
    element:<Home></Home>,
    
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
