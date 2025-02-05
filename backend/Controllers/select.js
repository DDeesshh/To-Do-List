// ------------------ вывод данных из бд (выборка данных) ------------------

// импорт функции для подключения бд
import { connection } from "../connectDB.js";

// функция вывода данных
export const select = (async (req, res) => {
    connection.query("SELECT * FROM todos order by status",
        function (err, results) {
            if (err) return res.json(err);
            else {
                console.log('результат', results);
                return res.json(results);
            }
        }
    );
});