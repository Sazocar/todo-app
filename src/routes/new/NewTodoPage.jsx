import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../ui/GlobalStyles";
import { TodoForm } from "../../ui/TodoForm";
import ToggleSwitch from "../../ui/ToggleSwitch";
import { lightTheme, darkTheme } from "../../ui/Theme";
import { useTodos } from "../useTodos";
import { useDarkMode } from "../useDarkMode";
import { useLocation, useParams } from "react-router-dom";

const NewTodoPage = () => {
  const { editTodo, addTodos, getTodoText } = useTodos();

  const [theme, themeToggler] = useDarkMode();
  const location = useLocation();
  const { text } = useParams();

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToggleSwitch theme={theme} onToggle={themeToggler} />
      <TodoForm
        action="addTask"
        todoID={text}
        textTodo={location.state}
        editTodo={editTodo}
        addTodos={addTodos}
      />
    </ThemeProvider>
  );
}
export { NewTodoPage }; 