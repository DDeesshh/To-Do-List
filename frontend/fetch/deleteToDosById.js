// удаление дел из базы данных по id

export async function deleteToDosById(id) {
    console.log(id);
    let response = await fetch(`http://localhost:3000/deleteById/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    let result = await response.json();
 
    return result

}

