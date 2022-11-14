const allowedOrigins = require("../config/allowedOrigins");

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        // if the origin is allowed, set the following headers
        res.set({
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Credentials": true
        })
    }
    next();
}

module.exports = credentials