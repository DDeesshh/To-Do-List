// добавление дел в базу данных через .value

export async function postToDos(text) {
    console.log(text);
    let response = await fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(text)
    });

    let result = await response.json();
 
    return result

}

