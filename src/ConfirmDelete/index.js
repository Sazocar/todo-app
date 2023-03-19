import React from 'react'
import './ConfirmDelete.css'

const ConfirmDelete = ({ text, todoID, setOpenConfirmDialog, deleteTodo }) => {
  const onCancel = () => {
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
          onClick={onCancel}
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
