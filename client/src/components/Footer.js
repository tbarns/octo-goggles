import React from 'react'
import './Footer.css'




const Footer = ({ setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div id='footerDiv'>
<p>Made with 🎨 by Timothy Barnaby  </p>
      {/* <button className='navBtn  glow-on-hover' onClick={() => handlePageChange('contact')}>Contact</button>
      <button className='navBtn  glow-on-hover' onClick={() => handlePageChange('home')}>Home</button>
      <button className='navBtn  glow-on-hover' onClick={() => handlePageChange('projects')}>Projects</button> */}
    </div>
  )
}

export default Footer