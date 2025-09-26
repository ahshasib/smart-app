import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { auth } from "../firebase/firebase.config";
import { signInWithCustomToken } from "firebase/auth";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleVerify = async () => {
    try {
      const res = await axios.post("http://localhost:3000/verify-otp", { email, otp });

      if (res.data.success) {
        // Firebase এ custom token দিয়ে login
        await signInWithCustomToken(auth, res.data.token);

        Swal.fire({
          icon: "success",
          title: "OTP Verified!",
        }).then(() => {
          navigate("/reset-password", { state: { email } });
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: err.response?.data?.message || "Try again!",
      });
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-center text-2xl font-bold mb-4">Enter OTP</h1>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="6-digit code"
          className="input input-bordered w-full mb-4"
        />
        <button onClick={handleVerify} className="btn btn-primary w-full">
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
