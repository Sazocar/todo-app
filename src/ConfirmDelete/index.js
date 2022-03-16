import React from "react";
import { TodoContext } from "../TodoContext";
import './ConfirmDelete.css'


const ConfirmDelete = ({text}) => {
    const { todos, setOpenModalToDelete, deleteTodo, getTodoIndex } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModalToDelete(false);
    };

    const DeleteTodo = (event) => {
        event.preventDefault();
        deleteTodo(text);
        setOpenModalToDelete(false);
    }

    return(
        <form className="form-toDelete" onSubmit={DeleteTodo}>
            <h2>Are you sure you want to delete {text}?</h2>
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