
import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='text-center'>
        <Link to="/login" className='btn'> Login</Link>
    </div>
  )
}

export default Home