import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = ({ goTo }) => {
  return (
    <div className="button-container">
      <button className="input-button" onClick={goTo}>
        +
      </button>
    </div>
  );
};

export { CreateTodoButton };
