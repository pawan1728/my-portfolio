import React from 'react'
import Logo from '../../atom/logo'
import NavBar from '../nav'

const Header = () => {
  return (
      <div className='w-full bg-gray-400'>
        <div className='container mx-auto w-full flex justify-between items-center p-2'>
        <Logo />
        <NavBar />
        </div>
    </div>
  )
}

export default Header