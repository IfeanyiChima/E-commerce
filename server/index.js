const express = require("express");
const cors = require("cors");
const { json } = require("express");
const colors = require("colors");
const connectDB = require("./config/dbConn")
const mongoose = require("mongoose");
require("dotenv").config();
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const userRoutes = require("./routes/api/user");

const app = express();

const PORT = process.env.PORT || 4000;


// connect to mongoDB
connectDB();

// built-in middleware for json 
app.use(express.json());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));


// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
// add Access-control-allow header
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// middleware for cookies
app.use(cookieParser());

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));
app.use("/products", require("./routes/api/products"));
app.use(verifyJWT);
app.use("/history", require("./routes/api/transaction"));
app.use("/users", userRoutes);


mongoose.connection.once("open", () => {
    console.log(`Connected to MongoDB`.cyan.underline)
    app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))
})