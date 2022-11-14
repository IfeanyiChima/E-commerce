const bcrypt = require("bcrypt");
require("dotenv").config();
const {generateJWT} = require("../config/generateJWT");
const User = require("../models/User");


const handleLogin = async (req, res) => {
    
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ "message": "please add a username" });
    
    // find the particular user
    const foundUser = await User.findOne({ username: user }).exec();
    if (!foundUser) return res.sendStatus(401); // unAuthorized
    
    try {
        // evaluate Password
        const match = bcrypt.compare(foundUser.password, pwd);

        if (match) {
            // to remove null values from the roles object
            const roles = Object.values(foundUser.roles).filter(Boolean);


            // create new JWTs
            const accessToken = generateJWT(foundUser.username, roles, foundUser._id)


            const result = await foundUser.save();
            console.log(result);

            // saving refresh token in a cookie
            res.cookie('jwt', user, { httpOnly: true, sameSite: "None", maxAge: 24 * 60 * 60 * 1000 });

            res.json({accessToken});

        } else {
            res.sendStatus(401);  // unAuthorized
        }
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
}

module.exports =  {handleLogin} 