const express = require('express');
const router = express.Router();
const {
    readInventory,
    createProduct,
    deleteProduct,
    upsertProduct
} = require('../../data/=inventory');

router.get('/', (req, res, next) =>{
    readInventory().then(data => {
        res.send(data);
    });
});

router.post('/', (req, res, next) => {
    const body = req.body
    createProduct(body).then(data => res.send(data));
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const body = req.body
    upsertProduct(id, body).then(data => res.send(data));
});

router.delete('/', (req, res, next) => {
    const id = req.body._id
    deleteProduct(id).then(data => res.send(data));
});

module.exports = router;