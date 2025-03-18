const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../../dist')));

// Универсальный маршрут для страниц
const sendPage = (page) => (req, res) => {
    res.sendFile(path.join(__dirname, `../../dist/pages/${page}.html`));
};

app.get('/', sendPage('quiz-catalog'));
app.get('/quiz-constructor', sendPage('quiz-builder-page')); // Если файл другой, просто поменяй 'quiz-catalog' на нужный

app.listen(PORT, () => {
    console.log(`✅ Server started on http://localhost:${PORT}`);
});
