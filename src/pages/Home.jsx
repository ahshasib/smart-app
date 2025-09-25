
import React from 'react'
import { Link } from 'react-router'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'

const Home = () => {
    return (
        <div className=''>
            <header className="relative overflow-hidden">
                {/* Left Green Shadow */}
                <div className="absolute top-0 left-0 bottom-10 w-[10%] bg-green-200/20 blur-3xl pointer-events-none"></div>

                {/* Right Green Shadow */}
                

                {/* Bottom White Shadow */}
                

                <Navbar />
                <HeroSection />
                <div className="absolute left-0 right-0 bottom-0 h-[15%] bg-gradient-to-t from-white/95 via-white/95 to-transparent blur-7xl pointer-events-none z-100"></div>
                
            </header>


            {/* <Link to="/login" className='btn'> Login</Link>
        <Link to="/registration" className='btn'> Register</Link> */}

        </div>
    )
}

export default Home