import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgetPasswordPage = () => {
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleForgetPass = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    try {
      const res = await axios.post("http://localhost:5000/send-otp", { email });

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
    <div className="flex justify-center items-center w-full h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-center text-2xl font-bold mb-4">Reset Password</h1>
        <form onSubmit={handleForgetPass}>
          <label className="label">Enter Your Email</label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="input input-bordered w-full mb-4"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
