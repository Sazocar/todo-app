import React from "react";
import './styles/TodoSearch.css';

const TodoSearch = (props) =>{
    return (
        <div className="input-container">
            <input className="input" placeholder="Search a task..." />
        </div>
    );
};

export { TodoSearch };