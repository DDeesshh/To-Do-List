// ------------------ установка подключения к серверу ------------------

// импорты библиотек
import express from "express";
import mysql from 'mysql2';
import bodyParser from "body-parser";
import cors from "cors";
import nodemon from "nodemon";

// импорт модулей (файл выборки данных из бд) 
import { select } from "./Controllers/select.js";
import { insert } from "./Controllers/insert.js";
import { deleteById } from "./Controllers/deleteById.js";
import { deleteAll } from "./Controllers/deleteAll.js";
import { update } from "./Controllers/update.js";

// запустили express
const app = express();
// подключили порт
const port = 3000;

// прослушивание порта
app.listen(port, () => {
    console.log(`В приложении прослушивается порт: ${port}`)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// настройкм маршрутов, импорты функций из контроллеров
app.get('/', select);
app.post('/add', insert);
app.delete('/deleteById/:id', deleteById);
app.delete('/deleteAll', deleteAll);
app.put('/updateById/:id', update)