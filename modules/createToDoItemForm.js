// добавление input и button

export
    function createToDoItemForm() {

    let inputDiv = document.createElement('div');
    let input = document.createElement('input');
    let button = document.createElement('button');
    button.textContent = 'Добавить';
    input.placeholder = 'Добавьте дело';

    // стили
    input.classList.add('form-control', 'me-2');
    button.classList.add('btn', 'btn-outline-primary');
    inputDiv.classList.add('d-flex', 'mb-3');

    return { inputDiv, input, button }
}

