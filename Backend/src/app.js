const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())
const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL
].filter(Boolean)

app.use(cors({
    origin(origin, callback) {
        console.log("Origin:", origin);

        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        console.log("Blocked Origin:", origin);
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
// All authentication-related routes (login, signup, etc.) are prefixed with /api/auth
// For example, if authRouter contains: router.post("/login", loginUser);
// then the actual endpoints become: POST / api / auth / login
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

module.exports = app