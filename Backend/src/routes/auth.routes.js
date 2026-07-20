const { Router } = require('express')
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const authRouter = Router()

// @access is commonly used with JSDoc or API documentation to tell developers who is allowed to access the endpoint. 
// @access Public means Anyone can call this endpoint without being logged in. A new user obviously isn't logged in yet, so these routes must be public.
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController)


/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public
 */
authRouter.post("/login", authController.loginUserController)


/**
 * @route GET /api/auth/logout
 * @description clear token from user cookie and add the token in blacklist
 * @access Public
 */
// The access is made Public because the authentication token may expire while the user is still on the application.
// Now, if the user clicks "Logout" after the token has expired, the request will not contain a valid token to blacklist and thus the Private route will not allow the user to logout and will return 401 unauthenticated error. Consequently, in this case, we have to simply clear the cookie by keeping the route Public so that logout request is valid.

authRouter.get("/logout", authController.logoutUserController)


/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
//Whichever user hits this api, we'll return the authenticated user's profile by extracting their details from the database after verifying the JWT.
authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController)

module.exports = authRouter