import React from 'react'
import './ConfirmDelete.css'

const ConfirmDelete = ({ text, todoID, setOpenConfirmDialog, deleteTodo }) => {
  document.onkeydown = function (evt) {
    evt = evt || window.event
    let isEscape = false
    if ('key' in evt) {
      isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
    } else {
      isEscape = (evt.keyCode === 27)
    }
    if (isEscape) {
      exitModal()
    }
  }

  const exitModal = () => {
    setOpenConfirmDialog(false)
  }

  const DeleteTodo = (event) => {
    event.preventDefault()
    deleteTodo(todoID)
    console.log(todoID)
    setOpenConfirmDialog(false)
  }

  return (
    <form className='form-toDelete' onSubmit={DeleteTodo}>
      <p className='delete-text'>
        Are you sure you want to delete <b>{text}</b>?
      </p>
      <section className='buttons-container-delete'>
        <button
          className='button button--secondary'
          type='button'
          onClick={exitModal}
        >
          Cancel
        </button>
        <button className='button button--primary' type='submit'>
          Delete
        </button>
      </section>
    </form>
  )
}

export { ConfirmDelete }
