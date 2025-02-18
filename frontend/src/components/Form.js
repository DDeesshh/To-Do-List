import React, { useState } from 'react';

export function Form({ addTask, deleteTasksAll }) {

    const [inputValue, setInputValue] = useState('');

    return (
        <form className="d-flex mb-3" >
            <input placeholder='Введите дело' className="form-control me-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}>
            </input>

            <button className="btn btn-outline-primary"
                onClick={() => addTask(inputValue)} >Добавить</button>
            <button className="btn btn-outline-danger"
                onClick={() => deleteTasksAll()}>Удалить все</button>

        </form>
    );
}
