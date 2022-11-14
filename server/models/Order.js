const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    pid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
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
})

module.exports = mongoose.model("Order", orderSchema)