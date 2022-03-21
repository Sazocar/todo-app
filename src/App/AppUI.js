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
import { LoadingSkeleton } from '../LoadingSkeleton';
import { AppState } from '../AppState';
import emptyState from '../assets/empty-box.png'
import notFound from '../assets/pixeltrue-newsletter.png';


const AppUI = () => {
    const {
        todos,
        error,
        loading,
        searchValue,
        searchedTodos,
        toggleTodos,
        deleteTodo,
        openModal, 
        setOpenModal,
        todoText,
        openConfirmDialog,
        totalTodos,
        showList,
        setShowList
        } = React.useContext(TodoContext);

        
  return (
    <div className='app-container'>
        <Header text="Todo-App"/>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            { error && <p>There was an error loading your todo list.</p> }
            { loading && Array(totalTodos).fill(1).map((a, i) => <LoadingSkeleton key={i} />)}
            { (!loading && !todos.length) && <AppState state="empty" path={emptyState} />}
            { (!loading && todos.length > 0 && !searchedTodos.length) && <AppState state="notFound" path={notFound} />}

            {showList==true && searchedTodos.map(todo => (
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