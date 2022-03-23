import React from "react";
import "./TodoCounter.css"


const TodoCounter = ({totalTodos, completedTodos}) => {
    return (
        <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} task.</h2>
    );
};

export { TodoCounter };