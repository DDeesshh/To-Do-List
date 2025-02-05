// ------------------ вывод данных из бд (удаление дел по id) ------------------

// импорт функции для подключения бд
import { connection } from "../connectDB.js";

// функция вывода данных
export const deleteById = (async (req, res) => {
    const id = req.params.id;
    console.log('Удаление дела по ID:', id);
    connection.query("DELETE FROM todos Where id = ?", id,
        function (err, results) {
            if (err) return res.json(err);
            else {
                console.log('результат', results);
                return res.json(results);
            }
        }
    );
});