import React from "react";
import './TodoSearch.css';

const TodoSearch = ({ setSearchValue }) =>{

    const onChangeValueChange = (event) => {
        setSearchValue(event.target.value);
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