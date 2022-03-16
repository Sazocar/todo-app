import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

const TodoForm = () => {

    const { addTodos, setOpenModal } = React.useContext(TodoContext)
    const [ todoValue, setTodoValue ] = React.useState('');

    const onChangeValue = (event) => {
        setTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    };

    const AddTodoTask = (event) => {
        event.preventDefault();
        addTodos(todoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={AddTodoTask}>
            <label>Create a new Todo</label>
            <textarea 
                value={todoValue}
                onChange={onChangeValue}
                placeholder="Add your task..."
            />

            <div className="buttons-container">
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export { TodoForm };