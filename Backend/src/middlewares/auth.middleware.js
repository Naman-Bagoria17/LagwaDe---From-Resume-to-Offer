const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")

async function authUser(req, res, next) {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({
        token
    })

    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "Invalid token!"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)/// jwt.verify() verifies the token's signature and extracts the payload that was stored when the token was created.

        req.user = decoded //Stores the decoded JWT payload inside the Express request object by creating a new property named "user" so that the next middleware or controller can access it. The main reason is to avoid verifying or decoding the JWT again and to make the authenticated user's information available throughout the rest of the request.

        next()//tells Express to continue to the next middleware or the route handler (controller).

    } catch (err) {

        return res.status(401).json({
            message: "Invalid token!"
        })
    }

}


module.exports = { authUser }