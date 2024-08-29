const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/consulta-cep', (req, res) => {
    const cep = '36795-000'; // Santana de Cataguases
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }
            return response.json();
        })
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});