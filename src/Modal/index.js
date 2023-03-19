import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = (props) => {
  const id = props.id
  return ReactDOM.createPortal(
    <div className='ModalBackground'>{props.children}</div>,
    document.getElementById(id)
  )
}

export { Modal }
