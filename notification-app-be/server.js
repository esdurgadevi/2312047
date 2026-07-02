import express from "express"
import dotenv from "dotenv";
import { loggerMiddleware } from "./middleware/loggerMiddleware.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config()

const app = express();
app.use(express.json());
const port = process.env.PORT;
app.use(loggerMiddleware);
app.use("/api", notificationRoutes);

app.listen(port,()=>{
    console.log(`Server run on ${port}`);
})