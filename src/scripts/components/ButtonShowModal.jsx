// eslint-disable-next-line no-unused-vars
import React from 'react'

function ButtonShowModal({ classList, btnIcon, btnText, onShowModalHandler }) {
  return (
    <button className={classList} onClick={() => onShowModalHandler()}>
      {btnIcon}
      {btnText}
    </button>
  );
}

export default ButtonShowModal;

