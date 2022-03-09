import React from "react";

const TodoItem = (props) => {
    return (
        <li>
            <span>C</span>
            { props.text}
            <span>X</span>
        </li>
    );
}

export { TodoItem };