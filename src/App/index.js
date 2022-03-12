 import React from 'react';
// import './App.css';
import { Header } from '../Header';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


const defaultTodos = [
  {
    text: 'Ver Curso de Introducción a React.js',
    completed: false,
  },
  {
    text: 'Tomar café',
    completed: false,
  },
  {
    text: 'Ir al gym',
    completed: false,
  },
  {
    text: 'Llamar a papá',
    completed: false,
  },
  {
    text: 'Pasear al perro',
    completed: false,
  },
]

const App = () => {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', '[]');
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [ todos, setTodos] = React.useState(parsedTodos);
  const [ searchValue, setSearchValue] = React.useState('');

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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));    
    setTodos(newTodos);
  };

  const findTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    return [todoIndex, newTodos];
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
    <div className='app-container'>
      <Header text="Todo-App"/>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList >
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            todo={todo}
            onToggle={() => toggleTodos(todo.text)}
            // onIncomplete={() => incompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} 
          />
          ))}
      </TodoList >
      <CreateTodoButton /> 
    </div>
  );
}

export default App;
