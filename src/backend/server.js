const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../../dist')));

const sendPage = (page) => (req, res) => {
    res.sendFile(path.join(__dirname, `../../dist/pages/${page}.html`));
};

app.get('/', sendPage('quiz-catalog'));
app.get('/quiz-constructor', sendPage('quiz-builder-page'));

app.listen(PORT, () => {
    console.log(`✅ Server started on http://localhost:${PORT}`);
});
