// ------------------ вывод данных из бд (обновление дела по id) ------------------

// импорт функции для подключения бд
import { connection } from "../connectDB.js";

// функция вывода данных
export const update = (async (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    console.log('Обновление дела по ID:', id, 'по статусу:', status);
    connection.query("UPDATE todos SET status = ? WHERE id = ?", [status, id],
        function (err, results) {
            if (err) return res.json(err);
            else {
                console.log('результат', results);
                return res.json(results);
            }
        }
    );
});