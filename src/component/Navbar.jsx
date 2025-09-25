import React from 'react'

const Navbar = () => {
  return (
    <nav className=" bg-transparent w-11/12 mx-auto">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-[120px] py-4 lg:py-[19px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#">
            <img src="/logo.png" alt="Logo" className="w-[120px] sm:w-[130px] lg:w-[147px]" />
          </a>
        </div>

        {/* Button */}
        <div className="flex-shrink-0">
          <button className="bg-[#3BA334] hover:bg-[#2E922B] text-white font-medium text-sm sm:text-base lg:text-[16px] px-4 sm:px-6 lg:px-[26px] py-2 sm:py-3 lg:py-[10px] rounded-md lg:rounded-[8px] transition-colors cursor-pointer shadow-lg shadow-[#3BA334]/40">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
