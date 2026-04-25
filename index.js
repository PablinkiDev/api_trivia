const express = require('express');
const cors = require('cors');
const app = express();
const questions = require('./questions.json');

const PORT = process.env.PORT || 3000;

app.use(cors({
  methods: ['GET']
}));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API Trivia lista para usarse'
    });
})

app.get('/question', (req, res) => {
    res.json(questions);
})

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ', PORT);
})

