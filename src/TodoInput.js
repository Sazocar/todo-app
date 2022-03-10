import React from "react";
import './styles/TodoInput.css';

const TodoInput = (props) =>{
    return (
        <div className="input-container">
            <input className="input" placeholder="Add a task..." />
            {props.children}
        </div>
    );
};

export { TodoInput };