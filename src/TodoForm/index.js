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

    const addTodoTask = (event) => {
        event.preventDefault();
        addTodos(todoValue);
        setOpenModal(false);
    };

    const addTodoTaskEnter = (event) => {
        if (event.key == 'Enter') {
            addTodos(todoValue);
            setOpenModal(false);
        }
    };

    return (
        <form onSubmit={addTodoTask}>
            <label>Create a new Todo</label>
            <textarea 
                value={todoValue}
                onChange={onChangeValue}
                onKeyDown={addTodoTaskEnter}
                autoFocus
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
                    disabled={!todoValue.length}
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export { TodoForm };