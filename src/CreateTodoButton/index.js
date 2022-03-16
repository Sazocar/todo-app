import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

const CreateTodoButton = () => {

    const { openModal, setOpenModal } = React.useContext(TodoContext);
    const changeModal = () => {
        setOpenModal(!openModal);
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