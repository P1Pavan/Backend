
import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config()


connectDB().then(() => {
    app.on("error", (error) => {
        console.log(error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log("Server is running at : ",process.env.PORT );
    })
}).catch((err) => {
    console.log("database connection failed", err)
})