// получение дел с сервера

export async function getToDos() {

    let response = await fetch('http://localhost:3001');
    let result = await response.json(); // читаем ответ в формате JSON
    // console.log(result);
    return result

}
