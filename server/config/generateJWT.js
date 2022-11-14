const jwt = require("jsonwebtoken");

// Generate JWT
const generateJWT = (username, roles, id) => {
    return jwt.sign(
        {
            "UserInfo": {
                id,
                username,
                roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10m" }
    )
}

module.exports = {generateJWT};