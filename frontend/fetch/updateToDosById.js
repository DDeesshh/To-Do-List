// обновление дел из базы данных по id

export async function updateToDosById(id, status) {
    console.log(id);
    let response = await fetch(`http://localhost:3000/updateById/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ status })
    });
    let result = await response.json();

    return result

}

