const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id: String,
    name: String,
    quantity: Number,
    price: Number,
    colour: String,
    image: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);