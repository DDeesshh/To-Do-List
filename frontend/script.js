// импортирование модулей
import { createAppTitle } from "./modules/createAppTitle.js";
import { createToDoItemForm } from "./modules/createToDoItemForm.js";
import { createList } from "./modules/createList.js";
import { createListItem } from "./modules/createListItem.js";

import { getToDos } from "./fetch/getToDos.js";
import { postToDos } from "./fetch/postToDos.js";
import { deleteToDosById } from "./fetch/deleteToDosById.js";
import { deleteToDosAll } from "./fetch/deleteToDosAll.js";
import { updateToDosById } from "./fetch/updateToDosById.js";

document.addEventListener('DOMContentLoaded', async () => {

    let div = document.querySelector('.app');

    let appTitle = createAppTitle('Список дел');
    div.append(appTitle);

    let formToDO = createToDoItemForm();
    div.append(formToDO.inputDiv);
    formToDO.inputDiv.append(formToDO.input, formToDO.button, formToDO.deleteAll);

    let ulForm = createList();
    div.append(ulForm);

    // отображение всех дел из бд с сервера
    let arrTasks = await getToDos();
    // console.log(arrTasks);

    if (arrTasks.length === 0) {
        ulForm.append('Ваш список дел пуст')
    } else {
        for (let i = 0; i < arrTasks.length; i++) {
            // console.log(arrTasks[i]);
            let arrTasksItem = arrTasks[i].text;
            // console.log(arrTaskItem);
            let newItem = createListItem(arrTasksItem);
            ulForm.append(newItem.listItem);

            // кнопка выполнено
            newItem.buttonDone.addEventListener('click', async () => {

                let taskId = arrTasks[i].id;
                let taskStatus = arrTasks[i].status.data;
                console.log("ID дела: ", taskId, "Статус дела: ", taskStatus);

                let text = newItem.listItem.querySelector('p');

                if (taskStatus[0] === 0) {
                    taskStatus[0] = 1;
                    text.style.textDecoration = 'line-through';
                }

                else if (taskStatus[0] === 1) {
                    taskStatus[0] = 0;
                    text.style.textDecoration = 'none';
                }

                // передаю данные на сервер для обновления дела по id в бд
                await updateToDosById(taskId, taskStatus[0]);

            });

            // кнопка удалить
            newItem.buttonDelete.addEventListener('click', async () => {

                let taskId = arrTasks[i].id;
                // console.log(taskId);

                // передаю данные на сервер для удаления дела по id в бд
                await deleteToDosById(taskId);

                // console.log(i);
                arrTasks.splice(i, 1);
                console.log(arrTasks);
                location.reload();
            });

        }
    }

    // добавление задачи
    formToDO.button.addEventListener('click', clicker);
    async function clicker() {

        if (formToDO.input.value === '') {
            alert('Введите задачу')
        }
        else {
            let textInput = formToDO.input.value;

            // передаю данные на сервер для отображения нового дела в бд
            await postToDos({ text: textInput });
            let newItem = createListItem(textInput);
            console.log(textInput);
            ulForm.append(newItem.listItem);
            formToDO.input.value = '';

            arrTasks.push({ text: textInput, isComplete: false });
            location.reload();
        }
    }

    formToDO.input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            clicker();
        }
    });

    // удаление всего
    formToDO.deleteAll.addEventListener('click', click);

    async function click() {

        // передаю данные на сервер для удаления всех дел в бд
        await deleteToDosAll();

        arrTasks.splice(0, arrTasks.length)
        console.log(arrTasks);
        location.reload();
        // div.remove(ulForm);
    }

});