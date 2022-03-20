import React from "react";
import ReactDOM from "react-dom";
// import './ModalToDelete.css';

const ModalToDelete = (props) => {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            { props.children }
        </div>,
        document.getElementById('confirmDialog')
    );
};

export { ModalToDelete };