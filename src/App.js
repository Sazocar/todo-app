 import React from 'react';
// import './App.css';
import { Header } from './Header';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  {
    text: 'Ver curso',
    completed: true,
  },
  {
    text: 'Tomar café',
    completed: true,
  },
  {
    text: 'Ir al gym',
    completed: false,
  },
  {
    text: 'Ver Peaky Blinders',
    completed: false,
  },
  {
    text: 'Ver Euphoria',
    completed: true,
  },
]

const App = () => {

  const [ todos, setTodos] = React.useState(defaultTodos);
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
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
            onComplete={() => completeTodo(todo.text)} 
          />
          ))}
      </TodoList >
      <CreateTodoButton /> 
    </div>
  );
}

export default App;
