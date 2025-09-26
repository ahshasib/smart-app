import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
