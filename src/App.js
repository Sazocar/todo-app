import React from 'react';
// import './App.css';
import { Header } from './Header';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const todos = [
  {
    text: 'Ver curso',
    completed: true,
  },
  {
    text: 'Tomar café',
    completed: false,
  },
  {
    text: 'Ir al gym',
    completed: true,
  },
  {
    text: 'Ver Peaky Blinders',
    completed: false,
  },
]

const App = (props) => {
  return (
    <div className='app-container'>
      <Header text="Todo-App"/>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {todos.map(todo => (
          <TodoItem key={todo.text} todo={todo} />
          ))}
      </TodoList >
      <CreateTodoButton /> 
    </div>
  );
}

export default App;
