// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import NotesWrapper from './NotesWrapper';

function NotesTabs({ notes, labels, onOpenDetail, onEditNote, onDeleteNote }) {
  const [activeTab, setActiveTab] = useState('note');

  const onTabClickHandler = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <>
      <ul className='tab__list'>
        <li 
          onClick={() => onTabClickHandler('note')} 
          className={`tab__link ${activeTab === 'note' ? 'active' : ''} `}>
          Notes
        </li>

        <li 
          onClick={() => onTabClickHandler('archive')} 
          className={`tab__link ${activeTab === 'archive' ? 'active' : ''} `}>
          Archived
        </li>
      </ul>

      <div className='tab__content'>
        {activeTab === 'note' && (
          <NotesWrapper 
            notes={notes.filter(note => !note.archived)} 
            labels={labels}
            tabName='note'
            onEditNote={onEditNote}
            onOpenDetail={onOpenDetail}
            onDeleteNote={onDeleteNote}
          />
        )}

        {activeTab === 'archive' && (
          <NotesWrapper 
            notes={notes.filter(note => note.archived)}
            labels={labels}
            tabName='archive'
            onEditNote={onEditNote}
            onOpenDetail={onOpenDetail}
            onDeleteNote={onDeleteNote}
          />
        )}
      </div>
    </>
  )
}

export default NotesTabs;