import React from 'react'

const BookServices = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-24 relative">
            {/* Title and Subtitle */}
            
            <div className=" absolute left-[10%] -top-[20%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="223" height="127" viewBox="0 0 223 127" fill="none">
                    <path d="M221 1.5C140.5 16 50 55 6 122" stroke="#3ED434" stroke-opacity="0.1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.3242 118.598C11.339 120.877 8.0276 124.767 5.60334 124.087C3.17908 123.408 2.77207 119.544 3.37309 115.464" stroke="#3ED434" stroke-opacity="0.1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
           

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-10 w-full gap-10 mt-20 lg:mt-2">
                {/* Left Side - Text */}
                <div className="flex-[1] text-left">
                    <span className="px-4 py-1 rounded-full border border-green-600 text-xs sm:text-sm text-green-600">
                        Users
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold my-4">
                        Book services, track progress <br /> and stay updated.
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                        Easily schedule appointments, get real-time updates, and <br /> enjoy a
                        smooth, transparent service experience.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2 border-green-600 border-l-4 pl-4 sm:pl-6 font-semibold text-sm sm:text-base">
                            Book services in seconds
                        </li>
                        <li className="flex items-start gap-2 border-green-600 border-l-4 pl-4 sm:pl-6 font-semibold text-sm sm:text-base">
                            Track real-time job updates
                        </li>
                        <li className="flex items-start gap-2 border-green-600 border-l-4 pl-4 sm:pl-6 font-semibold text-sm sm:text-base">
                            Schedule appointments at your convenience
                        </li>
                    </ul>
                </div>

                {/* Right Side - Image */}
                <div className="flex-[1.4] flex justify-end relative w-full order-2 lg:order-2">
                    <div className="absolute top-5 sm:top-10 right-0 bottom-5 sm:bottom-10 w-full bg-green-100/30 blur-3xl pointer-events-none"></div>
                    <img
                        src="Rect.png"
                        alt="Service Preview"
                        className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[610px] h-auto object-cover z-10"
                    />
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute left-0 right-0 bottom-0 h-[15%]  bg-gradient-to-t from-white via-white to-transparent blur-7xl pointer-events-none z-20"></div>
        </div>
  )
}

export default BookServices