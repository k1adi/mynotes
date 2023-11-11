// eslint-disable-next-line no-unused-vars
import React from "react";
import { showFormattedDate } from "../utils/data-notes";
import { getLabelName, getLabelHexCode } from "../utils/data-label";

function NoteDetail({ labels, note, isModalVisible, onToggleCardDetail }) { 
  const hexCode = getLabelHexCode(labels, note.label);
  const labelName = getLabelName(labels, note.label);

  const cardStyle = {
    color: hexCode
  }

  return (
    <div className={`modal__wrapper ${isModalVisible ? '' : 'hide'} `}>
      <div className='modal__content'>
        <div className='modal__card'>
          <div className='modal__card__header'>
            <h2 className='modal__card__title'>Note Detail</h2>
            <button 
              className='modal__card__close'
              onClick={() => onToggleCardDetail(note.id)}
            >
              ✕
            </button>
          </div>
          <div className='modal__card__body'>
            <small style={cardStyle}> { labelName } </small>
            <h3 className='text__title'> {note.title} </h3>
            <p className='text__date'> { showFormattedDate(note.createdAt) } </p>
            <p className='text__desc'>{note.body}</p>
            { note.updatedAt && (
              <p className='text__date text__italic'>Last Modified: { showFormattedDate(note.updatedAt) }</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetail;