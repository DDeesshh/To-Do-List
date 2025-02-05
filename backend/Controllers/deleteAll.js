// ------------------ вывод данных из бд (удаление всех дел) ------------------

// импорт функции для подключения бд
import { connection } from "../connectDB.js";

// функция вывода данных
export const deleteAll = (async (req, res) => {    
    console.log('Удаление всех дел');
    connection.query("DELETE FROM todos",
        function (err, results) {
            if (err) return res.json(err);
            else {
                console.log('результат: ', results);
                return res.json(results);
            }
        }
    );
});