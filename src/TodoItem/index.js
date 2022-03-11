import React from "react";
import './TodoItem.css';

const circle = 'https://img.icons8.com/ios-glyphs/30/26e07f/circled.png';
const filledCircle = 'https://img.icons8.com/ios-glyphs/30/26e07f/checked--v1.png';

const TodoItem = (props) => {
    return (
        <li>
            <img 
                src={props.todo.completed ? filledCircle : circle }
                onClick={props.onToggle}
            />
            <p className={props.todo.completed ? 'task-completed' : 'task-incompleted'}>
                {props.todo.text}
            </p>
            <img 
                className="delete-button" 
                alt="svgImg" 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzY2NjY2NiI+PHBhdGggZD0iTTcxLjY2NjY3LDE0LjMzMzMzbC03LjE2NjY3LDcuMTY2NjdoLTM1LjgzMzMzdjE0LjMzMzMzaDcuMTY2Njd2MTA3LjVjMCwzLjc0MjU5IDEuMzcxMTksNy41NTgwNCA0LjA3MzI0LDEwLjI2MDA5YzIuNzAyMDUsMi43MDIwNSA2LjUxNzUsNC4wNzMyNCAxMC4yNjAwOSw0LjA3MzI0aDcxLjY2NjY3YzMuNzQyNTksMCA3LjU1ODA0LC0xLjM3MTE5IDEwLjI2MDA5LC00LjA3MzI0YzIuNzAyMDUsLTIuNzAyMDYgNC4wNzMyNCwtNi41MTc1IDQuMDczMjQsLTEwLjI2MDA5di0xMDcuNWg3LjE2NjY3di0xNC4zMzMzM2gtMzUuODMzMzNsLTcuMTY2NjcsLTcuMTY2Njd6TTUwLjE2NjY3LDM1LjgzMzMzaDcxLjY2NjY3djEwNy41aC03MS42NjY2N3pNNjQuNSw1MC4xNjY2N3Y3OC44MzMzM2gxNC4zMzMzM3YtNzguODMzMzN6TTkzLjE2NjY3LDUwLjE2NjY3djc4LjgzMzMzaDE0LjMzMzMzdi03OC44MzMzM3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                onClick={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };