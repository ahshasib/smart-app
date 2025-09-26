import React, { useState, useRef } from "react";

const OtpInput = ({ length = 6, onSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (/[^0-9]/.test(value)) return; // শুধু সংখ্যা allow করবে

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move to next box
    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(otp.join(""));
  };

  return (
    <form className="flex flex-col items-center gap-6" onSubmit={handleSubmit}>
      <label className="text-lg font-medium">Enter OTP</label>
      
      <div className="flex gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength="1"
            className="w-12 h-12 text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-semibold"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      <button
        type="submit"
        className="btn bg-[#3BA334] hover:bg-[#2E922B] text-white font-medium text-sm border-none w-full mt-2 shadow-lg shadow-[#3BA334]/40"
      >
        Verify OTP
      </button>
    </form>
  );
};

export default OtpInput;
