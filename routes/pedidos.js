const express = require('express');
const router = express.Router();


// Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    })
});

// Insere um pedido
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Insere um pedido'
    })
});

// Retorna os dados de um pedido
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_pedido;
        res.status(200).send({
            mensagem: 'Detalhes do pedido',
            id_pedido: id
        })
});

// deleta um pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluído'
    })
});

module.exports = router;