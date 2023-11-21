// eslint-disable-next-line no-unused-vars
import React from 'react';
import AppNavbar from './layouts/AppNavbar';
import AppFooter from './layouts/AppFooter';
import NotesApp from './components/NotesApp';

import SunIcon from '../assets/sun-icon.png';
import MoonIcon from '../assets/moon-icon.png';

// import { getInitialData } from './utils/data-notes';
import { getLocalData, saveLocalData } from './utils/local-storage';
import { getInitialLabel } from './utils/data-label';

import Swal from 'sweetalert2'
import ToastComponent from './utils/toast';

class App extends React.Component {
  constructor(props) {    
    super(props);

    this.state = {
      currentTheme: 'light',
      iconTheme: SunIcon,
      labels: getInitialLabel(),
      savedNotes: getLocalData(),
      displayNotes: getLocalData(),
    };

    this.onToggleThemeHandler = this.onToggleThemeHandler.bind(this);

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onCreateNoteHandler = this.onCreateNoteHandler.bind(this);
    this.onEditNoteHandler = this.onEditNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }

  onToggleThemeHandler() {
    this.setState((prevState) => ({
      currentTheme: prevState.currentTheme === 'light' ? 'dark' : 'light',
      iconTheme: prevState.iconTheme === SunIcon ? MoonIcon : SunIcon,
    }));
  }

  onCreateNoteHandler({label, title, body}) {
    this.setState((prevState) => ({
      savedNotes: [
        ...prevState.savedNotes,
        {
          id: +new Date(),
          label,
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
          updatedAt: '',
        },
      ],
      displayNotes: [
        ...prevState.displayNotes,
        {
          id: +new Date(),
          label,
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
          updatedAt: '',
        },
      ]
    }), () => {
      saveLocalData(this.state.savedNotes);
    });

    ToastComponent.init({
      text: 'Successfully Added a New Note',
      status: 'toastify--success'
    });
  }

  onEditNoteHandler({ id, label, title, body, archived, currentNote }) {
    const updatedNote = { ...currentNote, id, label, body, title, archived, updatedAt: new Date().toISOString() }

    this.setState((prevState) => ({
      savedNotes: [
        ...prevState.savedNotes.filter(note => note.id !== id),
        updatedNote,
      ],
      displayNotes: [
        ...prevState.displayNotes.filter(note => note.id !== id),
        updatedNote,
      ]
    }), () => {
      saveLocalData(this.state.savedNotes);
    });

    ToastComponent.init({
      text: 'Successfully Update the Note',
      status: 'toastify--success'
    });
  }
  
  onDeleteNoteHandler(id) {
    Swal.fire({
      icon: 'warning',
      title: 'Delete Note',
      text: 'Are you sure to delete this note?',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      confirmButtonColor: '#DC3545',
    }).then((result) => {
      if(result.isConfirmed){
        this.setState((prevState) => ({
          savedNotes: prevState.savedNotes.filter(note => note.id !== id),
          displayNotes: prevState.displayNotes.filter(note => note.id !== id)
        }), () => {
          saveLocalData(this.state.savedNotes);
        });

        ToastComponent.init({
          text: 'Successfully Deleted the Note',
          status: 'toastify--success'
        });
      }
    })
  }

  onSearchHandler({ title, label }) {
    const notes = this.state.savedNotes;
    let filteredNotes = [...notes]

    if(title.length && title.trim()) {
      filteredNotes = filteredNotes.filter(note => note.title.toLowerCase().includes(title.toLowerCase()));
    }

    if(label) {
      filteredNotes = filteredNotes.filter(note => note.label == label);
    }

    this.setState({ displayNotes: filteredNotes });
  }

  render() {
    return (
      <div className={`app ${this.state.currentTheme}`}>
        <header className='app__header'>
          <AppNavbar 
            onToggleTheme={this.onToggleThemeHandler} 
            iconTheme={this.state.iconTheme} 
          />
        </header>
  
        <main className='app__content'>
          <NotesApp 
            notes={this.state.displayNotes} 
            labels={this.state.labels}
            onSearchHandler={this.onSearchHandler}
            onCreateNoteHandler={this.onCreateNoteHandler}
            onEditNoteHandler={this.onEditNoteHandler}
            onDeleteNote={this.onDeleteNoteHandler} 
          />
        </main>
  
        <footer className='app__footer'>
          <AppFooter />
        </footer>
      </div>
    )
  }
}

export default App
