const express = require("express");

const router = express.Router();

const { getOrders, createOrder, getUserOrders } = require('../../controllers/orderController')

router.route("/")
    .get(getOrders)

router.get("/:userId", getUserOrders)

router.post("/:productId", createOrder)



module.exports = router;