import React from "react";
import ReactDOM from "react-dom";
import '../Modal/Modal.css';

const ModalToDelete = (props) => {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            { props.children }
        </div>,
        document.getElementById('modaltodelete')
    );
};

export { ModalToDelete };