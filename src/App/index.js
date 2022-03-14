import React from 'react';

import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


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
];

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
