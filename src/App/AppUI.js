import React from 'react';

import { Header } from '../Header';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { ModalToDelete } from '../ModalToDelete';
import { ConfirmDelete } from '../ConfirmDelete';

const AppUI = () => {
    const { 
        error,
        loading,
        searchedTodos,
        toggleTodos,
        deleteTodo,
        openModal, 
        setOpenModal,
        todoText,
        openConfirmDialog,
        } = React.useContext(TodoContext);

  return (
    <div className='app-container'>
        <Header text="Todo-App"/>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            { error && <p>There was an error loading your todo list.</p> }
            { loading && <p>Loading your todo list...</p> }
            { (!loading && !searchedTodos.length) && <p>Todo list is empty. Create your first todo!</p>}

            {searchedTodos.map(todo => (
            <TodoItem
                key={todo.text}
                todo={todo}
                onToggle={() => toggleTodos(todo.text)}
                onDelete={() => deleteTodo(todo.text)} 
            />
            ))}
        </TodoList >

        {openModal==true && (
            <Modal id="modal">
                <TodoForm />
            </Modal>
        )}

        {openConfirmDialog==true && (
            <ModalToDelete id="confirmDialog">
                <ConfirmDelete text={todoText}/>
            </ModalToDelete> 
        )}

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        /> 
    </div>
  );
}

export { AppUI };