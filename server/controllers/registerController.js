const bcrypt = require("bcrypt");
const User = require("../models/User");
const {generateJWT} = require("../config/generateJWT");


const handleNewUser = async (req, res) => {

    const { user, pwd, roles} = req.body;

    if (!user || !pwd) res.status(400).json({ "message": "Username and password are required." });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409); // Conflict

    try {
        
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        // create and store the password
        let result = await User.create({
            "username": user,
            "password": hashedPwd,
            roles
        })

        // create JWTs
        const accessToken = generateJWT(result.username, result.roles, result._id)

        await result.save();
        console.log(result);

        if (result) {
            // saving refresh token in a cookie
            res.cookie('jwt', user, { httpOnly: true, sameSite: "None", maxAge: 24 * 60 * 60 * 1000 });
            res.status(201).json({
                accessToken, roles: Object.values(result.roles).filter(Boolean) // remove null values 
            });
        }

    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
}


module.exports = {handleNewUser}