const User = require("../models/User");
const Transactions = require("../models/Transactions");


// get all transaction history for accounts attached to a user
const getAllTransactionHistory = async (req, res) => {
    try {
        const result = await Transactions.find();
        if (!result) return res.status(200).json({ "message": "No such user found" });
        res.status(200).json({result});
    } catch (err) {
        return res.status(500).json({ "msg": err.message });
    }
}


// get account transaction history
const getATransactionHistory = async (req, res) => {
    if (!req?.params) return res.status(400).json({ "message": "parameters are required" });
    const {userId} = req.params;

    try {
        
        // find user that made request
        const user = await User.findById(userId);
        if (!user) return res.status(400).json({ "message": "User not found" }); // check for user

        // find the user transaction history to send to the front-end
        const result = await Transactions.find({ user: req.id });
        if (!result) return res.status(200).json({ "message": "No results found" });
        res.status(200).json( result );
    } catch (err) {
        return res.status(500).json({ "msg": err.message });
    }
}

module.exports = {
    getAllTransactionHistory,
    getATransactionHistory
}