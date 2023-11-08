// eslint-disable-next-line no-unused-vars
import React from 'react';
import AppNavbar from './components/AppNavbar';
import NotesApp from './components/NotesApp';
import AppFooter from './components/AppFooter';

import SunIcon from '../assets/sun-icon.png'
import MoonIcon from '../assets/moon-icon.png'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTheme: 'light',
      iconTheme: SunIcon,
    }

    this.onToggleThemeHandler = this.onToggleThemeHandler.bind(this);
  }

  onToggleThemeHandler() {
    this.setState((prevState) => ({
      currentTheme: prevState.currentTheme === 'light' ? 'dark' : 'light',
      iconTheme: prevState.iconTheme === SunIcon ? MoonIcon : SunIcon,
    }));
  }

  render() {
    return (
      <div className={`app ${this.state.currentTheme}`}>
        <header className='app__header'>
          <AppNavbar onToggleTheme={this.onToggleThemeHandler} iconTheme={this.state.iconTheme} />
        </header>
  
        <main className='app__content'>
          <NotesApp />
        </main>
  
        <footer className='app__footer'>
          <AppFooter />
        </footer>
      </div>
    )
  }
}

export default App
