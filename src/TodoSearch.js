import React from "react";
import './styles/TodoSearch.css';

const TodoSearch = (props) =>{
    const onChangeValueChange = (event) => {
        console.log(event);
    };

    return (
        <div className="input-container">
            <input
                className="input"
                placeholder="Search a task..." 
                onChange={onChangeValueChange}
            />
        </div>
    );
};

export { TodoSearch };