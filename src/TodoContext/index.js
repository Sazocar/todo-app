import React from "react";
import { useLocalStorage } from "./userLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [ searchValue, setSearchValue] = React.useState('');
  const [ openModal, setOpenModal ] = React.useState(false);

  const completedTodos = todos.filter(todo => todo.completed==true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length <= 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }  

  const findTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    return [todoIndex, newTodos];
  };

  const addTodos = (text) => {
    const newTodos = [...todos]
    
    const obj = {
      text: text,
      completed: false,
    };

    newTodos.push(obj);
    saveTodos(newTodos);
  };

  const toggleTodos = (text) => {
    const [todoIndex, newTodos] = findTodo(text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const [todoIndex, newTodos] = findTodo(text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodos,
            toggleTodos,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            { props.children }
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };