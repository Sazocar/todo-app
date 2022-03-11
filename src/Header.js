import React from "react";
import './styles/Header.css';

const Header = (props) => {
    return (
        <div className="header-container">
            <h1>Todo-App</h1>
            <img src="https://img.icons8.com/stickers/100/000000/todo-list.png"/>
        </div>
    );
}

export { Header };