const express = require('express');
const static = require('node-static');

const app = express();

// Создаем кеш карты на стороне сервера
const fileServer = new static.Server('public', { cache: 3600 });

// Обрабатываем запросы клиента
app.use(express.static('public'));

// Запускаем сервер
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});