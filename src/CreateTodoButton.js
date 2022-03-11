import React from "react";
import './styles/CreateTodoButton.css';

const CreateTodoButton = () => {
    const openAlert = () => {
        alert('Aqui va a un modal en el futuro!');
    };

    return (
        <button
            className="input-button"
            onClick={openAlert}
        >
        +
        </button>
    );
}

export { CreateTodoButton };