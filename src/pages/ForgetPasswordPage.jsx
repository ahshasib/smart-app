import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react'
import { auth } from '../firebase/firebase.config';
import Swal from 'sweetalert2';

const ForgetPasswordPage = () => {

    const emailRef = useRef();
//handle forget password
const handleForgetPass = async(e) =>{
    e.preventDefault();
    const email = emailRef.current.value;
    try {
        await sendPasswordResetEmail(auth, email);
        Swal.fire({
          icon: "success",
          title: "Email Sent!",
          text: "Check your inbox to reset your password.",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      }}

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
  )
}

export default ForgetPasswordPage