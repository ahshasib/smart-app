import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Home from './pages/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  // {
  //   path: "/login",
  //   element: <Login></Login>
  // },
  // {
  //   path: "/registration",
  //   element: <Reg></Reg>
  // },
  // {
  //   path: "/order",
  //   element: <PrivetRoute><Order></Order></PrivetRoute>
  // },
  

]);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
)