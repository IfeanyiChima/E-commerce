const express = require("express");

const router = express.Router();

const {getAllProducts, createManyProducts, filterProducts } = require('../../controllers/productController')


router.get("/", getAllProducts)

router.post("/:category", filterProducts)

router.get("/createMany", createManyProducts)


module.exports = router;    