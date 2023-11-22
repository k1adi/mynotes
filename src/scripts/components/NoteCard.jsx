// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { showFormattedDate } from "../utils/data-notes";
import { getLabelName, getLabelHexCode } from "../utils/data-label";

function NoteCard({ note, labels, onOpenDetail, onEditNote, onDeleteNote }) {
  const hexCode = getLabelHexCode(labels, note.label);
  const labelName = getLabelName(labels, note.label);

  const cardStyle = {
    color: hexCode
  }

  return(
    <div className='card__note'>
      <div className='card__note__body' onClick={() => onOpenDetail(note.id)}>
        <small style={cardStyle}> { labelName } </small>
        <h3 className='text__title'> { note.title } </h3>
        <p className='text__date'> { showFormattedDate(note.createdAt) } </p>
        <p className='text__desc'> { note.body.length > 150 ? 
          `${note.body.substring(0, 150)}...` : note.body
        } 
        </p>
      </div>
      <div className='card__note__footer'>
        <button 
          className='button button--edit'
          onClick={() => onEditNote(note.id)}
        > 
          <FaPenToSquare className='icon'/>
          <span>edit</span>
        </button>
        <button
          className='button button--delete'
          onClick={() => onDeleteNote(note.id)}
        > 
          <FaTrashCan className='icon' /> 
          <span>delete</span>
        </button>
      </div>
    </div>
  )
}

export default NoteCard;