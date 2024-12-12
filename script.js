// импортирование модулей
import { createAppTitle } from "./modules/createAppTitle.js";
import { createToDoItemForm } from "./modules/createToDoItemForm.js";
import { createList } from "./modules/createList.js";
import { createListItem } from "./modules/createListItem.js";
import { saveTasksInLocalStorage } from "./modules/saveTasksInLocalStorage.js";
import { getTasksFromLocalStorage } from "./modules/getTasksFromLocalStorage.js";


let arrTasks = [
    {
        text: "Есть",
        isComplete: false,
        id: '1'
    }
]

arrTasks = getTasksFromLocalStorage();
console.log(arrTasks);

document.addEventListener('DOMContentLoaded', () => {

    let div = document.querySelector('.app');

    let appTitle = createAppTitle('Список дел');
    div.append(appTitle);

    let formToDO = createToDoItemForm();
    div.append(formToDO.inputDiv);
    formToDO.inputDiv.append(formToDO.input, formToDO.button)

    let ulForm = createList();
    div.append(ulForm);

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
            newItem.buttonDone.addEventListener('click', () => {
                let text = newItem.listItem.querySelector('p');
                if (arrTasks[i].isComplete === false) {
                    arrTasks[i].isComplete = true;
                    text.style.textDecoration = 'line-through';
                    // arrTasksItem.style.textDecoration === 'line-through';
                    saveTasksInLocalStorage(arrTasks);
                }

                else if (arrTasks[i].isComplete === true) {
                    arrTasks[i].isComplete = false;
                    text.style.textDecoration = 'none';
                    saveTasksInLocalStorage(arrTasks);
                }
            });

            // кнопка удалить
            newItem.buttonDelete.addEventListener('click', () => {
                console.log(i);
                arrTasks.splice(i, 1);
                console.log(arrTasks);
                saveTasksInLocalStorage(arrTasks);
                location.reload();
            });

        }
    }

    // добавление задачи
    formToDO.button.addEventListener('click', clicker);
    function clicker() {

        if (formToDO.input.value === '') {
            alert('Введите задачу')
        }
        else {
            let textInput = formToDO.input.value;
            let newItem = createListItem(textInput);
            // console.log(textInput)
            ulForm.append(newItem.listItem);
            formToDO.input.value = '';

            arrTasks.push({ text: textInput, isComplete: false  });
            saveTasksInLocalStorage(arrTasks);
            location.reload();
        }
    }

    formToDO.input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            clicker();
        }
    });

});