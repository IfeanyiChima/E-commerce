const mongoose = require("mongoose");
const schema = mongoose.Schema;

const transactionSchema = schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    statement: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("transactions", transactionSchema)
