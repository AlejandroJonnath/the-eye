const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  size: String,
  quantity: Number,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
