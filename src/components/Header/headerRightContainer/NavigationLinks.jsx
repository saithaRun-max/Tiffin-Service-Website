import React from 'react'
import { Link } from 'react-router-dom';

const NavigationLinks = () => {
  return (
    <nav className='flex align-middle mt-4'>
    <Link to="/">
      <h3 className='mr-4 font-semibold'>Home</h3>
    </Link>
      <Link to="/about">
        <h3 className='mr-4 font-semibold'>About us</h3>
      </Link>
      <Link to="/cart">
        <h3 className='mr-4 font-semibold'>Cart</h3>
      </Link>
    </nav>
  )
}

export default NavigationLinks
