import React from 'react';
import { Item } from "./Item";

export function Ul({ tasks, deleteTaskById, updateTask }) {
    return (

        <ul className="list-group list-group-flush">

            {/* выполнение кода JS в JSX 
            map - для перебора массива tasks*/}

            {tasks.map((task) => (
                <Item task={task}
                    deleteTaskById={deleteTaskById}
                    updateTask={updateTask} />
            ))}

        </ul>
    );
}

