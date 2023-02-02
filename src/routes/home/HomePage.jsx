import React from "react";
import { useNavigate } from "react-router-dom";

import { useTodos } from "../useTodos";
import { useDarkMode } from "../useDarkMode";
import { TodoHeader } from "../../ui/TodoHeader";
import { AppTitle } from "../../ui/AppTitle";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { TodoForm } from "../../ui/TodoForm";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { Modal } from "../../ui/Modal";
import { ModalToDelete } from "../../ui/ModalToDelete";
import { ConfirmDelete } from "../../ui/ConfirmDelete";
import { LoadingSkeleton } from "../../ui/LoadingSkeleton";
import { AppState } from "../../ui/AppState";
import emptyState from "../../assets/empty-box.png";
import notFound from "../../assets/pixeltrue-newsletter.png";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../ui/Theme";
import { GlobalStyles } from "../../ui/GlobalStyles";
import ToggleSwitch from "../../ui/ToggleSwitch";


const HomePage = () => {
  const navigate = useNavigate();

  const {
    error,
    loading,
    todos,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodos,
    editTodo,
    toggleTodos,
    deleteTodo,
    todoText,
    todoID,
    setTodoID,
    openModal,
    setOpenModal,
    openConfirmDialog,
    showList,
    setOpenConfirmDialog,
    setTodoText,
  } = useTodos();

  
  const [theme, themeToggler] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />   

      <ToggleSwitch theme={theme} onToggle={themeToggler} />

      <div className="app-container">
        <TodoHeader loading={loading}>
          <AppTitle text="Todo-App" />

          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />

          <TodoSearch setSearchValue={setSearchValue} />
        </TodoHeader>

        <TodoList>
          {error && <p>There was an error loading your todo list.</p>}
          {loading &&
            Array(totalTodos)
              .fill(1)
              .map((a, i) => <LoadingSkeleton key={i} />)}
          {!loading && !todos.length && (
            <AppState state="empty" path={emptyState} />
          )}
          {!loading && todos.length > 0 && !searchedTodos.length && (
            <AppState
              state="notFound"
              path={notFound}
              searchValue={searchValue}
            />
          )}

          {showList == true &&
            searchedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodos(todo.id)}
                setOpenConfirmDialog={setOpenConfirmDialog}
                setTodoText={setTodoText}
                setTodoID={setTodoID}
                setOpenModal={setOpenModal}
              />
            ))}
        </TodoList>

        {/* {openModal && (
          <Modal id="modal">
            <TodoForm
              action={action}
              todoText={todoText}
              todoID={todoID}
              editTodo={editTodo}
              addTodos={addTodos}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )} */}

        {openConfirmDialog == true && (
          <ModalToDelete id="confirmDialog">
            <ConfirmDelete
              todoID={todoID}
              text={todoText}
              searchedTodos={searchedTodos}
              setOpenConfirmDialog={setOpenConfirmDialog}
              deleteTodo={deleteTodo}
            />
          </ModalToDelete>
        )}

        <CreateTodoButton 
          goTo={() => navigate('/new')}
        />
      </div>
    </ThemeProvider>
  );
};

export { HomePage };
