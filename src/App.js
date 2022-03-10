import React from 'react';
// import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoInput } from './TodoInput';
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
  }
]

const App = (props) => {
  return (
    <div className='app-container'>
      <TodoCounter />
      <TodoInput>
        <CreateTodoButton /> 
      </TodoInput>
      <TodoList >
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList >
    </div>
  );
}

export default App;
