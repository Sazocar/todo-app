import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../ui/GlobalStyles";
import { TodoForm } from "../../ui/TodoForm";
import ToggleSwitch from "../../ui/ToggleSwitch";
import { lightTheme, darkTheme } from "../../ui/Theme";
import { useTodos } from "../useTodos";
import { useDarkMode } from "../useDarkMode";
import { useLocation } from "react-router-dom";

const EditTodoPage = () => {
  const {todoText, editTodo, addTodos } = useTodos();

  const [theme, themeToggler] = useDarkMode();
  const location = useLocation();
  
  console.log(location);
  const id = location.pathname.split('/');
  console.log(id[2]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToggleSwitch theme={theme} onToggle={themeToggler} />
      <TodoForm
        action='editTask'
        todoID={id}
        editTodo={editTodo}
        addTodos={addTodos}
      />
    </ThemeProvider>
  );
};
export { EditTodoPage };
