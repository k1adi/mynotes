// eslint-disable-next-line no-unused-vars
import React from 'react'
import NotesLogo from '../../assets/mynotes-logo.png'
import NotesIcon from '../../assets/mynotes-icon.png'

function AppNavbar({ onToggleTheme, iconTheme}) {
  return (
    <nav className='nav'>
			<a href="#" className='nav__logo'>
				<img src={NotesLogo} className="nav__logo--desktop" alt="MyNotes Logo" />
				<img src={NotesIcon} className="nav__logo--mobile" alt="MyNotes Icon" />
			</a>

			<button className="nav__theme" onClick={() => onToggleTheme()}>
				<img src={iconTheme} alt="Light Theme" />
			</button>
    </nav>  
  );
}

export default AppNavbar;

