import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

const TodoSearch = () =>{

    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onChangeValueChange = (event) => {
        console.log(event.target.value);
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