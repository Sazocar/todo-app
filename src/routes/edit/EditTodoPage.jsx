import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../ui/GlobalStyles";
import { TodoForm } from "../../ui/TodoForm";
import ToggleSwitch from "../../ui/ToggleSwitch";
import { lightTheme, darkTheme } from "../../ui/Theme";
import { useTodos } from "../useTodos";
import { useDarkMode } from "../useDarkMode";
import { useLocation } from "react-router-dom";

const EditTodoPage = () => {
  const { editTodo, addTodos, getTodoText } = useTodos();

  const [theme, themeToggler] = useDarkMode();
  const location = useLocation();
  const todoID = location.pathname.split("/")[2];
  const textTodo = getTodoText(todoID).text;


  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToggleSwitch theme={theme} onToggle={themeToggler} />
      <TodoForm
        action="editTask"
        todoID={todoID}
        textTodo={textTodo}
        editTodo={editTodo}
        addTodos={addTodos}
      />
    </ThemeProvider>
  );
};
export { EditTodoPage };
