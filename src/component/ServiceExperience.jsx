import React from "react";

const ServiceExperience = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto relative">
      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center px-4 sm:px-8 lg:px-10 w-full gap-10">
        
        {/* Left Side - Text (on small devices it will be top) */}
        <div className="flex-[1] text-left order-2 lg:order-2">
          <span className="px-4 py-1 rounded-full border border-green-600 text-xs sm:text-sm text-green-600">
            Business Owners
          </span>
          <h3 className="text-xl sm:text-2xl font-bold my-4">
            Assign jobs, monitor performance, and <br /> streamline operations.
          </h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Gain full control of your workforce with real-time tracking, <br /> smart scheduling, and service management in one app.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2 border-green-600 border-l-4 pl-4 sm:pl-6 font-semibold text-sm sm:text-base">
              Assign jobs to the right team member
            </li>
            <li className="flex items-start gap-2 border-green-600 border-l-4 pl-4 sm:pl-6 font-semibold text-sm sm:text-base">
              Monitor performance in real time
            </li>
            <li className="flex items-start gap-2 border-green-600 border-l-4 pl-4 sm:pl-6 font-semibold text-sm sm:text-base">
              Manage clients and services seamlessly
            </li>
          </ul>
        </div>

        {/* Right Side - Image (on small devices it will be bottom) */}
        <div className="flex-[1.4] flex justify-between relative w-full order-1 lg:order-1">
          <div className="absolute top-5 sm:top-10 left-0 bottom-5 sm:bottom-10 w-full bg-green-100/30 blur-3xl pointer-events-none"></div>
          <img
            src="Rec.png"
            alt="Service Preview"
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[610px] h-auto object-cover z-10"
          />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute left-0 right-0 bottom-0 h-[15%] bg-gradient-to-t from-white via-white to-transparent blur-7xl pointer-events-none z-20"></div>
    </div>
  );
};

export default ServiceExperience;
