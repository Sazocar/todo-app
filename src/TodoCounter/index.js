import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <h2 className={`TodoCounter  ${loading === true && "TodoCounter--loading"}`}>
      You have completed {completedTodos} of {totalTodos} tasks.
    </h2>
  );
};

export { TodoCounter };
