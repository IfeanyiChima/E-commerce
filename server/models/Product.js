const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    quantity: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Product", productSchema)