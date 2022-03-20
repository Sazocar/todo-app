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
        if (todoValue.length > 0) {
            if (event.key == 'Enter') {
                addTodos(todoValue);
                setOpenModal(false);
            }
        }
    };

    return (
        <form onSubmit={addTodoTask}>
            <textarea 
                value={todoValue}
                onChange={onChangeValue}
                onKeyDown={addTodoTaskEnter}
                autoFocus
                placeholder="Task name"
            />

            <div className="buttons-container">
                <button
                    className="button button--primary"
                    type="submit"
                    disabled={!todoValue.length}
                >
                    Add task
                </button>
                <button
                    className="button button--secondary"
                    type="button"
                    onClick={onCancel}
                    
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export { TodoForm };