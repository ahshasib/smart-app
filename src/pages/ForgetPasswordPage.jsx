import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';

const ForgetPasswordPage = () => {
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleForgetPass = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    try {
      const res = await axios.post("https://smart-app-server.vercel.app/send-otp", { email });

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "OTP Sent!",
          text: "Check your email for the 6-digit code.",
          confirmButtonText: "Proceed",
        }).then(() => {
          // Redirect to OTP verification page with email in state
          navigate("/verify-otp", { state: { email } });
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className='w-full h-screen relative'>
      <Link to='/'><img src="/logo.png" alt="Logo" className=" absolute m-10 w-[120px] sm:w-[130px] lg:w-[147px] z-[9999] cursor-pointer" /></Link>


      <div className="flex justify-center items-center w-full h-screen">



      <div className="w-full max-w-lg p-8">
        <h1 className="text-xl md:text-3xl font-bold">Forgot your password?</h1>
        <p className='text-gray-600 text-sm md:text-md mb-15 py-2'>Please enter the email address associated with your account, and we'll email you a link to reset your password.</p>
        <form onSubmit={handleForgetPass}>
          <label className="label">Enter Your Email</label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="input input-bordered w-full mb-4"
            required
          />
          <button type="submit" className="btn bg-[#3BA334] hover:bg-[#2E922B] text-white font-medium text-sm border-none w-full shadow-lg shadow-[#3BA334]/40 mt-5">
          Reset Password
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ForgetPasswordPage;
