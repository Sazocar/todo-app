import React from "react";
import './Header.css';

const Header = (props) => {
    return (
        <div className="header-container">
            <h1>{props.text}</h1>
            <img src="https://img.icons8.com/stickers/100/000000/todo-list.png"/>
        </div>
    );
}

export { Header };