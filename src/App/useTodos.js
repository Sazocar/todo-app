import React from 'react'
import { toast } from 'react-hot-toast'
import { useLocalStorage } from './userLocalStorage'

const useTodos = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', [])

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)
  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false)
  const [showList, setShowList] = React.useState(false)
  const [todoID, setTodoID] = React.useState('')

  React.useEffect(() => {
    setTimeout(() => {
      setShowList(true)
    }, 2000)
  }, [])

  const [todoText, setTodoText] = React.useState('')

  const completedTodos = todos.filter((todo) => todo.completed === true).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (searchValue.length <= 0) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  const findTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    return [todoIndex, newTodos]
  }

  const addTodos = (text) => {
    const id = newTodoId()
    const newTodos = [...todos]

    const obj = {
      id,
      text: text,
      completed: false,
    }

    newTodos.push(obj)
    saveTodos(newTodos)

    toast.success('New task created!')
  }

  const editTodo = (id, newText) => {
    const [todoIndex, newTodos] = findTodo(id)
    newTodos[todoIndex].text = newText
    saveTodos(newTodos)

    toast.success('Task edited successfully!', {
      icon: '✏️',
    })
  }

  const toggleTodos = (id) => {
    const [todoIndex, newTodos] = findTodo(id)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed

    if (newTodos[todoIndex].completed === true) {
      toast.success('Task completed')
    }

    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const [todoIndex, newTodos] = findTodo(id)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)

    toast.success('Task deleted')
  }

  return {
    todos,
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodos,
    editTodo,
    toggleTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    openConfirmDialog,
    setOpenConfirmDialog,
    todoText,
    setTodoText,
    showList,
    setShowList,
    todoID,
    setTodoID,
  }
}

const newTodoId = () => {
  return Date.now().toString(16)
}

export { useTodos }

