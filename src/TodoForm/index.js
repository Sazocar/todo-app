import React from "react";
import './TodoForm.css'

const TodoForm = ({ action, addTodos, setOpenModal, todoText }) => {

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
		
		const editTask = () => {
			return null;
		};

    return (
        <form className="addTask-form" onSubmit={action == 'addTask' ? addTodoTask : editTask}>
            <textarea 
								className="addTask-textarea"
                defaultValue={action == 'editTask' ? todoText : ''}
                onChange={onChangeValue}
                onKeyDown={addTodoTaskEnter}
                autoFocus
								onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
                placeholder="Task name"
            />

            <div className="buttons-container">
                <button
                    className="button button--primary"
                    type="submit"
                    disabled={!todoValue.length}
                >
                    {action == 'addTask' ? 'Add Task' : 'Save'}
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