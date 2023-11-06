// eslint-disable-next-line no-unused-vars
import React from 'react'
import NotesLogo from '../../assets/mynotes-logo.png'

function AppNavbar() {
  return (
    <nav className='nav'>
			<a href="javascript:void(0)" className='nav__logo'>
				<img src={NotesLogo} alt="MyNotes Logo" />
			</a>
    </nav>  
  );
}

export default AppNavbar;
