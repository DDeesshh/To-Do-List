// ------------------ вывод данных из бд (добавить новое дело) ------------------

// импорт функции для подключения бд
import { connection } from "../connectDB.js";

// функция вывода данных
export const insert = async (req, res) => {
    const data = req.body;
    console.log(data);
    connection.query("INSERT into todos (text) VALUES (?)", [data.text],
        function (err, results) {
            if (err) return res.json(err);
            else {
                console.log('результат: ', results);
            
                return res.json(results);
            }
        }
    );
};

