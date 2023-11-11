// eslint-disable-next-line no-unused-vars
import React from 'react'

function ButtonShowModal({ classList, btnText, onShowModalHandler }) {
  return (
    <button className={classList} onClick={() => onShowModalHandler()}>
      {btnText}
    </button>
  );
}

export default ButtonShowModal;

