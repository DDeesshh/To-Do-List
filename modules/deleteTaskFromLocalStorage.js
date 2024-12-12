export
    function deleteTaskFromLocalStorage(arrTasks) {
    localStorage.removeItem('arrTasks', JSON.stringify(arrTasks));
    
}

