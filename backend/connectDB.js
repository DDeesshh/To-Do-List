// ------------------ установка подключения к бд ------------------

// импорт библиотек
import mysql from 'mysql2';

// куда подключаемся (настройки)
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ToDoList",
    password: ""
});

// сообщения после подключения к бд
connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено, хы)");
    }
});

export { connection };

// // вывод данных из бд
// connection.query("SELECT * FROM todos",
//     function (err, results) {
//         console.log(err);
//         console.log(results); // собственно данные
//         //   console.log(fields); // мета-данные полейЯ
//     });

// // добавление данных
// const textToDo = ["Выучить JavaScript"];
// const sql = "INSERT INTO todos(text) VALUES(?)";

// // отображение  введенных новых данных или ошибки
// connection.query(sql, textToDo, function (err, results) {
//     if (err) console.log(err);
//     else console.log("Данные добавлены");
// });