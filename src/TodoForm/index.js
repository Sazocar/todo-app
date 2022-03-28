import React from "react";
import './TodoForm.css'

const TodoForm = ({ action, addTodos, editTodo, setOpenModal, todoText }) => {

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
		
		const editTask = (event) => {
			event.preventDefault();
			editTodo(todoText, todoValue);
			setOpenModal(false);
		};

		const editTodoTaskEnter = (event) => {
			if (todoValue.length > 0) {
            if (event.key == 'Enter') {
                editTodo(todoText, todoValue);
								setOpenModal(false);
            }
        }
		}

    return (
        <form className="addTask-form" onSubmit={action == 'editTask' ? editTask : addTodoTask }>
            <textarea 
								className="addTask-textarea"
                defaultValue={action == 'editTask' ? todoText : ''}
                onChange={onChangeValue}
                onKeyDown={action == 'editTask' ? editTodoTaskEnter : addTodoTaskEnter}
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