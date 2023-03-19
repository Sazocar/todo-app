import React from 'react'
import './CreateTodoButton.css'

const CreateTodoButton = ({ setOpenModal, setAction }) => {
  const changeModal = () => {
    setOpenModal((prevState) => !prevState)
    setAction('addTask')
  }

  return (
    <div className='button-container'>
      <button className='input-button' onClick={changeModal}>
        +
      </button>
    </div>
  )
}

export { CreateTodoButton }
