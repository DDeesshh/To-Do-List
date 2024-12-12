// добавление списка дел (li, p, buttons)
export


    function createListItem(inputValue, arrTasks) {

    let listItemDiv = document.createElement('div');
    let listItem = document.createElement('li');
    let text = document.createElement('p');
    text.textContent = inputValue;

    let buttonWrapper = document.createElement('div');
    let buttonDone = document.createElement('button');
    buttonDone.textContent = 'выполнено';
    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'удалить';

    buttonWrapper.append(buttonDone, buttonDelete);
    listItemDiv.append(text, buttonWrapper);
    listItem.append(listItemDiv);

    // стили
    listItem.classList.add('list-group-item');
    listItemDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    buttonDelete.classList.add('btn', 'btn-outline-danger');
    buttonDone.classList.add('btn', 'btn-outline-success', 'm-2');

    // buttonDone.addEventListener('click', () => {
    //     if (text.style.textDecoration === 'none') {
    //         text.style.textDecoration = 'line-through'
    //     } else {
    //         text.style.textDecoration = 'none'
    //     }
    // })

    // buttonDelete.addEventListener('click', () => {
    //     listItem.remove();

    //     console.log(listItem);

    // })

    return {listItem, buttonDone, buttonDelete, text};

}

