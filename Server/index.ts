import { Application,Request,Response } from "express"
import express  from "express";
import * as dotenv from 'dotenv';
import * as body_parser from 'body-parser';
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import * as mongoose from "mongoose";
import UserRouter from "./Routes/Api/users.router";
import adminRouter from "./Routes/Api/admin.router";
import { errorHandler } from "./middleware/Error/errorHandler";
const app:Application = express();
dotenv.config()
const port = process.env.PORT || 3000;
const api = process.env.API_URL
const sessionSecret = process.env.SESSION_SECRET!
const jwtSecret = process.env.JWT_SECRET!

app.use(cookieParser(sessionSecret))
console.log(sessionSecret)
app.use(session({
    secret:sessionSecret,
    resave:false,
    saveUninitialized:false,
    cookie: { secure: true, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }
}))
app.use(body_parser.json())
app.use(cors())


const connectDb = async ()=>{
try{
const conn = await mongoose.connect(process.env.MONGODB_URL as string)
console.log("MongoDB connected"+`${conn.connection.host}`)
}
catch(err){
console.log(err)
process.exit(1)
}
}
connectDb()

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
    console.log(`Server running on port ${port},${api}`)

})

app.use(`${api}/users`,UserRouter)
app.use(`${api}/admin`,adminRouter)
app.use(errorHandler)