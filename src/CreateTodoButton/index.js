import './CreateTodoButton.css'
import icon from '../assets/icons8-más-30.png'

const CreateTodoButton = ({ setOpenModal, setAction }) => {
  const changeModal = () => {
    setOpenModal((prevState) => !prevState)
    setAction('addTask')
  }

  return (
    <div className='button-container'>
      <button className='input-button' onClick={changeModal}>
        <img src={icon} alt='add-button-img' />
      </button>
    </div>
  )
}

export { CreateTodoButton }
