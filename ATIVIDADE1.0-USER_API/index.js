const express = require('express');
const app = express();
const port = 3000;

// Dados fictícios de usuários
const users = [
    { id: 1, name: 'Beatriz', email: 'bea@exemplo.com' },
    { id: 2, name: 'Carlos', email: 'c4rl0s@exemplo.com' }
];

// Rota para obter todos os usuários
app.get('/users', (req, res) => {
    res.json(users);
});

// Rota para obter detalhes do usuário por ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' })
    }
});

// Inicializador do servidor
app.listen(port, () => {
    console.log(`API inicializada em http://localhost:${port}`);
});