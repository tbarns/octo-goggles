import React from 'react'
import './Header.css'

const Header = ({ setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  return (
    <div id='headerDiv'>

      <button className='navBtn  glow-on-hover' onClick={() => handlePageChange('contact')}>Contact</button>
      <button className='navBtn  glow-on-hover' onClick={() => handlePageChange('home')}>Home</button>
      <button className='navBtn  glow-on-hover' onClick={() => handlePageChange('projects')}>Projects</button>
    </div>
  )
}

export default Header