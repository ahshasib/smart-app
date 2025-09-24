import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AuthProvider from './context/AuthProvider';
import ForgetPasswordPage from './pages/ForgetPasswordPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  // {
  //   path: "/registration",
  //   element: <Reg></Reg>
  // },
  {
    path: "/forget-password",
    element: <ForgetPasswordPage></ForgetPasswordPage>
  },
  

]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </AuthProvider>
)