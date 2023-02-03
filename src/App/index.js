import React from "react";

import { useTodos } from "./useTodos";
import { useDarkMode } from "./useDarkMode";
import { TodoHeader } from "../TodoHeader";
import { AppTitle } from "../AppTitle";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { ModalToDelete } from "../ModalToDelete";
import { ConfirmDelete } from "../ConfirmDelete";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { AppState } from "../AppState";
import emptyState from "../assets/empty-box.png";
import notFound from "../assets/pixeltrue-newsletter.png";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Theme";
import { GlobalStyles } from "../GlobalStyles";
import ToggleSwitch from "../ToggleSwitch";

const App = () => {
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
    openModal,
    setOpenModal,
    openConfirmDialog,
    showList,
    setOpenConfirmDialog,
    setTodoText,
    todoID,
    setTodoID,
  } = useTodos();

  const [action, setAction] = React.useState("");
  const [theme, themeToggler] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
                setAction={setAction}
                setTodoID={setTodoID}
                setOpenModal={setOpenModal}
              />
            ))}
        </TodoList>

        {openModal == true && (
          <Modal id="modal">
            <TodoForm
              action={action}
              todoID={todoID}
              todoText={todoText}
              editTodo={editTodo}
              addTodos={addTodos}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}

        {openConfirmDialog == true && (
          <ModalToDelete id="confirmDialog">
            <ConfirmDelete
              text={todoText}
              todoID={todoID}
              setOpenConfirmDialog={setOpenConfirmDialog}
              deleteTodo={deleteTodo}
            />
          </ModalToDelete>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} setAction={setAction} />
      </div>
    </ThemeProvider>
  );
};

export default App;
