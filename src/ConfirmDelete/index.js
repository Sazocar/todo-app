import React from "react";
import { TodoContext } from "../TodoContext";
import './ConfirmDelete.css'


const ConfirmDelete = ({text}) => {
    const { searchedTodos, setOpenConfirmDialog, deleteTodo } = React.useContext(TodoContext);
    const todoIndex = searchedTodos.findIndex(todo => todo.text === text);

    const onCancel = () => {
        setOpenConfirmDialog(false);
    };

    const DeleteTodo = (event) => {
        event.preventDefault();
        deleteTodo(text);
        setOpenConfirmDialog(false);
    };

    return(
        <form className="form-toDelete" onSubmit={DeleteTodo}>
            <h2>Are you sure you want to delete "{text}" </h2>
            <section>
                <button
                    type="submit"
                >
                    Yes
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    No
                </button>
            </section>
        </form>
    );
};

export { ConfirmDelete };


