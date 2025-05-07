const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Crear nuevo pedido
router.post('/', async (req, res) => {
  const newOrder = new Order(req.body);
  const saved = await newOrder.save();
  res.status(201).json(saved);
});

// Obtener todos los pedidos (opcional)
router.get('/', async (req, res) => {
  const orders = await Order.find().populate('productId');
  res.json(orders);
});

module.exports = router;
