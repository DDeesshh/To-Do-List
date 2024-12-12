// сохранение списка задач в localStorage

export
    function saveTasksInLocalStorage(arrTasks) {
    localStorage.setItem('arrTasks', JSON.stringify(arrTasks));
    
}
