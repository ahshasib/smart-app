import React from 'react'
import { Link } from 'react-router'

const GotoPage = () => {
    return (
        <div className="w-full h-screen relative">
            <img src="/logo.png" alt="Logo" className=" absolute m-10 w-[120px] sm:w-[130px] lg:w-[147px]" />

            <div className="flex justify-center items-center w-full h-full relative z-10">

                <div className="w-full max-w-lg p-8">
                    <h1 className="text-3xl font-bold">Password Check Your Email For Changing Password</h1>
                    <p className='text-gray-600 text-md mb-15 py-3'>Click the Link what providing in your email and put the new password</p>
                    <Link to="/login"><button className="btn bg-[#3BA334] hover:bg-[#2E922B] text-white font-medium text-sm border-none w-full mt-2  shadow-lg shadow-[#3BA334]/40">Go To Login</button></Link>
                </div>

            </div>
        </div>
    )
}

export default GotoPage