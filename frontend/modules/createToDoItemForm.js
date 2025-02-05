// добавление input и button

export
    function createToDoItemForm() {

    let inputDiv = document.createElement('div');
    let input = document.createElement('input');
    let button = document.createElement('button');
    button.textContent = 'Добавить';
    input.placeholder = 'Добавьте дело';

    // кнопка "удалить все"
    let deleteAll = document.createElement('button');
    deleteAll.textContent = 'Удалить все';

    // стили
    input.classList.add('form-control', 'me-2');
    button.classList.add('btn', 'btn-outline-primary');
    inputDiv.classList.add('d-flex', 'mb-3');
    deleteAll.classList.add('btn', 'btn-outline-danger')

    return { inputDiv, input, button, deleteAll }
}

