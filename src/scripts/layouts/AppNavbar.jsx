// eslint-disable-next-line no-unused-vars
import React from 'react'
import NotesLogo from '../../assets/mynotes-logo.png'

function AppNavbar({ onToggleTheme, iconTheme}) {
  return (
    <nav className='nav'>
			<a href="#" className='nav__logo'>
				<img src={NotesLogo} alt="MyNotes Logo" />
			</a>

			<button className='nav__theme' onClick={() => onToggleTheme()}>
				<img src={iconTheme} alt='Icon Theme' />
			</button>
    </nav>  
  );
}

export default AppNavbar;