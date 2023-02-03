import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../ui/GlobalStyles";
import { TodoForm } from "../../ui/TodoForm";
import ToggleSwitch from "../../ui/ToggleSwitch";
import { lightTheme, darkTheme } from "../../ui/Theme";
import { useTodos } from "../useTodos";
import { useDarkMode } from "../useDarkMode";
import { useLocation, useParams } from "react-router-dom";

const EditTodoPage = () => {
  const { loading, editTodo, addTodos, getTodoText } = useTodos();
  const [theme, themeToggler] = useDarkMode();
  const { text } = useParams();
  const location = useLocation();

  let todoText;
    
  if (location.state?.todo) {
    todoText = location.state.todo.text;
    console.log(location);
  } else if (loading) {
    return <p>Loading...</p>
  } else {
    todoText = getTodoText(text);
  }    

  return (
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ToggleSwitch theme={theme} onToggle={themeToggler} />
        <TodoForm
          action="editTask"
          todoID={text}
          textTodo={todoText}
          editTodo={editTodo}
          addTodos={addTodos}
        />
      </ThemeProvider>
    );
  
};
export { EditTodoPage };
