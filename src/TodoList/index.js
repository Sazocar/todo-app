import React from "react";
import './TodoList.css';

const TodoList = (props) => {
    return (
        <section>
            { props.error && <p>There was an error loading your todo list.</p> }
            { props.loading && <p>Loading your todo list...</p> }
            { (!props.loading && !props.searchedTodos.length) && <p>Todo list is empty. Create your first todo!</p>}
            <ul>
                { props.children }
            </ul>
        </section>
    );
}

export { TodoList };