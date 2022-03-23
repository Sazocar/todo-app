import React from "react";
import './AppTitle.css';

const AppTitle = ({text}) => {
    return (
        <div className="header-container">
            <h1>{text}</h1>
            <img src="https://img.icons8.com/stickers/100/000000/todo-list.png"/>
        </div>
    );
}

export { AppTitle };