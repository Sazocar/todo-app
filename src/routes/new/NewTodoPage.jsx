import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../ui/GlobalStyles";
import { TodoForm } from "../../ui/TodoForm";
import ToggleSwitch from "../../ui/ToggleSwitch";
import { lightTheme, darkTheme } from "../../ui/Theme";
import { useTodos } from "../useTodos";
import { useDarkMode } from "../useDarkMode";
import { useLocation } from "react-router-dom";

const NewTodoPage = () => {
  const {
    todoText,
    todoID,
    editTodo,
    addTodos,
    setOpenModal
  } = useTodos();

  const [theme, themeToggler] = useDarkMode();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToggleSwitch theme={theme} onToggle={themeToggler} />
      <TodoForm
        action='addTask'
        todoText={todoText}
        todoID={todoID}
        editTodo={editTodo}
        addTodos={addTodos}
        setOpenModal={setOpenModal}
      />
    </ThemeProvider>
  );
}
export { NewTodoPage }; 