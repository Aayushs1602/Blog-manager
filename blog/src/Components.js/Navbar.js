import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-b-4 border-green-700 text-center fixed top-0 bg-green-600 text-lg text-white font-bold w-full'>
        <ul>
            <li className='inline-block py-4'>
                <Link to='/' className='pl-6 pr-8'>
                    Home
                </Link>
            </li>
            <li className='inline-block py-4'>
                <Link to='/about' className='pl-6 pr-8'>
                    About
                </Link>
            </li>
            <li className='inline-block py-4'>
                <Link to='/articles-list' className='pl-6 pr-8'>
                    Articles
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar