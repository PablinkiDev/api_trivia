const express = require('express');
const app = express();
const questions = require('./questions.json');


app.get('/', (req, res) => {
    res.json(questions)
})

app.get('/question', (req, res) => {
    
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})

