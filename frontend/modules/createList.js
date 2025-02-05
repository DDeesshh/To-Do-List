// добавление списка ul

export
    function createList() {
    let list = document.createElement('ul');

    // стили
    list.classList.add('list-group', 'list-group-flush');

    return list
}