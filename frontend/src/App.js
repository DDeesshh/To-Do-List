// импорт библиотек
import React, { useState, useEffect } from 'react'; // Хуки для управления состоянием и побочными эффектами

// импорт файлов и компонентов
import './App.css';
import { Form } from './components/Form.js';
import { Ul } from './components/Ul.js';

// импорт функций
import { getToDos } from './fetch/getToDos.js';
import { postToDos } from './fetch/postToDos.js';
import { deleteToDosAll } from './fetch/deleteToDosAll.js';
import { deleteToDosById } from './fetch/deleteToDosById.js';
import { updateToDosById } from './fetch/updateToDosById.js';

function App() {

  // функция описания состояния переменной task через хук useState (для отображения всех дел)
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchToDos() {
      let arrTasks = await getToDos();
      setTasks(arrTasks);
    }
    fetchToDos();
  }, []);

  // функция для добавления нового дела
  const addTask = async (text) => {
    if (!text) {
      alert('Введите дело');
      return;
    }
    await postToDos(text);
    const data = await getToDos();
    setTasks(data);
    console.log(text);
  }

  // функция для удаления дела по id
  const deleteById = async (id) => {
    await deleteToDosById(id);
    const data = await getToDos();
    setTasks(data);
  }

  // функция для удаления всех дел
  const deleteAll = async () => {
    await deleteToDosAll();
    const data = await getToDos();
    setTasks(data);
  }

  // функция для обновления дела
  const updateTask = async ({id, text, status}) => {

    // if (task.status.data == 0) {
    //   task.status = 1;
    // } else if (task.status.data == 1) {
    //   task.status = 0;
    // }
    
    console.log(status.data[0]);
    console.log(!status.data[0]);
    console.log(id);

    await updateToDosById(id, !status.data[0]);
    const data = await getToDos();
    setTasks(data);
    // console.log(task.status);
  }

  return (
    <div className="App">

      <header className="App-header">

        <h1 className='fs-2 text-center mb-4'>ToDoList</h1>

        <Form addTask={addTask}
          deleteTasksAll={deleteAll} />

        <Ul tasks={tasks}
          deleteTaskById={deleteById}
          updateTask={updateTask} />

      </header>
    </div>
  );
}

export default App;
