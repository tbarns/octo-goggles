import React from 'react'
import './Header.css'

const Header = ({ setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  return (
    <div id='headerDiv'>
      Header
      <button className='navBtn' onClick={() => handlePageChange('contact')}>Contact</button>

      <button className='navBtn' onClick={() => handlePageChange('home')}>Home</button>
    </div>
  )
}

export default Header