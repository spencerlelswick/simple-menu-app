import React from 'react'

import logo from '../assets/logo_wendys_desktop.svg'

const Header = () => {
  return (
    <div className='header-container'>
      <img src={logo} />
      <h2 className='header-text'>Stay hungry, my friends.</h2>
    </div>
  )
}

export default Header
