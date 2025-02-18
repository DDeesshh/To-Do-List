// обновление дел из базы данных по id

export async function updateToDosById(id, status) {
    console.log("ID для обновления: ", id, "Новый статус: ", status);
    let response = await fetch(`http://localhost:3001/updateById/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ status }) // убрала text:
    });
    let result = await response.json();

    return result

}

