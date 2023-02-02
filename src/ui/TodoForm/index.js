import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TodoForm.css";


const TodoForm = ({ action, todoID, textTodo, addTodos, editTodo }) => {
  const [todoValue, setTodoValue] = React.useState("");
  const navigate = useNavigate();

  const onChangeValue = (event) => {
    setTodoValue(event.target.value);
  };

  const addTodoTask = (event) => {
    event.preventDefault();
    addTodos(todoValue);
    navigate("/");
  };

  const addTodoTaskEnter = (event) => {
    if (todoValue.length > 0) {
      if (event.key == "Enter") {
        addTodos(todoValue);
      }
    }
  };

  const editTask = (event) => {
    event.preventDefault();
    editTodo(todoID, todoValue);
    navigate("/");
  };

  const editTodoTaskEnter = (event) => {
    if (todoValue.length > 0) {
      if (event.key == "Enter") {
        editTodo(todoID, todoValue);
      }
    }
  };

  return (
    <form
      className="addTask-form"
      onSubmit={action == "editTask" ? editTask : addTodoTask}
    >
      <textarea
        className="addTask-textarea"
        defaultValue={action == "editTask" ? textTodo : ""}
        onChange={onChangeValue}
        onKeyDown={action == "editTask" ? editTodoTaskEnter : addTodoTaskEnter}
        autoFocus
        onFocus={(e) =>
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length
          )
        }
        placeholder="Task name"
      />

      <div className="buttons-container">
        <button
          className="button button--primary"
          type="submit"
          disabled={!todoValue.length}
        >
          {action == "addTask" ? "Add Task" : "Save"}
        </button>
        <button
          className="button button--secondary"
          type="button"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
