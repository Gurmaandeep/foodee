import express from "express"
import cors from "cors"
import morgan from "morgan"
import 'dotenv/config'

import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app = express()
const port = process.env.port || 4000;

//middleware
app.use(express.json())
//we can access any backkend from frontend
app.use(morgan("dev"));
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)  // calls functions of foodroute.js
app.use("/images", express.static('uploads'))

app.use("/api/user", userRouter)           // calls functions of userroute.js

app.use("/api/cart", cartRouter)                  // calls functions of cartroute.js

app.use("/api/order", orderRouter)                // calls functions of orderoute.js

//request the data from the server
app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})