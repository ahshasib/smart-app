import React from 'react';

const HeroSection = () => {
  return (
    <div className=" w-10/12 mx-auto h-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-between   py-12">

      {/* Image Section */}
      <div className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0 relative h-[300px] sm:h-[400px] lg:h-auto">
        {/* Green Shadow */}
        <div className="absolute top-10 right-10 bottom-10 w-full bg-green-100/30 blur-3xl pointer-events-none"></div>

        <img
          src="/hero2-img.png"
          className="w-full h-full  max-w-[720px] object-cover object-top z-10"
          alt="Hero"
        />

        {/* Bottom White Shadow */}

      </div>

      {/* Text Section */}
      <div className="flex-1 lg:ml-12 text-center lg:text-left relative mb-8 lg:mb-0">
        <img
          src="Vector.svg"
          alt=""
          className="absolute left-1/3 -top-1/5 w-24 sm:w-36 lg:w-48"
        />

        <h1 className="relative inline-block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
          All Your Jobs <br /> One <span className="relative inline-block">
            Smart App
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 bottom-0 w-full h-5"
              viewBox="0 0 419 21"
              fill="none"
            >
              <path
                d="M1.98018 10.4341C200.576 -1.56767 325.584 -2.12439 416.942 17.0656C332.001 8.92435 210.5 3 135.5 15C186.5 15 255 12 279 19"
                stroke="#3BA334"
                strokeOpacity="0.5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </h1>

        <p className="pt-6 text-gray-600 text-sm sm:text-base md:text-lg lg:text-lg w-full sm:w-[80%] lg:w-[65%] mx-auto lg:mx-0">
          Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.
        </p>

        {/* App Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-16 justify-center lg:justify-start">

          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center justify-center bg-transparent text-black border border-green-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform shadow-sm"
          >
            <img src="/Apple.svg" alt="Apple" className="w-6 h-6 mr-3" />
            <div className="flex flex-col text-left">
              <span className="text-xs">Download on the</span>
              <span className="font-semibold text-sm">App Store</span>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center justify-center bg-transparent text-black border border-green-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform shadow-sm"
          >
            <img src="/Playstore.svg" alt="Google Play" className="w-6 h-6 mr-3" />
            <div className="flex flex-col text-left">
              <span className="text-xs">Get it on</span>
              <span className="font-semibold text-sm">Google Play</span>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}

export default HeroSection;
