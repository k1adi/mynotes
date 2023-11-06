// eslint-disable-next-line no-unused-vars
import React from 'react';
import AppNavbar from './components/AppNavbar';
import NotesApp from './components/NotesApp';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <>
      <header className='app__header'>
        <AppNavbar />
      </header>

      <main className='app__content'>
        <NotesApp />
      </main>

      <footer className='app__footer'>
        <AppFooter />
      </footer>
    </>
  )
}

export default App
