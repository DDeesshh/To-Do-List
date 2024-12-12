// получение списка задач в localStorage
export

    function getTasksFromLocalStorage() {
    let arrTasks = localStorage.getItem('arrTasks');
    if (arrTasks) {
        return JSON.parse(arrTasks)
    } else {
        return [];
    }
}