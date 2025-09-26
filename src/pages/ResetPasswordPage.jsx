import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState(new Array(6).fill("")); // 6 box er state
  const [otpVerified, setOtpVerified] = useState(false);

  const auth = getAuth();

  const inputsRef = useRef([]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) { // sudhu number allow
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // next input e focus
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      Swal.fire({ icon: "error", title: "Invalid OTP", text: "Enter 6-digit code" });
      return;
    }
  
    try {
      const res = await axios.post("https://smart-app-server.vercel.app/verify-otp", { email, otp: otpValue });
      if (res.data.success) {
        setOtpVerified(true);
  
        // Firebase password reset email pathano
        await sendPasswordResetEmail(auth, email, {
          url: "https://smart-app-server.vercel.app/login",
        });
  
        Swal.fire({
          icon: "success",
          title: "OTP Verified!",
          text: "Check your email for the password reset link.",
        }).then(() => {
          // OTP success hole notun page e navigate
          navigate("/goto"); // ekhane tumi je page e navigate korte chao sheta boshabe
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "OTP Invalid",
        text: err.response?.data?.message || "Try again",
      });
    }
  };
  

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-full max-w-lg p-8">
        <button onClick={handleBack} className="mb-5 text-green-600 font-semibold cursor-pointer">
          &larr; Back
        </button>
        <h1 className="text-xl md:text-2xl font-bold">Please check your email!</h1>
        <p className="text-gray-600 text-md mb-15 py-2">
          We've emailed a 6-digit confirmation code to {email}, please enter the code below to verify your email.
        </p>

        {!otpVerified && (
          <>
            <label className="label">Enter OTP</label>
            <div className="flex justify-between gap-2 mb-4">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputsRef.current[index] = el)}
                  className="input input-bordered w-12 text-center text-lg"
                />
              ))}
            </div>
            <button
              onClick={handleVerifyOtp}
              className="btn bg-[#3BA334] hover:bg-[#2E922B] text-white font-medium text-sm border-none w-full mt-2  shadow-lg shadow-[#3BA334]/40"
            >
              Verify OTP
            </button>
          </>
        )}

        {/* {otpVerified && (
          <p className="text-green-600 text-center">
            OTP Verified! Check your email to reset your password.
          </p>
        )} */}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
