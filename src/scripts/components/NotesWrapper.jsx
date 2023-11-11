// eslint-disable-next-line no-unused-vars
import React from "react";
import NoteCard from "./NoteCard";

function NotesWrapper({ notes, labels, tabName, onEditNote, onOpenDetail, onDeleteNote }) {
  return (
    <div className='card__wrapper'>
      { notes.length !== 0 ? 
        notes.map(item => (
          <NoteCard
            key={item.id} 
            note={item}
            labels={labels}
            onOpenDetail={onOpenDetail}
            onEditNote={onEditNote}
            onDeleteNote={onDeleteNote}
          />
        ))
        :
        <div className='card__message'>
          {tabName} is empty
        </div>
      }
    </div>
  )
}

export default NotesWrapper;