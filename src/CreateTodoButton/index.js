import React from "react";
import './CreateTodoButton.css';

const CreateTodoButton = ({setOpenModal}) => {

    const changeModal = () => {
        setOpenModal(prevState => !prevState);
    };

    return (
        <button
            className="input-button"
            onClick={changeModal}
        >
        +
        </button>
    );
}

export { CreateTodoButton };