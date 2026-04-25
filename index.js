const express = require('express');
const app = express();
const questions = require('./questions.json');

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.status(200).send('API Trivia lista para usarse')
})

app.get('/question', (req, res) => {
    res.json(questions);
})

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ', PORT);
})

