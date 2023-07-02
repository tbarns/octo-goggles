import React from 'react'
import './Footer.css'




const Footer  = ({ setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div id= 'footerDiv'>
 <button className='navBtn' onClick={() => handlePageChange('contact')}>Contact</button>

<button className='navBtn' onClick={() => handlePageChange('home')}>Home</button>

    </div>
  )
}

export default Footer