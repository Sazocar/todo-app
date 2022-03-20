import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = ({setOpenModal}) => {

    const changeModal = () => {
        setOpenModal(prevState => !prevState);
    };

    return (
        <div className="button-container">
            <button
                className="input-button"
                onClick={changeModal}
            >
            +
            </button>
        </div>
    );
}

export { CreateTodoButton };