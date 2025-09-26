import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AuthProvider from './context/AuthProvider';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

import GotoPage from './pages/GotoPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/registration",
    element: <RegisterPage></RegisterPage>
  },
  {
    path: "/forget-password",
    element: <ForgetPasswordPage></ForgetPasswordPage>
  },
  {
    path: "/goto",
    element: <GotoPage></GotoPage>
  },
  {
    path: "/verify-otp",
    element: <ResetPasswordPage></ResetPasswordPage>
  },
 

]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </AuthProvider>
)