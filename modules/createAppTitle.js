// добавление заголовка h1

export
    function createAppTitle(title) {
    let h1 = document.createElement('h1');
    h1.textContent = title;

    // стили
    h1.classList.add('fs-2', 'text-center', 'mb-4');

    return h1
}