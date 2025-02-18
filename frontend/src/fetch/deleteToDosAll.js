// удаление всех дел

export async function deleteToDosAll() {
    console.log("Удаление всех дел");
    let response = await fetch('http://localhost:3001/deleteAll', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    let result = await response.json();

    return result

}

