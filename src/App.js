import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const todos = [
  {
    text: 'Ver curso',
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
    text: 'Ver Peaky Blinders',
    completed: false,
  },
]

const App = (props) => {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList >
      <CreateTodoButton /> 
    </React.Fragment>
  );
}

export default App;
