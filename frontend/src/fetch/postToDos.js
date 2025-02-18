// добавление дел в базу данных через .value

export async function postToDos(text) {
    console.log("Дело для добавления", text);
    let response = await fetch('http://localhost:3001/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ text: text })
    });


    return response

}

