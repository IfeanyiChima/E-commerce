const express = require("express");

const router = express.Router();

const { getAllTransactionHistory, getATransactionHistory } = require('../../controllers/transactionController')


router.get("/", getAllTransactionHistory)

router.get("/:userId", getATransactionHistory)



module.exports = router;