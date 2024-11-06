const express = require('express');
const app = express();
const port = 3000;

app.get('/soma', (req, res) => {
    const { a, b } = req.query;
    const resultado = parseFloat(a) + parseFloat(b);
    res.send({ resultado });
});

app.get('/subtracao', (req, res) => {
    const { a, b } = req.query;
    const resultado = parseFloat(a) - parseFloat(b);
    res.send({ resultado });
});

app.get('/multiplicacao', (req, res) => {
    const { a, b } = req.query;
    const resultado = parseFloat(a) * parseFloat(b);
    res.send({ resultado });
});

app.get('/divisao', (req, res) => {
    const { a, b } = req.query;
    if (parseFloat(b) === 0) {
        return res.status(400).send({ error: 'Não é possivel realizar a divisão por zero.' });
    }
    const resultado = parseFloat(a) / parseFloat(b);
    res.send({ resultado });
});

app.listen(port, () => {
    console.log(`API de calculadora rodando em http://localhost:${port}`);
});